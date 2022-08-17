import React from 'react';
import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Footer from "../../components/Footer/Footer"

import styles from './FavoritesStyle.module.css';

import { AiOutlineSearch } from "react-icons/ai";


const FavoritesScreen = () => (
    <div>
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
                    <h4>Favoritos</h4>
                    <p>Aqui voce pode ver os seus favoritos</p>
            
                    oioioi <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> opa
                </div>
            </div>

        </div>


        <Footer component="Favorites"/>
    </div>
);

export default FavoritesScreen;