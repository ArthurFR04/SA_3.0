import React from 'react';
// import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Favorites from '../../components/Favorites/Favorites';

import { relogar } from "../Login/LoginLogic"
import { VisitedPages } from "../../components/Router/Location"

import styles from './ProfileStyle.module.css';

import swal from 'sweetalert';

const OtherProfileScreen = (props) => {
    relogar()

    if (props.id !== true) {
        swal({
            title: 'Página não encontrada',
            icon: 'warning',
        }).then((value) => {

            switch (value) {
                default: {
                    let Historic = JSON.parse(localStorage.getItem('Historic'))
                    window.location.href = Historic.now
                }
            }
        })
    }
    else {
        window.location.href = '/OProfile'
    
        VisitedPages()

        let Perfil

        fetch(`https://sa-3-back.herokuapp.com/api/usuario/${props.id}`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((json) => {
                Perfil = json.data
            })

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
                            {Perfil.nome} {Perfil.sobrenome}
                        </h1>
                        <h2 className={styles.email}>
                            {Perfil.email}
                        </h2>

                        <label className={styles.biografia}>
                            {Perfil.biografia}
                        </label>

                        <Favorites component={Perfil.id} />

                    </div>
                </div>

                <Footer component="Profile" />
            </div>
        )
    }
}


export default OtherProfileScreen;