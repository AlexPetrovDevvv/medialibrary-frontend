import { getToast } from "@/entities/toast"
import { defineStore } from "pinia"
import { onMounted, ref} from "vue"
import { IVIdeo, IVideosDelete, IVideosUpdate, IVideosUpload } from "../types/types"
import axios from "../api/index"
import { togglePreloader } from "@/entities/preloader"

export const useVideoList = defineStore('videoList', () => {
    const videoList = ref<IVIdeo[] | []>([])
    const videoNameList = ref(["Название", "Ссылка", "Дополнительные действия"])

    const createVideo = async(bodyData: IVideosUpload) => {
        try {
            const res = await axios.videos.uploadvideos(bodyData)
            const data: IVIdeo = res.data
            //@ts-ignore
            videoList.value.push(data)
            togglePreloader(false)
            getToast('success', "Видео успешно загруженo")
        } catch (err: any) {
            togglePreloader(false)
            getToast('error', err.response.data.message)
        }
    }
    const deleteVideo = async (bodyData: IVideosDelete) => {
        try {
            await axios.videos.deleteVideos(bodyData)
            videoList.value = videoList.value.filter((item) => item._id !== bodyData.id)
            getToast('success', "Видео успешно удалено")
        } catch (err: any) {
            getToast('error', err.response.data.message)
        }
    }
    const updateVideo = async (bodyData: IVideosUpdate) => {
        try {
            const res = await axios.videos.updateVideos(bodyData)
            const data: IVIdeo = res.data
            //@ts-ignore
            const array = [...videoList.value]
            array.map(item => {
                if(item._id === data._id) {
                    item = data
                    return item
                } else {
                    return item
                }
            })
            videoList.value = array
            getToast('success', "Видео успешно обновлено")
        } catch (err: any) {
            getToast('error', err.response.data.message)
        }
    }
    const getVideoList = async () => {
        try {
            // const res = await instance.get('files/videos')
            const res = await axios.videos.getVideos()
            const data = res.data
            videoList.value = data
            getToast('success', "Видео успешно загружены")
        }
        catch (err: any) {
            getToast('error', "Не удалось загрузить видео")
        }
    }
    onMounted(() => {
        getVideoList()
    })
    return { videoList, videoNameList, createVideo, deleteVideo, updateVideo, getVideoList }
})