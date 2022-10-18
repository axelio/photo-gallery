import React from 'react';

import Gallery from '../../Gallery/Gallery';
import { header } from '../../../assets/background';
import images from '../../../assets/nature2/images';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Nature2: React.FC = () => {
    return (
        <>
            <Header title={"Nature"} image={header} showHome />
            <h1 style={{textAlign: 'center', marginTop: 10, fontSize: 40, fontWeight: 900}}>2019</h1>
            <Gallery images={images} />
            <Footer />
        </>
    )
}

export default Nature2;
