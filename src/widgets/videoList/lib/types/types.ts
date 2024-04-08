export interface IVIdeo {
    _id: string,
    name: string,
    url: string
}

export interface IVideosUpload {
    name: string,
    file: File
}

export interface IVideosUpdate {
    id: string,
    file: File
}

export interface IVideosDelete {
    id: string,
}

