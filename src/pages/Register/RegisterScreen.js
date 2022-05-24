import React from 'react';
import './RegisterStyle.css';

let validado = false
let inputs = document.querySelectorAll('input');

let validar = () => {
    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].value !== false) {
            if (inputs[3].value === inputs[4].value) {
                validado = true
                                                                                    console.log('validado');
                return false
            } else {
                alert('As senhas devem ser iguais')
                return false
            }

        } else {
            alert('Preencha todos os inputs');
            return false
        }
// console.log('oi');
    }
}

let cadastrar = () => {
console.log('cadastrando');
    validar()
console.log('validado', validado);
    if (validado === true) {

        fetch('http://localhost:3000/api/usuario', {
            method: 'POST',
            body: JSON.stringify({
                nome: inputs[0].value,
                sobrenome: inputs[1].value,
                email: inputs[2].value,
                login: inputs[0].value,
                senha: inputs[3].value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',

                                                        //https://developer.mozilla.org/pt-BR/docs/Web/API/fetch
                                                        //https://dio.dev/usando-promises-com-fetch-no-javascript
            },   
        })
        .catch((error) => {
            console.log(error)
        }
            
        )
            .then((response) => response.json())
            .then((json) => console.log(json))
    }
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

