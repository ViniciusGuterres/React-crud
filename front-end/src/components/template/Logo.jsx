import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import Img from '../../assets/images/logo.png';

const Logo = props => {
    return(
        <aside className='logo'>
            <Link to="/" className="logo">
                <img src={Img}
                alt='logo'/>
            </Link>
        </aside>
    );
};

export default Logo;

