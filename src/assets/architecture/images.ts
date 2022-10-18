import * as thumbnails from '../architecture/thumbnails';
import * as desktopPhotos from '../architecture/desktop';
import * as mobilePhotos from '../architecture/phone';

import { PictureWithThumbnail } from '../../common/types';

const images: PictureWithThumbnail[] = [
    { thumbnail: thumbnails.img1, photo: { desktop: desktopPhotos.img1, mobile: mobilePhotos.img1, title: "Kraków", data: "Poland, 2017" } },
    { thumbnail: thumbnails.img7, photo: { desktop: desktopPhotos.img7, mobile: mobilePhotos.img7, title: "Kraków", data: "Poland, 2018" } },
    { thumbnail: thumbnails.img3, photo: { desktop: desktopPhotos.img3, mobile: mobilePhotos.img3, title: "Warsaw", data: "Poland, 2018" } },
    { thumbnail: thumbnails.img4, photo: { desktop: desktopPhotos.img4, mobile: mobilePhotos.img4, title: "Warsaw", data: "Poland, 2018" } },
    { thumbnail: thumbnails.img8, photo: { desktop: desktopPhotos.img8, mobile: mobilePhotos.img8, title: "Wrocław", data: "Hey Joe Guitar World Record, Poland, 2018" } },
    { thumbnail: thumbnails.img5, photo: { desktop: desktopPhotos.img5, mobile: mobilePhotos.img5, title: "Sardinia", data: "Italy, 2017" } },
    { thumbnail: thumbnails.img6, photo: { desktop: desktopPhotos.img6, mobile: mobilePhotos.img6, title: "Sardinia", data: "Italy, 2017" } },
    { thumbnail: thumbnails.img14, photo: { desktop: desktopPhotos.img14, mobile: mobilePhotos.img14, title: "Tenerife", data: "Spain, 2017" } },
    { thumbnail: thumbnails.img9, photo: { desktop: desktopPhotos.img9, mobile: mobilePhotos.img9, title: "Lisbon", data: "Portugal, 2018" } },
    { thumbnail: thumbnails.img10, photo: { desktop: desktopPhotos.img10, mobile: mobilePhotos.img10, title: "Lisbon", data: "Portugal, 2018" } },
    { thumbnail: thumbnails.img11, photo: { desktop: desktopPhotos.img11, mobile: mobilePhotos.img11, title: "Trondheim", data: "Norway, 2018" } },
    { thumbnail: thumbnails.img12, photo: { desktop: desktopPhotos.img12, mobile: mobilePhotos.img12, title: "Trondheim", data: "Norway, 2018" } },
    { thumbnail: thumbnails.img13, photo: { desktop: desktopPhotos.img13, mobile: mobilePhotos.img13, title: "Trondheim", data: "Norway, 2018" } },
    { thumbnail: thumbnails.img15, photo: { desktop: desktopPhotos.img15, mobile: mobilePhotos.img15, title: "Sofia", data: "Bulgaria, 2019" } },
    { thumbnail: thumbnails.img16, photo: { desktop: desktopPhotos.img16, mobile: mobilePhotos.img16, title: "Sofia", data: "Bulgaria, 2019" } },
    { thumbnail: thumbnails.img17, photo: { desktop: desktopPhotos.img17, mobile: mobilePhotos.img17, title: "Pancharevo", data: "Bulgaria, 2019" } },
    { thumbnail: thumbnails.img18, photo: { desktop: desktopPhotos.img18, mobile: mobilePhotos.img18, title: "Train...", data: "Somewhere in Bulgaria, 2019" } },
]

export default images;
