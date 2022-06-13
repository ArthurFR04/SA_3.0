import React, { useState } from 'react';
// import { Link } from "react-router-dom";

import './LoginStyle.css'

const LoginScreen = () => {

    let validado = false;


    const [values, setValues] = useState('')

    const changeInput = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    let validar = () => {


        if (values.email !== false & values.senha !== false) {
            validado = true
        } else {
            alert('Preencha todos os inputs');
            validado = false
            return false
        }
    }

    let entrar = async () => {

        validar()
        if (validado === true) {

            fetch('http://localhost:3001/api/login', {
                method: 'POST',
                body: JSON.stringify({

                    email: values.email,
                    senha: values.senha
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .catch((error) => {
                    console.log(error)
                })
                .then((response) => response.json())
                .then((json) => console.log(json))
        }
    }

    let alerta = () => {
        alert('Não sei fazer isso ainda ksks')
    }


    return (
        <div className="login-container">
            <div className="col-central">

                <h1 className="login">
                    LOGIN
                </h1>

                <input
                    type="text"
                    name="email"
                    onChange={changeInput}
                    className="email"
                    placeholder="  email"
                />
                <br></br>

                <input
                    type="password"
                    name="senha"
                    onChange={changeInput}
                    className="senha"
                    placeholder="  senha"
                />
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
    )
};

export default LoginScreen;