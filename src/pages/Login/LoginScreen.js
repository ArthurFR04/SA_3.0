import React, { useState } from 'react';

import { entrar, alerta } from "./LoginLogic"

import styles from './LoginStyle.module.css'
import styles2 from './LoginStyleAnimation.module.css'

import { RiLock2Fill } from 'react-icons/ri';
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

                    <div className={styles.div_input}>
                        <div className={styles.inpEmail}>

                            <input
                                type="text"
                                name="email"
                                onChange={changeInput}
                                className={styles.email}
                                placeholder="email"
                                // required
                            />

                        </div>
                        <div className={styles.inpSenha}>

                            <input
                                type="password"
                                name="senha"
                                onChange={changeInput}
                                className={styles.senha}
                                placeholder="senha"
                                // required
                            />
                            {/* <div className={styles.iconCadeado}>
                                <RiLock2Fill id='cadeado' />
                            </div> */}
                        </div>


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
                <AiFillThunderbolt className={styles2.loading_icon} id='foguetin'/>
            </div>

        </div>
    )
};

export default LoginScreen;