import React from 'react';
// import { Link } from "react-router-dom";

let inputs = document.querySelector('input')

let validar = () => {
    let inputs = document.querySelectorAll('input');
    console.log(inputs);
    for (let i=0 ; i<inputs.length ; i++) {
        if (inputs[i].value != false) {

            if (inputs[3].value == inputs[4].value) {
                let usuario ={
                    nome: inputs[0].value
                }
                console.log(usuario);
            } else {
                console.log('As senhas devem ser iguais');
            }

        } else {
            console.log('Preencha todos os inputs');
        }
    }
}

let cadastrar = () => {

    validar()
    
    fetch('http://localhost:3000/api/usuario', {
        method: 'post'
    })
}

const LoginScreen = () => (
    <div>

        <input
            type="text"
            placeholder='Nome'
        />

        <input
            type="text"
            placeholder='Sobrenome'
        />

        <input
            type="text"
            placeholder='Email'
        />

        <input
            type="password"
            placeholder='Senha'
        />

        <input
            type="password"
            placeholder='Repita a senha'
        />   

        <button onClick={cadastrar}>
            Salvar
        </button>

    </div>
);

export default LoginScreen;

