import React from 'react';

import './Main.css';
import { header, lisbon, sea, lviv, skalne } from '../../assets/background'
import Item from './Item/Item';
import { Layers } from './Item/types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LazyLoading from '../LazyLoading/LazyLoading';

const Main: React.FC = () => {

    const items: JSX.Element[] = [
        <Item layer={Layers.Grey} key="nature2" title="outdoor" image={skalne} link='/nature2' />,
        <Item layer={Layers.Grey} key="architecture2" title="cities" image={lviv} link='/architecture2' />,
        <Item layer={Layers.DarkBlue} key="nature" title="nature" image={sea} link='/nature' />,
        <Item layer={Layers.DarkGrey} key="architecture" title="architecture" image={lisbon} link='/architecture' />,
    ]

    return (
        <>
            <Header image={header} title={'some galleries'} />
            <section className='items'>
                <h2>photos</h2>
                <hr />
                <LazyLoading
                    items={items}
                    className={'mainLazyLoading'} />
            </section>
            <Footer />
        </>
    )
}

export default Main;