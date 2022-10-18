import { PictureWithThumbnail } from "../../common/types";

export enum KeyboardKeyCodes {
    Escape = 27,
    RightArrow = 39,
    LeftArrow = 37,
    Info = 73
}

export type FullPhotoPassedParams = {
    images: PictureWithThumbnail[],
    selectedPhotoIndex: number,
    onClose: Function
}

export type FullPhotoRouterProps = {
    location: FullPhotoPassedParams
}