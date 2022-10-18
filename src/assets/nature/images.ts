import * as thumbnails from '../nature/thumbnails';
import * as desktopPhotos from '../nature/desktop';
import * as mobilePhotos from '../nature/phone';

import { PictureWithThumbnail } from '../../common/types';

const images: PictureWithThumbnail[] = [
    { thumbnail: thumbnails.img1, photo: { desktop: desktopPhotos.img1, mobile: mobilePhotos.img1, title: "Baltic", data: "Poland, 2016" } },
    { thumbnail: thumbnails.img3, photo: { desktop: desktopPhotos.img3, mobile: mobilePhotos.img3, title: "Sardinia", data: "Italy, 2016" } },
    { thumbnail: thumbnails.img9, photo: { desktop: desktopPhotos.img9, mobile: mobilePhotos.img9, title: "Sardinia", data: "Italy, 2017" } },
    { thumbnail: thumbnails.img7, photo: { desktop: desktopPhotos.img7, mobile: mobilePhotos.img7, title: "Tenerife", data: "Spain, 2017" } },
    { thumbnail: thumbnails.img8, photo: { desktop: desktopPhotos.img8, mobile: mobilePhotos.img8, title: "Tenerife", data: "Spain, 2017" } },
    { thumbnail: thumbnails.img4, photo: { desktop: desktopPhotos.img4, mobile: mobilePhotos.img4, title: "Lakatnik", data: "Bulgaria, 2019" } },
    { thumbnail: thumbnails.img5, photo: { desktop: desktopPhotos.img5, mobile: mobilePhotos.img5, title: "Lakatnik", data: "Bulgaria, 2019" } },
    { thumbnail: thumbnails.img6, photo: { desktop: desktopPhotos.img6, mobile: mobilePhotos.img6, title: "Martenica", data: "Bulgaria, Plovdiv, 2019" } },
]

export default images;
