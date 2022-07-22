import React , { useState }  from 'react';

import {entrar , alerta } from "./LoginLogic"

import './LoginStyle.css'

import { RiLock2Fill } from 'react-icons/ri';

import { Login_values } from "../../Context"


export let LoginScreen = () => {

    const [values, setValues] = useState('')

    const changeInput = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
        Login_values.value = values
    }

    return (
        // <Login_user.Provider>
            <div className="login-container">

                <div className='banner-login'>
                </div>

                <div className='info-login'>

                    <h1 className="login">
                        LOGIN
                    </h1>

                    <div className='div-input'>
                        <div id='inpEmail'>

                        <input
                            type="text"
                            name="email"
                            onChange={changeInput}
                            className="input-login email"
                            placeholder="  email"
                            />
            
                            </div>
                            <div id='inpSenha'>

                            <input
                                type="password"
                                name="senha"
                                onChange={changeInput}
                                className="input-login senha"
                                placeholder="  senha"
                                />
                            <div className='iconCadeado'>
                                <RiLock2Fill id='cadeado' />
                            </div>
                                </div>
                               

                    </div>

                    <br></br>

                    <div className="btn">
                        <button
                            className="btn_entrar"
                            onClick={entrar}
                        >
                            ENTRAR
                        </button>
                    </div>

                    <p>OU</p>

                    <p onClick={alerta}>
                        entrar com Google
                    </p>

                </div>
            </div>
        // </Login_user.Provider>

    )
};

// export default LoginScreen;