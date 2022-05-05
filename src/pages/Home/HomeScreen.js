import React from 'react';
import { Link } from "react-router-dom";

import './HomeStyles.css';
import raio_azul from "../../assets/raio_azul.png";

const HomeScreen = () => (
    <container>
        <header>
            Título
        </header>
        <div className='barra_lateral'>
            <header className='header_barra'>
                <img src={raio_azul} className='logo' />
            </header>
        </div>
        <div className='corpo'>
            <h4>Home</h4>
            <p>Aqui é o Home sabe ?</p>
            <Link to="/LoginScreen">Bora pro login ??</Link> <br></br>
            <Link to="/">Quem sabe, voltar pro App ? ?</Link>
            <Link to="/Teste1">Testar é importante também né ?</Link>
        </div>
    </container>
);

export default HomeScreen;