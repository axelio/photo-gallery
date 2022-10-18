import React, { useState, useEffect } from 'react';
import { faTimesCircle, faInfoCircle, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swipeable } from 'react-swipeable'

import './FullPhoto.css';
import { KeyboardKeyCodes, FullPhotoPassedParams } from './types';

const FullPhoto: React.FC<FullPhotoPassedParams> = ({ images, selectedPhotoIndex, onClose }) => {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(selectedPhotoIndex);
    const [showDescription, setShowDescription] = useState(false);
    const [showButtons, setShowButtons] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('resize', handleWindowResize)
        }
    });

    useEffect(() => {
        if (isMobile && document.fullscreenEnabled && !document.fullscreenElement)
            document.documentElement.requestFullscreen();
    }, [isMobile]);

    const handleKeyPress = (event: any) => {
        switch (event.keyCode) {
            case KeyboardKeyCodes.Escape:
                closeFullPhoto();
                break;
            case KeyboardKeyCodes.Info:
                toggleDescription();
                break;
            case KeyboardKeyCodes.LeftArrow:
                showPreviousPicture();
                break;
            case KeyboardKeyCodes.RightArrow:
                showNextPicture();
                break;
        }
    }

    const handleWindowResize = () => setIsMobile(window.innerWidth < 768);

    const hideDescription = () => setShowDescription(false);

    const photos = images.map(i => i.photo);
    const photo = photos[currentPhotoIndex];

    const showNextPicture = () => {
        showDescription && hideDescription();
        currentPhotoIndex === photos.length - 1 ?
            setCurrentPhotoIndex(0) :
            setCurrentPhotoIndex(prevCurrentPhotoIndex => prevCurrentPhotoIndex + 1);
    }

    const showPreviousPicture = () => {
        showDescription && hideDescription();
        currentPhotoIndex === 0 ?
            setCurrentPhotoIndex(photos.length - 1) :
            setCurrentPhotoIndex(prevCurrentPhotoIndex => prevCurrentPhotoIndex - 1);
    }

    const toggleDescription = () => {
        const photo = photos[currentPhotoIndex];
        if (photo.data || photo.title) setShowDescription(prevShowDescription => !prevShowDescription)
    }

    const onPhotoClicked = () => setShowButtons(prevShowButtons => !prevShowButtons);

    const closeFullPhoto = () => {
        if (document.exitFullscreen && document.fullscreenElement) document.exitFullscreen();
        onClose();
    };

    return (
        <Swipeable onSwipedLeft={showNextPicture} onSwipedRight={showPreviousPicture}>
            <div className='photo-wrapper' id='photo-wrapper'>
                <div className='close-space' onClick={closeFullPhoto}></div>
                <img src={isMobile ? photo.mobile : photo.desktop} className='photo' onClick={onPhotoClicked} alt="" />

                {showDescription && <div className='description' onClick={hideDescription}>
                    <div className='layer'></div>
                    {photo.title && <p className='text title'>{photo.title}</p>}
                    {photo.data && <p className='text photo-data'>{photo.data}</p>}
                </div>}

                {showButtons &&
                    <div>
                        <div className='btn quitBtn' onClick={closeFullPhoto}>
                            <FontAwesomeIcon icon={faTimesCircle} size={"3x"} />
                        </div>
                        {(photo.data || photo.title) && <div className='btn infoBtn' onClick={toggleDescription}>
                            <FontAwesomeIcon icon={faInfoCircle} size={"3x"} />
                        </div>}
                        <div className='btn leftBtn' onClick={showPreviousPicture}>
                            <FontAwesomeIcon icon={faChevronCircleLeft} size={"3x"} />
                        </div>
                        <div className='btn rightBtn' onClick={showNextPicture}>
                            <FontAwesomeIcon icon={faChevronCircleRight} size={"3x"} />
                        </div>
                    </div>
                }
            </div>
        </Swipeable>
    );
}

export default FullPhoto;