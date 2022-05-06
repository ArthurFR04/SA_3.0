// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import { useState } from "react";

// function Register() {

//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({ ...values, [name]: value }))
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(inputs);
//     }

//     class RegisterScreen extends Component {

//         render() {
//             return (

//                 <div className="title" style={{ marginLeft: "300px" }}>
//                     <h4>Registro</h4>
//                     <p>Aqui é o Registro sabe ? Bora criar uma continha</p>
//                     <Link to="/HomeScreen">Dale pro Home</Link>                         <br /><br /><br />

//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             value={inputs.username || ""}
//                             onChange={handleChange}
//                             placeholder="Nome"
//                         />                                                                             <br /><br />
//                         {/* <input type="text" placeholder="Sobrenome"></input>                      <br /><br /> */}
//                         <input
//                             type="password"
//                             value={inputs.senha || ""}
//                             onChange={handleChange}
//                         />                                                                              <br /><br />
//                         {/* <input type="password" placeholder="Confirmar senha"></input>       <br /><br /> */}
//                         <input type="submit" />
//                     </form>

//                 </div>
//             )
//         }
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Register />);
//     export default RegisterScreen;









