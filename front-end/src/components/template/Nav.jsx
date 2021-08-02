import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar, criar um component para cada link do menu */}
            <Link to="/">
                <i className='fa fa-home'></i>
                Início
            </Link>

            <Link to="/users">
                <i className='fa fa-users'></i>
                Users
            </Link>
        </nav>
    </aside>

export default Nav;