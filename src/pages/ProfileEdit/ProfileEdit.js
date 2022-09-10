import React from 'react';
// import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Favorites from '../../components/Favorites/Favorites';
import ImageInput from '../../components/Image Input/Edit Profile/EP_ImageInput';
import LoadingDiv from '../../components/Loading/LoadingDiv'
import EditProfileForm from '../../components/Forms/Edit Profile/EditProfileForm'



import styles from './ProfileEditStyle.module.css';


import swal from 'sweetalert';


let Login
let letJson


let updateLocal = () => {

    let Local = JSON.parse(localStorage.getItem('Login'))

    let newInfos = letJson.body

    let infos = {
        biografia: newInfos.biografia === undefined ? Local.biografia : newInfos.biografia,
        email: Local.email,
        foto_perfil: newInfos.foto_perfil === undefined ? Local.foto_perfil : newInfos.foto_perfil,
        id: Local.id,
        permissao: Local.permissao,
        nome: newInfos.nome === undefined ? Local.nome : newInfos.nome,
        senha: newInfos.senha === undefined ? Local.senha : newInfos.senha,
        sobrenome: newInfos.sobrenome === undefined ? Local.sobrenome : newInfos.sobrenome,
    }

    localStorage.setItem('Login', JSON.stringify(infos))

    swal({
        title: letJson.message,
        icon: 'success',
    }).then((value) => {

        switch (value) {
            default: {
                window.location.href = '/Profile'
            }
        }
    })
}


export let Salvar = () => {

    Login = JSON.parse(localStorage.getItem('Login'))
    let inps = document.querySelectorAll('input')

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
            letJson = json
            // log_entrar()
            updateLocal()
        })

    document.getElementById("loading").style.display = "flex"
}

const ProfileEdit = () => {

    Login = JSON.parse(localStorage.getItem('Login'))

    let inps = document.querySelectorAll('input')


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
                    <EditProfileForm />

                    <h2 className={styles.email}>
                        {Login.email}
                    </h2>

                    <textarea id='biografiaUser' className={styles.biografia} />

                    

                </div>
            </div>

            {/* <Footer component="EditProfile"/> */}
            <button>
                Salvar
            </button>
            <LoadingDiv />
        </div>
    )

}

export default ProfileEdit;