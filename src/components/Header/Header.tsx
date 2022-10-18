import React from 'react';
import './Header.css';
import { HeaderProps } from './types';
import { Link } from 'react-router-dom';

const Header: React.FC<HeaderProps> = ({image, title, showHome = false, showLayer = false}) => {
    return (
        <div className="gallery-header" style={{ backgroundImage: `url(${image})` }}>
            {showLayer && <div className="layer"></div>}
            <h1>{title}</h1>
            {showHome && <Link to="/"><div className="homelink"> Home </div></Link>}
        </div>
    )
}

export default Header;