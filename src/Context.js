import { createContext } from 'react';

export const Login_user = createContext("");

export const Login_values = createContext("");

export const setLocal = () => {
    setTimeout(() => {

        localStorage.setItem('Login', JSON.stringify(Login_user.value))
    }, 1000);
    
} 



// let produtos = JSON.parse(localStorage.getItem('produtos'))
// localStorage.setItem('Pessoas', JSON.stringify(pessoas))

// import { React } from 'react';

// export const Context = React.createContext(
//     ''
//   );


// CFBCursos