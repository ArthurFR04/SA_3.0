import React from 'react';
// import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Favorites from '../../components/Favorites/Favorites';

import { relogar } from "../Login/LoginLogic"
import { VisitedPages } from "../../components/Router/Location"

import styles from './ProfileAdmStyle.module.css';

import LoginDone from '../../components/Alert/LoginDone'

import Perfil from '../../assets/Testes/perfil.png'                                                  //excluir

import swal from 'sweetalert';

const ProfileAdmScreen = () => {
    relogar()
    VisitedPages()

    let Login = JSON.parse(localStorage.getItem('Login'))

    let logado

    if (Login !== null) {

        if (Login.email) { logado = true }
        else if (Login === 400) { logado = false }
        else {
            swal({
                title: 'Ocorreu um erro',
                text: 'Por favor reinicie a página.\n\nSe o erro persistir, volte para a página anterior e tente novamente.',
                icon: 'error',
            })
        }
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

                <Footer component="Adm" />
            </div>
        )
    }
    else if (logado === false) {

        return (

            <LoginDone />
        );
    }
}

export default ProfileAdmScreen;