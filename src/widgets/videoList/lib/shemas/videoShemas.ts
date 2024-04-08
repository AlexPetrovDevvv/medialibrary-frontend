import {string, object, mixed} from "yup"

export const createVideoShema = object({
    name: string().required("Введите имя Файла"),
    file: mixed().required('Прикрепите файл')
})

export const updateVideoShema = object({
    id: string().required("Ошибка: видео не существует"),
    file: mixed().required('Прикрепите файл')
})