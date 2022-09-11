// import React from 'react';
// // import { Link } from "react-router-dom";

// // import { Login_user } from "../../Context"
// import Header from "../../components/Header/Header"
// import Footer from "../../components/Footer/Footer"

// import ImageInput from '../../components/Image Input/Edit Profile/EP_ImageInput';
// import LoadingDiv from '../../components/Loading/LoadingDiv'
// import EditProfileForm from '../../components/Forms/Edit Profile/EditProfileForm'



// import styles from './ProfileEditStyle.module.css';


// import swal from 'sweetalert';

// let validado = false
// let Login
// let letJson
// let newSenha = ''

// export let validation_EditProfile = () => {

//     let inps = document.querySelectorAll('input')

//     validado = true
//     console.log(inps);
//     console.log(inps[3].value);

//     if (inps[1].value.length === 0 || inps[2].value.length === 0) {

//         validado = false

//         swal({
//             title: 'Campos vazios',
//             text: 'Por favor, preencha todos os campos',
//             icon: 'warning',
//         }).then((value) => {

//             switch (value) {
//                 default: {
//                     document.getElementById("loading").style.display = "none"
//                 }
//             }
//         })
//     }
//     else if (inps[3].value.length > 0) {

//         if (inps[3].value.length < 6) {

//             validado = false
//             swal({
//                 title: 'Senha muito curta',
//                 text: 'A senha deve ter no mínimo 6 caracteres.',
//                 icon: 'warning',
//             }).then((value) => {

//                 switch (value) {
//                     default: {
//                         document.getElementById("loading").style.display = "none"
//                     }
//                 }
//             })
//         }
//         else if (inps[3].value !== inps[4].value) {

//             validado = false
//             swal({
//                 title: 'Senhas diferentes',
//                 text: 'Preencha os campos de senha igualmente.',
//                 icon: 'warning',
//             }).then((value) => {

//                 switch (value) {
//                     default: {
//                         document.getElementById("loading").style.display = "none"
//                     }
//                 }
//             })
//         }
//         else {
//             newSenha = inps[3].value
//         }
//     }

//     if (validado === true) {
//         Salvar()
//     }
// }


// let updateLocal = () => {

//     let Local = JSON.parse(localStorage.getItem('Login'))

//     let newInfos = letJson.body

//     let infos = {
//         biografia: newInfos.biografia === undefined ? Local.biografia : newInfos.biografia,
//         email: Local.email,
//         foto_perfil: newInfos.foto_perfil === undefined ? Local.foto_perfil : newInfos.foto_perfil,
//         id: Local.id,
//         permissao: Local.permissao,
//         nome: newInfos.nome === undefined ? Local.nome : newInfos.nome,
//         senha: newInfos.senha === undefined ? Local.senha : newInfos.senha,
//         sobrenome: newInfos.sobrenome === undefined ? Local.sobrenome : newInfos.sobrenome,
//     }

//     localStorage.setItem('Login', JSON.stringify(infos))

//     swal({
//         title: letJson.message,
//         icon: 'success',
//     }).then((value) => {

//         switch (value) {
//             default: {
//                 window.location.href = '/Profile'
//             }
//         }
//     })
// }


// let Salvar = () => {

//     document.getElementById("loading").style.display = "flex"

//     Login = JSON.parse(localStorage.getItem('Login'))
//     let inps = document.querySelectorAll('input')

//     console.log(newSenha.length);

//     if (validado === true) {

//         fetch(`https://sa-3-back.herokuapp.com/api/usuario/${Login.id}`, {
//             method: 'PUT',
//             body: JSON.stringify({

//                 nome: inps[1].value,
//                 sobrenome: inps[2].value,
//                 email: Login.email,
//                 // foto_perfil: document.getElementById('imgName').value,
//                 biografia: document.getElementById('biografiaUser').value,
//                 senha: newSenha.length === 0 ? Login.senha : newSenha
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => response.json())
//             .then((json) => {
//                 console.log(json);
//                 letJson = json
//                 // log_entrar()
//                 updateLocal()
//             })
//     }
// }

// const ProfileEdit = () => {


//     return (
//         <div className={styles.ProfileEditScreen} >

//             <Header component="Profile" />


//             <div className={styles.container}>

//                 <div className={styles.topo}>
//                     <div className={styles.capa}>   </div>
//                     <div className={styles.fotoPerfil}>
//                         <ImageInput />
//                     </div>
//                 </div>
//                 <div className={styles.infosUser}>
//                     <EditProfileForm />
//                 </div>
//             </div>

//             <Footer component="EditProfile" />

//             <LoadingDiv />


//         </div>
//     )
// }

// export default ProfileEdit;