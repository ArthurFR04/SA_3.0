


export let enviar = () => {

let Login = JSON.parse(localStorage.getItem('Login'))


let today = new Date(),
    Hoje = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

let Titulo = document.getElementById('titulo').value

let Descricao = document.getElementById('TextArea').value


    fetch('https://sa-3-back.herokuapp.com/api/postagem', {
        method: 'POST',
        body: JSON.stringify({

            titulo: Titulo,
            descricao: Descricao,
            foto: 'teste',
            dt_postagem: Hoje,
            usuarioId: Login.id,
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

            console.log(json);
            // letJson = json
            // console.log(letJson);
            // log_cadastrar(values.email)
        })
}
