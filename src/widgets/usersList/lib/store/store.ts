import { getToast } from "@/entities/toast"
import { instance } from "@/shared/lib/api"
import { defineStore } from "pinia"
import { onMounted, ref} from "vue"
import { ICreateUser, IUser } from "../types/types"
import axios from "../api/index"

export const useUserList = defineStore('userList', () => {
    const userList = ref<IUser[] | []>([])
    const userNameList = ref(["Имя", "Логин", "email", "роль", "Дополнительные действия"])

    const createUser = async(bodyData: ICreateUser) => {
        try {
            const res = await axios.users.createNewUser(bodyData)
            const data: IUser = res.data._doc
            //@ts-ignore
            userList.value.push(data)
            console.log(userList.value)
            getToast('success', "Пользователь успешно создан")
        } catch (err: any) {
            getToast('error', err.response.data.message)
        }
    }
    const deleteUser = async(bodyData: string) => {
        try {
            await axios.users.deleteUser(bodyData)
            userList.value = userList.value.filter(item => item._id !== bodyData)
            getToast('success', "Видео успешно удалено")
        } catch (err: any) {
            getToast('error', err.response.data.message)
        }
    }
    // const updateUser = () => {

    // }
    const getUserList = async () => {
        try {
            const res = await instance.get('users')
            const data = res.data
            userList.value = data
            getToast('success', "Пользователи успешно загружены")
        }
        catch (err: any) {
            getToast('error', "Не удалось загрузить пользователей")
        }
    }
    onMounted(() => {
        getUserList()
    })
    return { userList, userNameList, createUser, deleteUser}
})