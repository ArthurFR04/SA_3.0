// let validado = false
// let inputs

// let validar = () => {

//     console.log('começando validação');
//     for (let i = 0; i < inputs.length; i++) {
//         console.log(inputs[i]);
//         if (inputs[i].value !== false) {
//             if (inputs[3].value === inputs[4].value) {
//                 validado = true
//                 return false
//             } else {
//                 alert('As senhas devem ser iguais')
//                 return false
//             }

//         } else {
//             alert('Preencha todos os inputs');
//             return false
//         }
//     }
// }

// let cadastrar = async () => {

//     inputs = document.querySelectorAll('input');

//     await validar()

//     if (validado === true) {

//         fetch('https://sa-3-back.herokuapp.com/api/usuario', {
//             method: 'POST',
//             body: JSON.stringify({
//                 nome: inputs[0].value,
//                 sobrenome: inputs[1].value,
//                 email: inputs[2].value,
//                 senha: inputs[3].value
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .catch((error) => {
//                 console.log(error)
//             })
//             .then((response) => response.json())
//             .then((json) => console.log(json))
//     }

//     validado = false
// }

// const [values, setValues] = 0 // 0 USADO PARA COMENTAR O USE STATE
// useState('')

const changeInput = (value) => {
    // setValues((prevValue) => ({
    //     ...prevValue,
    //     [value.target.name]: value.target.value,
    // }))
}

// let values2;                                                            let Login_values = 0; let entrar;
const salvar = () => {
    // values2 = values
    // Login_values.value = values
    // document.getElementById("loading").style.display = "flex"
    // entrar()
}