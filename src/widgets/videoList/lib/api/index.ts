import { instance } from "@/shared/lib/api";
import { IVideosDelete, IVideosUpdate, IVideosUpload } from "../types/types";


function VideoApi (instance: any) {
    return {
        uploadvideos(data: IVideosUpload) {
            return instance.post('files/videos', data);
        },
        getVideos() {
            return instance.get('files/videos');
        },
        updateVideos(data: IVideosUpdate) {
            return instance.patch('files/videos', data)
        },
        deleteVideos(data: IVideosDelete) {
            return instance.delete('files/videos', {data})
        }
    }
}


export default {
    videos: VideoApi(instance),
}