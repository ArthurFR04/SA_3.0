import React from 'react';
// import { Link } from "react-router-dom";

let validado = false
let inputs = document.querySelectorAll('input');

let validar = () => {    
    for (let i=0 ; i<inputs.length ; i++) {

        if (inputs[i].value !== false) {
            if (inputs[3].value === inputs[4].value) {
                validado = true
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

    if (validado === true) {
console.log('validou');
        fetch('http://localhost:3000/api/usuario', {
            method: 'POST',
            body: JSON.stringify({
                nome: inputs[0].value ,
                sobrenome: inputs[1].value ,
                email: inputs[2].value ,
                senha: inputs[3].value 
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
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

