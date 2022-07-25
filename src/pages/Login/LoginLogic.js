
// // // import { Link } from "react-router-dom";

import { Login_values, Login_user, setLocal } from "../../Context"


let validado = false;


let validar = () => {

    console.log('email:' + Login_values.value.email);
    console.log('senha:' + Login_values.value.senha);

    if (Login_values.value.email !== false & Login_values.value.senha !== false) {
        validado = true
    } else {
        alert('Preencha todos os inputs');
        validado = false
        return false
    }
}

export let entrar = () => {

    validar()
    if (validado === true) {

        fetch('https://sa-3-back.herokuapp.com/api/login', {
            method: 'POST',
            body: JSON.stringify({

                email: Login_values.value.email,
                senha: Login_values.value.senha
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => Login_user.value = json.data === undefined ? (null) : (json.data[0]) ) // caso o login seja valido, iguala as informacoes retornadas pelo fetch, caso nao seja, iguala a null
            .then((json) => console.log(json))
            setLocal()
    }
}

export let alerta = () => {
    // console.log(Login_user.value);
    console.log(Login_values.value);

    alert('Não sei fazer isso ainda ksks')
}


