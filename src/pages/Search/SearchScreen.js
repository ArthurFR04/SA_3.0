import React from 'react';
// import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import styles from './SearchStyle.module.css';




const SearchScreen = () => (
    <div>
        <Header />


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


        <Footer component="Search"/>
    </div>
);

export default SearchScreen;