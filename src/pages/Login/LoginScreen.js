import React from 'react';
// import { Link } from "react-router-dom";

let noBackzin = fetch("http://localhost:3000/api/usuario")
    .then(T => T.json())
    .then(console.log);



let RequesitarNoBackzin = () => {console.log(noBackzin)}

const LoginScreen = () => (
    <div>

        <button onClick={RequesitarNoBackzin}>
            Enviar
        </button>

    </div>
);

export default LoginScreen;