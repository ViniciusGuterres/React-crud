import React from 'react';
import './Logo.css';
import Img from '../../assets/images/logo.png';

const Logo = props => {
    return(
        <aside className='logo'>
            <a href="/" className="logo">
                <img src={Img}
                alt='logo'/>
            </a>
        </aside>
    );
};

export default Logo;

