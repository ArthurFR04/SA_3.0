import React from 'react';
// import { Link } from "react-router-dom";

// let findAll = 
        fetch('http://localhost:3000/api/usuario',)
         
        .catch(
            alert('Erro ao salvar usuário')
        )
            .then((response) => response.json())
            .then((json) => console.log(json))

// let RequesitarNoBackzin = () => {console.log(findAll)}

const LoginScreen = () => (
    <div>

        {/* <button onClick={RequesitarNoBackzin}>
            Enviar
        </button> */}

    </div>
);

export default LoginScreen;