import React from 'react';
// import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Favorites from '../../components/Favorites/Favorites';

import styles from './ProfileEditStyle.module.css';

import Perfil from '../../assets/Testes/perfil.png'                                                  //excluir
import ImageInput from '../../components/Image Input/ImageInput';

let Login

export let Salvar = () => {
    fetch(`https://sa-3-back.herokuapp.com/api/usuario/${Login.id}`, {
        method: 'PUT',
        body: JSON.stringify({

            nome: document.getElementById('nomeUser').value,
            sobrenome: document.getElementById('sobrenomeUser').value,
            email: Login.email,
            // foto_perfil: document.getElementById('imgName').value,
            biografia: document.getElementById('biografiaUser').value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            // letJson = json
            // log_entrar()
        })
}

const ProfileEdit = () => {

    Login = JSON.parse(localStorage.getItem('Login'))


    return (
        <div className={styles.profileScreen} >

            <Header component="Profile" />


            <div className={styles.container}>

                <div className={styles.topo}>
                    <div className={styles.capa}>   </div>
                    <div className={styles.fotoPerfil}>
                        <ImageInput />
                    </div>
                </div>
                <div className={styles.infosUser}>
                    <div className={styles.nameInps}>
                        <input id='nomeUser' placeholder="Nome" className={styles.nome} />
                        <input id='sobrenomeUser' placeholder="Sobrenome" className={styles.sobrenome} />
                    </div>

                    <h2 className={styles.email}>
                        {Login.email}
                    </h2>

                    <textarea id='biografiaUser' className={styles.biografia} />

                    <Favorites
                    // component={Login.id} 
                    />

                </div>
            </div>

            <Footer component="EditProfile" />
        </div>
    )

}

export default ProfileEdit;