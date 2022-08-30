import React, { useState } from 'react';

import { entrar } from "./LoginLogic"
import { NavLink } from 'react-router-dom';

import styles from './LoginStyle.module.css'
import styles2 from './LoginStyleAnimation.module.css'

import { RiLock2Fill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillThunderbolt } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";

import { Login_values } from "../../Context"

import { visitedPages } from "../../components/Router/Location"

import LoginForm from '../../components/Forms/Login/LoginForm';

export let values2



let LoginScreen = () => {
    visitedPages()

    const [values, setValues] = useState('')

    const changeInput = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const salvar = () => {
        values2 = values
        Login_values.value = values
        document.getElementById("loading").style.display = "flex"
        entrar()
    }

   

    return (

        <div className={styles.body}>

            <div className={styles.banner}>
                <h1>ElTEC</h1>
            </div>

            <div className={styles.container}>

                <NavLink to="/" className={styles.arrowBack} >
                    <TiArrowBack />
                </NavLink>

                <h1 className={styles.login}>
                    LOGIN
                </h1>

                <div className={styles.div_inputs}>

                        <LoginForm />
                    {/* <span className={styles.spanEmail}>

                        <div className={styles.circuloUser}>
                            <FaUserAlt />
                        </div>

                        <input
                            type="text"
                            name="email"
                            onChange={changeInput}
                            className={styles.email}
                            placeholder="email"
                        />
                    </span>

                    <span className={styles.spanSenha}>

                        <input
                            type="password"
                            name="senha"
                            onChange={changeInput}
                            placeholder="senha"

                        />
                        <label className={styles.circuloCadeado}>
                            <RiLock2Fill />
                        </label>
                    </span> */}

                </div>


            </div>

            <div id='loading' className={styles2.loading}>
                <AiFillThunderbolt className={styles2.loading_icon} id='foguetin' />
            </div>

        </div>
    )
};

export default LoginScreen;