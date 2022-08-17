import React from 'react';
import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Footer from "../../components/Footer/Footer"

import styles from './HomeStyle.module.css';

import { AiOutlineSearch } from "react-icons/ai";


const HomeScreen = () => (
    <div className={styles.home}>
        <header>
            <label className={styles.eltec}>
                ELTEC
            </label>
        </header>


        <div className={styles.container}>

            {/* <div className='header_barra'>
                <img src={raio_azul} className='logo' alt="Logo do site"/>
            </div> */}


            <div className={styles.corpo}>
                <div className={styles.Textooo} >
                    <h4>Home</h4>
                    <p>Aqui é o Home sabe ?</p>
                    <Link to="/Login" >Bora pro login ??</Link>             <br></br>
                    <Link to="/NewPost" >Nova postagem</Link>                     <br></br>
                    <Link to="/Register" >Bora registraarr</Link>           <br></br>
                    oioioi <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> opa
                </div>
            </div>

        </div>


        <Footer component="Home" />
    </div>
);

export default HomeScreen;