
// // // import { Link } from "react-router-dom";

import { Login_values, Login_user, setLocal } from "../../Context"

let values = Login_values.value


// let validado = false;


// let validar = () => {

//     console.log(values);

//     console.log('email:' + values.email);
//     console.log('senha:' + values.senha);

//     if (values.email !== false & values.senha !== false) {
//         validado = true
//     } else {
//         alert('Preencha todos os inputs');
//         validado = false
//         return false
//     }
// }

export let entrar = () => {
//     // console.log(usuario);
//     validar()
//     if (validado === true) {

//         fetch('https://sa-3-back.herokuapp.com/api/login', {
//             method: 'POST',
//             body: JSON.stringify({

//                 email: values.email,
//                 senha: values.senha
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .catch((error) => {
//                 console.log(error)
//             })
//             .then((response) => response.json())
//             // .then((json) => console.log(json))
//             .then((json) => Login_user.value = json.data[0])
//         setLocal()
//     }
}

export let alerta = () => {
    // console.log(Login_user.value);
    console.log(Login_values.value);

    alert('Não sei fazer isso ainda ksks')
}


