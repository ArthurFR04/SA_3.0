import React, { useState } from 'react';

import { entrar, alerta } from "./LoginLogic"

import './LoginStyle.css'

import { RiLock2Fill } from 'react-icons/ri';

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
        entrar()
    }


    return (
        
        <div className="body">
            
            <div className='container' id='banner'>
                <h1>ElTEC</h1>
            </div>

            <div className="container">

                {/* <div className='info-login'> */}

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
                            {/* <div className='iconCadeado'>
                                <RiLock2Fill id='cadeado' />
                            </div> */}
                        </div>


                    </div>

                    <br></br>

                    <div className="btn">
                        <button
                            className="btn_entrar"
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
          
        </div>
    )
};

export default LoginScreen;