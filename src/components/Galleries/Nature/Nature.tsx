import React from 'react';

import Gallery from '../../Gallery/Gallery';
import { header } from '../../../assets/background';
import images from '../../../assets/nature/images';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Nature: React.FC = () => {
    return (
        <>
            <Header title={"Nature"} image={header} showHome />
            <Gallery images={images} />
            <Footer />
        </>
    )
}

export default Nature;
