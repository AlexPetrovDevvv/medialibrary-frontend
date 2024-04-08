import {string, object} from "yup"

export const loginShema = object({
    login: string().required("Введите логин"),
    password: string().required("Введите пароль")
})