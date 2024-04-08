import IVideosUpload from "../types/files";

export default function(instance: any) {
    return {
        uploadvideos(data: IVideosUpload) {
            return instance.post('files/videos', data);
        },
        getVideos() {
            return instance.get('files/videos');
        }
    }
}

export {
}