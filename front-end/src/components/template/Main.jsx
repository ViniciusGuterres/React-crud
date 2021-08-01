import React from 'react';
import Header from './Header';
import './Main.css';

const Main = props => 
    <React.Fragment>
        <Header/>
        <main className="content">Conteúdo</main>
    </React.Fragment>

export default Main;