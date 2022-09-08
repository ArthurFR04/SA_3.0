import React from 'react';
// import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Favorites from '../../components/Favorites/Favorites';

import { VisitedPages } from "../../components/Router/Location"

import styles from './ProfileStyle.module.css';

import LoginDone from '../../components/Alert/LoginDone'

import Perfil from '../../assets/Testes/perfil.png'                                                  //excluir

const ProfileScreen = () => {
    VisitedPages()

    let Login = JSON.parse(localStorage.getItem('Login'))

    let logado

    if (Login !== null) {

        if (Login.email) { logado = true }
        else { alert('Por favor reinicie a página.\n\nSe o erro persistir, volte para a página anterior e tente novamente.') }
    }
    else { logado = false }

    if (logado === true) {

        return (
            <div className={styles.profileScreen} >

                <Header component="Profile" />


                <div className={styles.container}>

                    <div className={styles.topo}>
                        <div className={styles.capa}>   </div>
                        <div className={styles.fotoPerfil}>
                            <img src={Perfil} alt='foto de perfil do usuário' />
                        </div>
                    </div>
                    <div className={styles.infosUser}>

                        <h1 id='nomeUser' className={styles.nome}>
                            {Login.nome} {Login.sobrenome}
                        </h1>
                        <h2 className={styles.email}>
                            {Login.email}
                        </h2>

                        <label className={styles.biografia}>
                            {Login.biografia}
                        </label>

                        <Favorites component={Login.id} />

                    </div>
                </div>

                <Footer component="Profile" />
            </div>
        )
    }
    else if (logado === false) {

        return (

            <LoginDone />
        );
    }
}

export default ProfileScreen;