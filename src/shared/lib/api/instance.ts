import axios from "axios";
import router from "@/pages/lib/router/router";
import { getToast } from "@/entities/toast";
import getCookie from "@/shared/lib/utils/useCookie";

const instance: any = axios.create({
    baseURL: import.meta.env.VITE_API,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
        accept: 'aplication/json',
    }
});

instance.interceptors.request.use( (config: any) => {
    if(getCookie('access_token')) {
        config.headers.authorization = `Bearer ${getCookie('access_token')}`
    }
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = "multipart/form-data"
    } else {
        config.headers['Content-Type'] = "application/json"
    }
    return config
}, () => {})

instance.interceptors.response.use( (config: any) => {
    return config
}, async (error: any) => {
    let originalRequest = error.config
    if(error.code == "ERR_NETWORK") {
        getToast('error', "Отсутствие соединения")
        return
    }
    if(error.response.data.expired && !originalRequest.retry) {
        try {
            originalRequest.retry = true
            const res = await instance.get(`${import.meta.env.VITE_API}/auth`, {}, {
            })
            document.cookie = `access_token=${res.data.accessToken}; max-age=3600; path=/`
            localStorage.setItem("role", res.data.role)
            return instance.request(originalRequest)
        } catch (error) {
            document.cookie = "access_token=;max-age=-1";
            localStorage.removeItem("role")
            router.push({name: 'login'})
        }
    }
    if(error.response?.status === 401) {
        getToast('error', "Вы не авторизованны")
        router.push({name: 'login'})
    }
    throw error
})
export default instance