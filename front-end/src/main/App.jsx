import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Templates
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';

// generic components
import Routes from './Routes';

const App = props =>
    <BrowserRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Routes/>
        <Footer />
    </div>
    </BrowserRouter>

export default App;