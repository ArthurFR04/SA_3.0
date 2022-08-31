
// // // import { Link } from "react-router-dom";
import { Login_values } from "../../Context"

let validado = false;

let localLogin

let letJson


let log_entrar = async () => {
    console.log(letJson);
    // localStorage.setItem('Login', JSON.stringify(letJson.length = 3 ? letJson.data[0] : null ))          31/08

    localLogin = JSON.parse(localStorage.getItem('Login'))
console.log(localLogin);

document.getElementById("loading").style.display = "none"

    if (localLogin.email !== undefined) {

                                                                console.log('local ' + localLogin.email);
                                                                console.log(Login_values.value.email);

        if (localLogin.email === Login_values.value.email) {                            // 12/08 
            alert('Login efetuado com sucesso')
            window.location.href="./HomeScreen"
        }
        else {
            alert('Ocorreu algum erro, por favor tente novamente')
        }
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


