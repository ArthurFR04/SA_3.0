import React, { useState } from 'react';

import { entrar, alerta } from "./LoginLogic"

import styles from './LoginStyle.module.css'
import styles2 from './LoginStyleAnimation.module.css'

import { RiLock2Fill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillThunderbolt } from "react-icons/ai";

import { Login_values } from "../../Context"

export let values2

let LoginScreen = () => {

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

                {/* <div className={styles.info}> */}

                <h1 className={styles.login}>
                    LOGIN
                </h1>

                <div className={styles.div_inputs}>

                    <span className={styles.spanEmail}>

                        <label className={styles.circuloUser}>
                            <FaUserAlt />
                        </label>

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
                    </span>

                </div>

                <br></br>

                <div className={styles.btn}>
                    <button
                        className={styles.btn_entrar}
                        onClick={salvar}
                    >
                        ENTRAR
                    </button>
                </div>

                <p>OU</p>

                <p onClick={alerta}>
                    entrar com Google
                </p>

                {/* </div> */}
            </div>

            <div id='loading' className={styles2.loading}>
                <AiFillThunderbolt className={styles2.loading_icon} id='foguetin' />
            </div>

        </div>
    )
};

export default LoginScreen;