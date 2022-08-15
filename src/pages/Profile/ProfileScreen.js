import React from 'react';
import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Footer from "../../components/Footer"

import styles from './ProfileStyle.module.css';

import { AiOutlineSearch } from "react-icons/ai";


const ProfileScreen = () => (
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
                    <h4>Perfil</h4>
                    <p>Aqui é o Perfil sabe ?</p>
            
                    oioioi <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> opa
                </div>
            </div>

        </div>


        <Footer />
    </div>
);

export default ProfileScreen;