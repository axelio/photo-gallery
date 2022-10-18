import React, { useEffect, useState } from 'react';

import './Gallery.css';
import { GalleryProps } from './types';
import Spinner from '../Spinner/Spinner';
import FullPhoto from '../FullPhoto';

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [isLoadingPhotos, setIsLoadingPhotos] = useState(true);
    const [loadedImages, setLoadedImages] = useState(0);
    const [showFullPhoto, setShowFullPhoto] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(NaN);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const imageLoaded = () => {
        setLoadedImages(prev => prev + 1);
        if (loadedImages === images.length - 1) setIsLoadingPhotos(false);
    }

    const showPhoto = (index: number) => {
        setPhotoIndex(index)
        setShowFullPhoto(true);
    }

    const closePhoto = () => {
        setShowFullPhoto(false);
        setPhotoIndex(NaN);
    }

    return (
        <>
            {isLoadingPhotos && <div className='spinnerContainer'><Spinner /></div>}
            <div className='photos' style={{ display: `${isLoadingPhotos ? 'none' : ''}` }}>
                {images.map((image, index) =>
                    <div key={index} className='thumbnail' onClick={() => showPhoto(index)}>
                        <img src={image.thumbnail} onLoad={imageLoaded} alt="" />
                    </div>
                )}
            </div>
            {showFullPhoto && <FullPhoto images={images} selectedPhotoIndex={photoIndex} onClose={() => closePhoto()} />}
        </>
    );
}

export default Gallery;