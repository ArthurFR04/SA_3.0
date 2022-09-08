import React from 'react';
//, { useState } 
import { NavLink } from 'react-router-dom';

import styles from './RegisterStyle.module.css';


// import { RiLock2Fill } from 'react-icons/ri';
// import { FaUserAlt } from 'react-icons/fa';

import { TiArrowBack } from "react-icons/ti";

import LoadingDiv from '../../components/Loading/LoadingDiv'

import RegisterForm from '../../components/Forms/Register/RegisterForm';



const RegisterScreen = () => {

    return (

        <div className={styles.body}>

            <div className={styles.banner}>
                <h1>ElTEC</h1>
            </div>

            <div className={styles.container}>

                <NavLink to="/" className={styles.arrowBack} >
                    <TiArrowBack />
                </NavLink>

                <h1 className={styles.cadastro}>
                    CADASTRO
                </h1>

                <div className={styles.div_inputs}>

                    <RegisterForm />

                    <NavLink to="/Login" className={styles.linkLogin}>
                        <p>Já possui uma conta?</p>
                    </NavLink>
                </div>
            </div>

            <LoadingDiv />
        </div>
    )
};

export default RegisterScreen;

