import React from 'react';
import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Footer from "../../components/Footer/Footer"

import styles from './HomeStyle.module.css';

import { AiOutlineSearch } from "react-icons/ai";


const HomeScreen = () => (
    <div className={styles.home}>
        <header>
            <div className={styles.header_esquerda}>
                <div className={styles.header_eltec}>Eltec</div>
            </div>
            <div className={styles.header_direita}>

                <AiOutlineSearch className={styles.header_lupa} />
            </div>
        </header>


        <div className={styles.container}>

            {/* <div className='header_barra'>
                <img src={raio_azul} className='logo' alt="Logo do site"/>
            </div> */}


            <div className={styles.corpo}>
                <div className={styles.Textooo}>
                    <h4>Home</h4>
                    <p>Aqui é o Home sabe ?</p>
                    <Link to="/LoginScreen">Bora pro login ??</Link>             <br></br>
                    <Link to="/NewPost">Nova postagem</Link>                     <br></br>
                    <Link to="/RegisterScreen">Bora registraarr</Link>           <br></br>
                    oioioi <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> opa
                </div>
            </div>

        </div>


        <Footer component="home"/>
    </div>
);

export default HomeScreen;