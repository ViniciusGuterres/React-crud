import React from 'react';
import Main from '../template/Main';

const Home = props => 
    <Main 
        icon='home'
        title='Início'
        subtitle='Todos os produtos do catálogo'
    >
        <div className='display-4'>
            Bem Vindo!
        </div>
        <hr/>
        <p>Página principal</p>
    </Main>

export default Home;