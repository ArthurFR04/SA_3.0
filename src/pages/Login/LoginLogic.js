
// // // import { Link } from "react-router-dom";

import { Login_values, Login_user } from "../../Context"


let validado = false;

let localLogin

let letJson


let log_entrar = async () => {

    Login_user.value = letJson.data === undefined ? (null) : (letJson.data[0]) // caso o login seja valido, iguala as informacoes retornadas pelo fetch, caso nao seja, iguala a null
    
    localStorage.setItem('Login', JSON.stringify(Login_user.value))

    localLogin = JSON.parse(localStorage.getItem('Login'))

    // alert(letJson.message)

    window.location.href="./HomeScreen"

    // if (Login_values.value.email !== undefined) {

    //     console.log('local ' + localLogin.email);
    //     console.log(Login_values.value.email);

    //     if (localLogin.email === Login_values.value.email) {
    //         alert('Login efetuado com sucesso')
    //     }
    //     else {
    //         alert('Ocorreu algum erro, por favor tente novamente')
    //     }
    // }

}

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
            .then((json) => {
                // setTimeout(() => {
                letJson = json
                console.log(letJson);
                // }, 1)
                log_entrar()
            })
    }
}

export let alerta = () => {
    // console.log(Login_user.value);
    console.log(Login_values.value);

    alert('Não sei fazer isso ainda ksks')
}


