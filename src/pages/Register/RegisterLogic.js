
import swal from 'sweetalert';

let letJson


let log_cadastrar = async (email) => {

    document.getElementById("loading").style.display = "none"
console.log(letJson);
    if ( letJson.status === 400 ) {
        swal ({
            title: 'Mensagem de erro:',
            text: letJson.message,
            icon: 'error',
        })
    }
    else if ( letJson.status === 200 ) {

        if (letJson.body.usuario.email === email) {
            
            swal ({
                title: 'Cadastro efetuado com sucesso',
                icon: 'success',
            }).then((value) => {

                switch (value) {
                    default: {
                        localStorage.setItem('Login', JSON.stringify(letJson.body.usuario))

                        let Historic = JSON.parse(localStorage.getItem('Historic'))
                        window.location.href = Historic.now
                    }
                }
            })
        }
        else {
            console.log(letJson.body.usuario.email);
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




export let cadastrar = (values) => {

    fetch('https://sa-3-back.herokuapp.com/api/usuario', {
        method: 'POST',
        body: JSON.stringify({
            nome: values.name,
            sobrenome: values.lastname,
            email: values.email,
            senha: values.password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .catch((error) => {
            console.log(error)
        })
        .then((response) => response.json())
        .then((json) => {

            letJson = json
            // console.log(letJson);
            log_cadastrar(values.email)
        })


}