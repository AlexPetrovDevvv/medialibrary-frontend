import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { Login } from "@/pages/login"
import { Page } from "@/pages/layout/page"
import { Video } from "@/pages/videos"
import getCookie from "@/shared/lib/utils/useCookie"
import { mainPage } from "@/pages/main"
import { Users } from "@/pages/users"




const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        alias: '/main',
        component: Page,
        children: [
            {
                path: '/',
                alias: '/main',
                name: 'main',
                component: mainPage,
            },
            {
                path: '/video',
                name: 'video',
                component: Video,
            },
            {
                path: '/users',
                name: 'users',
                component: Users,
            },
        ]
    },
    {
        path: '/auth',
        component: Login,
        name: 'login',
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, _from, next) => {
    const accessToken = getCookie('access_token')
    if(!accessToken) {
        if(to.name === 'login') {
            return next()
        } else {
            return next({
                name: 'login'
            })
        }
    }
    if(accessToken) {
        if(to.name === 'login') {
            return next({
                name: 'main'
            })
        } else {
            return next()
        }
    }

    //@ts-ignore
    document.title = to.name;
    next();
})

export default router