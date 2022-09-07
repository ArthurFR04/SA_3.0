import React from 'react';
// import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Favorites from '../../components/Favorites/Favorites';

import { VisitedPages } from "../../components/Router/Location"

import Perfil from '../../assets/Testes/perfil.png'                                                 //excluir

import styles from './ProfileStyle.module.css';

const ProfileScreen = () => {
    VisitedPages()

    return (

        <div className={styles.profileScreen}>

            <Header component="Profile" />


            <div className={styles.container}>

                <div className={styles.topo}>
                    <div className={styles.capa}>   </div>
                    <div className={styles.fotoPerfil}>
                        <img src={Perfil} alt='foto de perfil do usuário'/>
                    </div>
                </div>
                    <div className={styles.infosUser}>
                        <h1 className={styles.nome}>Pé de Pano</h1>
                        <h2 className={styles.nick}>@iPadPano</h2>

                        <label className={styles.biografia}>
                            Eu sou um cavalo da raça... não lembro, mas, de qualquer forma estou treinando para participar de competições.
                        </label>

                        <Favorites />

                    </div>
iuyiyui

            </div>

            <Footer component="Profile" />
        </div>
    )
};

export default ProfileScreen;