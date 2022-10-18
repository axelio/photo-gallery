import * as thumbnails from '../architecture2/thumbnails';
import * as desktopPhotos from '../architecture2/desktop';
import * as mobilePhotos from '../architecture2/phone';

import { PictureWithThumbnail } from '../../common/types';

const images: PictureWithThumbnail[] = [
    { thumbnail: thumbnails.img1, photo: { desktop: desktopPhotos.img1, mobile: mobilePhotos.img1, title: "Plovdiv", } },
    { thumbnail: thumbnails.img3, photo: { desktop: desktopPhotos.img3, mobile: mobilePhotos.img3, title: "Plovdiv", } },
    { thumbnail: thumbnails.img4, photo: { desktop: desktopPhotos.img4, mobile: mobilePhotos.img4, title: "Plovdiv", } },
    { thumbnail: thumbnails.img5, photo: { desktop: desktopPhotos.img5, mobile: mobilePhotos.img5, title: "Plovdiv", } },
    { thumbnail: thumbnails.img6, photo: { desktop: desktopPhotos.img6, mobile: mobilePhotos.img6, title: "Istanbul", } },
    { thumbnail: thumbnails.img7, photo: { desktop: desktopPhotos.img7, mobile: mobilePhotos.img7, title: "Istanbul", } },
    { thumbnail: thumbnails.img8, photo: { desktop: desktopPhotos.img8, mobile: mobilePhotos.img8, title: "Istanbul", } },
    { thumbnail: thumbnails.img9, photo: { desktop: desktopPhotos.img9, mobile: mobilePhotos.img9, title: "Istanbul", } },
    { thumbnail: thumbnails.img10, photo: { desktop: desktopPhotos.img10, mobile: mobilePhotos.img10, title: "Lviv", } },
    { thumbnail: thumbnails.img11, photo: { desktop: desktopPhotos.img11, mobile: mobilePhotos.img11, title: "Lviv", } },
    { thumbnail: thumbnails.img12, photo: { desktop: desktopPhotos.img12, mobile: mobilePhotos.img12, title: "Lviv", } },
    { thumbnail: thumbnails.img13, photo: { desktop: desktopPhotos.img13, mobile: mobilePhotos.img13, title: "Warszawa", } },
    { thumbnail: thumbnails.img14, photo: { desktop: desktopPhotos.img14, mobile: mobilePhotos.img14, title: "Plovdiv", } },
]

export default images;
