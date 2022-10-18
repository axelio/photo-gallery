import React from 'react';
import '../Main.css';
import { ItemProps } from './types';
import { Link } from 'react-router-dom';

const Item: React.FC<ItemProps> = ({ layer, image, title, link }) => {
    return (
            <div className='item' style={{ backgroundImage: `url(${image})` }}>
                <Link to={link} >
                    <div className="layer" style={{ backgroundColor: layer }}></div>
                    <p>{title}</p>
                </Link>
            </div>
    );
}

export default Item