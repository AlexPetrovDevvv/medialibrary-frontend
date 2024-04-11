import { togglePreloader } from "@/entities/preloader";
import { createVideoShema, updateVideoShema } from "../shemas/videoShemas";
import { useVideoList } from "../store/store";
import { IVideosDelete, IVideosUpdate, IVideosUpload } from "../types/types";



async function  createVideo(data: IVideosUpload & FormData) {
    const videoStore = useVideoList()
    const formJSON: { [key: string]: any } = {};
    for (var key of data.keys()) {
        formJSON[key] = data.get(key);
    }
    togglePreloader(true)
    try {
        await createVideoShema.validate(formJSON, { abortEarly: false })
        return await videoStore.createVideo(data)

    }
    catch(err: any) {
        togglePreloader(false)
        // @tse-ignore
        err.inner.forEach((error: any) => {
        // @ts-ignore
        getToast('error', error.message)
        });
    }
}

async function deleteVideo(data: IVideosDelete) {
    const videoStore = useVideoList()
    try {
        await videoStore.deleteVideo(data)
    }
    catch(err: any) {
    }

}

async function updateVideo(data: IVideosUpdate & FormData) {
    const videoStore = useVideoList()
    const formJSON: { [key: string]: any } = {};
    for (var key of data.keys()) {
        formJSON[key] = data.get(key);
    }
    try {
        await updateVideoShema.validate(formJSON, { abortEarly: false })
        return await videoStore.updateVideo(data)
    }
    catch(err: any) {
        console.log(err.inner)
        // @ts-ignore
        err.inner.forEach((error) => {
        // @ts-ignore
        getToast('error', error.message)
        });
    }
}

export { createVideo, deleteVideo, updateVideo }