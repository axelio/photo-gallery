import React from 'react';
import Gallery from '../../Gallery/Gallery';
import { header } from '../../../assets/background';
import images from '../../../assets/architecture2/images';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Architecture2: React.FC = () => {
    return (
        <>
            <Header image={header} title={"Architecture"} showHome />
            <h1 style={{textAlign: 'center', marginTop: 10, fontSize: 40, fontWeight: 900}}>2019</h1>
            <Gallery images={images} />
            <Footer />
        </>
    );
}

export default Architecture2;