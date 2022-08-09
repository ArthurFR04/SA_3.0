import React from 'react';
import { Link } from "react-router-dom";

import { Login_user } from "../../Context"

import './HomeStyle.css';

import { AiOutlineMenu, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";


const HomeScreen = () => (
    <div>


        {/* <div className='header_barra'>
                <img src={raio_azul} className='logo' alt="Logo do site"/>
            </div> */}


        <header>
            <div className='header-esquerda'>

                <AiOutlineMenu className='header-itens'/>
                <label className='header-Eltec'>Eltec</label>
            </div>
            <div className='header-direita'>

            <AiOutlineHeart className='header-itens'/>
            <AiOutlineSearch className='header-itens'/>
            </div>
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