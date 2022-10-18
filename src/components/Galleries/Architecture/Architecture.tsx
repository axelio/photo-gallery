import React from 'react';
import Gallery from '../../Gallery/Gallery';
import { header } from '../../../assets/background';
import images from '../../../assets/architecture/images';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Architecture: React.FC = () => {
    return (
        <>
            <Header image={header} title={"Architecture "} showHome />
            <Gallery images={images} />
            <Footer />
        </>
    );
}

export default Architecture;