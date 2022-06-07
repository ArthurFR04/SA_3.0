import React from 'react';
import './RegisterStyle.css';

let validado = false
let inputs

let validar = () => {

console.log('começando validação');
    for (let i = 0; i < inputs.length; i++) {
console.log(inputs[i]);
        if (inputs[i].value !== false) {
            if (inputs[3].value === inputs[4].value) {
                validado = true
                return false
            } else {
                alert('As senhas devem ser iguais')
                return false
            }

        } else {
            alert('Preencha todos os inputs');
            return false
        }
    }
}

let cadastrar = async () => {

    inputs = document.querySelectorAll('input');

    await validar()

    if (validado === true) {

        fetch('http://localhost:3001/api/usuario', {
            method: 'POST',
            body: JSON.stringify({
                nome: inputs[0].value,
                sobrenome: inputs[1].value,
                email: inputs[2].value,
                senha: inputs[3].value
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

    validado = false
}

const RegisterScreen = () => (

    <div className="centralizar">
        <form>
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
        </form>
            <button onClick={cadastrar}>
                Salvar
            </button>

    </div>
);

export default RegisterScreen;

