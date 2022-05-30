import React from 'react';
// import { Link } from "react-router-dom";

import './LoginStyle.css'

let usuario;
let inputs;

let findAll = async () => {

    usuario = await fetch('http://localhost:3001/api/usuario',)

        // .catch(
        //     alert('Erro ao pesquisar o usuário')
        // )
        .then((response) => response.json())  
}

let inps = () => { 
    inputs = document.querySelectorAll('input') 
}

let entrar = async () => {

    // validar()
    await findAll()
    inps()

    for ( let i = 0 ; i < usuario.data.length ; i++ ) {

        if ( usuario.data[i].email === inputs[0].value || usuario.data[i].login === inputs[0].value ) {

            if ( usuario.data[i].senha === inputs[1].value ) {
                alert('Logado papi')
            }
            else {
                alert('Senha incorreta')
            }
        }
        else {
            alert('Usuário não encontrado')
        }
    }
}


let alerta = () => {
    alert('Não sei fazer isso ainda ksks')
}

const LoginScreen = () => (
    <div className="login-container">
        <div className="col-central">

            <h1 className="login">
                LOGIN
            </h1>

            <input
                className="email-user"
                type="text"
                placeholder="  email ou usuário"
            />
            <br></br>

            <input
                className="senha"
                type="password"
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
);

export default LoginScreen;