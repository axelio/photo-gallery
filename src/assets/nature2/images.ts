import * as thumbnails from '../nature2/thumbnails';
import * as desktopPhotos from '../nature2/desktop';
import * as mobilePhotos from '../nature2/phone';

import { PictureWithThumbnail } from '../../common/types';

const images: PictureWithThumbnail[] = [
    { thumbnail: thumbnails.img1, photo: { desktop: desktopPhotos.img1, mobile: mobilePhotos.img1, title: "Mazury", } },
    { thumbnail: thumbnails.img2, photo: { desktop: desktopPhotos.img2, mobile: mobilePhotos.img2, title: "Mazury", } },
    { thumbnail: thumbnails.img3, photo: { desktop: desktopPhotos.img3, mobile: mobilePhotos.img3, title: "Trondheim", } },
    { thumbnail: thumbnails.img4, photo: { desktop: desktopPhotos.img4, mobile: mobilePhotos.img4, title: "Trondheim", } },
    { thumbnail: thumbnails.img5, photo: { desktop: desktopPhotos.img5, mobile: mobilePhotos.img5, title: "Adršpach", } },
    { thumbnail: thumbnails.img6, photo: { desktop: desktopPhotos.img6, mobile: mobilePhotos.img6, title: "Tatry", } },
    { thumbnail: thumbnails.img7, photo: { desktop: desktopPhotos.img7, mobile: mobilePhotos.img7, title: "Cyprus", } },
    { thumbnail: thumbnails.img8, photo: { desktop: desktopPhotos.img8, mobile: mobilePhotos.img8, title: "Cyprus", } },
    { thumbnail: thumbnails.img9, photo: { desktop: desktopPhotos.img9, mobile: mobilePhotos.img9, title: "Lsibon", } },
    { thumbnail: thumbnails.img10, photo: { desktop: desktopPhotos.img10, mobile: mobilePhotos.img10, title: "Sopot", } },
    { thumbnail: thumbnails.img11, photo: { desktop: desktopPhotos.img11, mobile: mobilePhotos.img11, title: "Istanbul", } },
    { thumbnail: thumbnails.img12, photo: { desktop: desktopPhotos.img12, mobile: mobilePhotos.img12, title: "Firefighters", data: "Tribute" } },
]

export default images;
