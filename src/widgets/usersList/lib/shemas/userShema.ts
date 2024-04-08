import {string, object} from "yup"


export const createUserShema = object({
    email: string().email('Введите корректный email').required('Введите email'),
    login: string().required('Введите логин'),
    role: string().required('Установите Роль'),
    fullname: string().required('Введите имя')
})