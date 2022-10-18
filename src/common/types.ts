export type PictureWithThumbnail = {
    thumbnail: string,
    photo: Photo    
}

export type Photo = {
    desktop: string,
    mobile: string,
    title?: string,
    data?: string
}