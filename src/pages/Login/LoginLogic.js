
import { Login_values } from "../../Context"

import swal from 'sweetalert';


let letJson

let log_entrar = async () => {

    localStorage.setItem('Login', JSON.stringify(letJson.status === 400 ? 400 : letJson.data[0]))

    document.getElementById("loading").style.display = "none"

    if (letJson.status === 400) {
        swal ({
            title: 'Mensagem de erro:',
            text: letJson.message,
            icon: 'error',
        })
    }

    else if (letJson.data[0].email !== undefined) {

        if (letJson.data[0].email === Login_values.value.email) {

            swal ({
                title: 'Login efetuado',
                icon: 'success',
            }).then((value) => {

                switch (value) {
                    default: {
                        let Historic = JSON.parse(localStorage.getItem('Historic'))
                        window.location.href = Historic.now
                    }
                }
            })

        }
        else {
            swal ({
                title: 'Ocorreu um erro',
                text: 'Por favor tente novamente',
                icon: 'error',
            })
        }
    }
    else {
        swal ({
            title: 'Ocorreu um erro',
            text: 'Por favor atualize a página e tente novamente',
            icon: 'error',
        })
    }
}



export let entrar = () => {

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
            log_entrar()
        })
}


