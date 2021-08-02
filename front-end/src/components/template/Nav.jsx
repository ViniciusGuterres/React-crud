import React from 'react';
import './Nav.css';

const Nav = props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar, criar um component para cada link do menu */}
            <a href="#/">
                <i className='fa fa-home'></i>
                Início
            </a>

            <a href="#/users">
                <i className='fa fa-users'></i>
                Users
            </a>
        </nav>
    </aside>

export default Nav;