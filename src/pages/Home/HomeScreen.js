import React from 'react';
import { Link } from "react-router-dom";


import './HomeStyle.css';
import raio_azul from "../../assets/raio_azul.png";



const HomeScreen = () => (
    <div>

        <div className='barra_lateral'>
            <div className='header_barra'>
                <img src={raio_azul} className='logo' alt="Logo do site"/>
            </div>
        </div>

        <header>
            Título
        </header>

        <div className='corpo'>
            <div className='Textooo'>
                <h4>Home</h4>
                <p>Aqui é o Home sabe ?</p>
                <Link to="/LoginScreen">Bora pro login ??</Link>             <br></br>
                <Link to="/NewPost">Nova postagem</Link>                     <br></br>
                <Link to="/RegisterScreen">Bora registraarr</Link>           <br></br>
            </div>
        </div>
        
    </div>
);

export default HomeScreen;