
// // // import { Link } from "react-router-dom";
import { Login_values } from "../../Context"

let validado = false;

// let localLogin

let letJson




let log_entrar = async () => {
    console.log(letJson.status);

    localStorage.setItem('Login', JSON.stringify(letJson.status === 400 ? 400 : letJson.data[0] ))

    // localLogin = JSON.parse(localStorage.getItem('Login'))

    document.getElementById("loading").style.display = "none"


    if (letJson.status === 400) {
        alert(letJson.message)
    }
    else if (letJson.data[0].email !== undefined) {
        if (letJson.data[0].email === Login_values.value.email) {
            alert('Login efetuado com sucesso')

            let Historic = JSON.parse(localStorage.getItem('Historic'))
console.log(Historic);
            window.location.href = Historic.old

        }
        else {
            alert('Ocorreu algum erro, por favor tente novamente')
        }
    }
    else {
        alert('Ocorreu algum erro, por favor atualize a página e tente novamente')
    }

}

let validar = () => {

    console.log('email:' + Login_values.value.email);
    console.log('senha:' + Login_values.value.password);

    if (Login_values.value.email !== undefined & Login_values.value.password !== undefined) {
        validado = true
    } else {
        alert('Preencha todos os inputs');
        validado = false
        document.getElementById("loading").style.display = "none"
        return false
    }
    console.log(validado);
}

export let entrar = () => {

    validado = false
    validar()
    if (validado === true) {

        fetch('https://sa-3-back.herokuapp.com/api/login', {
            method: 'POST',
            body: JSON.stringify({

                email: Login_values.value.email,
                senha: Login_values.value.password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {

                letJson = json
                console.log(letJson);

                log_entrar()
            })
    }
}


