import React from 'react';
// import { Link } from "react-router-dom";

import './LoginStyle.css'


let findAll = async () => {

    let usuario = await fetch('http://localhost:3001/api/usuario',)

        // .catch(
        //     alert('Erro ao pesquisar o usuário')
        // )
        .then((response) => response.json())  
    
        console.log(usuario);
        console.log(usuario.data);
        console.log(usuario.data[0]);
        console.log(usuario.data[0].nome);
}

// let RequesitarNoBackzin = () => {console.log(findAll)}

let entrar = () => {

    // validar()
    findAll()
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