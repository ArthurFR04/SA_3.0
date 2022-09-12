import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './LoginStyle.module.css'
import '../../assets/Styles/SweetAlert.css'

// import { RiLock2Fill } from 'react-icons/ri';
// import { FaUserAlt } from 'react-icons/fa';
import { TiArrowBack } from "react-icons/ti";

import LoadingDiv from '../../components/Loading/LoadingDiv'

import LoginForm from '../../components/Forms/Login/LoginForm';

import dataFun from '../../components/Simple Grid/dataFun'


let LoginScreen = () => {

    let backPage = () => {
        let Historic = JSON.parse(localStorage.getItem('Historic'))
        window.location.href = Historic.now
    }
    dataFun()

    return (

        <div className={styles.LoginScreen}>

            <div className={styles.banner}>
                <h1>ElTEC</h1>
            </div>

            <div className={styles.container}>
             
                    <TiArrowBack onClick={backPage} className={styles.arrowBack}/>

                <h1 className={styles.login}>
                    LOGIN
                </h1>

                <div className={styles.div_inputs}>

                    <LoginForm />

                    <NavLink to="/Register" className={styles.linkCadastro}>
                        <p>Não possui uma conta?</p>
                    </NavLink>
                </div>
            </div>

            <LoadingDiv />
        </div>
    )
};

export default LoginScreen;
