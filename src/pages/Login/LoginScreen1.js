// import React, { useState } from 'react';           
// // import { Link } from "react-router-dom";

// import { Login_user , setLocal } from "../../Context"

// import './LoginStyle.css'

// import { RiLock2Fill } from 'react-icons/ri';

// let LoginScreen = () => {

//     let validado = false;


//     const [values, setValues] = useState('')

//     const changeInput = (value) => {
//         setValues((prevValue) => ({
//             ...prevValue,
//             [value.target.name]: value.target.value,
//         }))
//         console.log(values);
//     }

//     let validar = () => {

//         console.log(values);
        
//         console.log('email:' + values.email);
//         console.log('senha:' + values.senha);

//         if (values.email !== false & values.senha !== false) {
//             validado = true
//         } else {
//             alert('Preencha todos os inputs');
//             validado = false
//             return false
//         }
//     }

//     let entrar = () => {
//         // console.log(usuario);
//         validar()
//         if (validado === true) {

//             fetch('https://sa-3-back.herokuapp.com/api/login', {
//                 method: 'POST',
//                 body: JSON.stringify({

//                     email: values.email,
//                     senha: values.senha
//                 }),
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                 },
//             })
//                 .catch((error) => {
//                     console.log(error)
//                 })
//                 .then((response) => response.json())
//                 // .then((json) => console.log(json))
//                 .then((json) => Login_user.value = json.data[0] )
//                 setLocal()
//         }
//     }

//     let alerta = () => {
// console.log(Login_user.value);

//         alert('Não sei fazer isso ainda ksks')
//     }


//     return (
//         // <Login_user.Provider>
//             <div className="login-container">

//                 <div className='banner-login'>
//                 </div>

//                 <div className='info-login'>

//                     <h1 className="login">
//                         LOGIN
//                     </h1>

//                     <div className='div-input'>
//                         <div id='inpEmail'>

//                         <input
//                             type="text"
//                             name="email"
//                             onChange={changeInput}
//                             className="input-login email"
//                             placeholder="  email"
//                             />
            
//                             </div>
//                             <div id='inpSenha'>

//                             <input
//                                 type="password"
//                                 name="senha"
//                                 onChange={changeInput}
//                                 className="input-login senha"
//                                 placeholder="  senha"
//                                 />
//                             <div className='iconCadeado'>
//                                 <RiLock2Fill id='cadeado' />
//                             </div>
//                                 </div>
                               

//                     </div>

//                     <br></br>

//                     <div className="btn">
//                         <button
//                             className="btn_entrar"
//                             onClick={entrar}
//                         >
//                             ENTRAR
//                         </button>
//                     </div>

//                     <p>OU</p>

//                     <p onClick={alerta}>
//                         entrar com Google
//                     </p>

//                 </div>
//             </div>
//         // </Login_user.Provider>

//     )
// };

// export default LoginScreen;