import React, { useState } from 'react';
import styles from './RegisterStyle.module.css';


import { RiLock2Fill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';

let validado = false
let inputs

let validar = () => {

    console.log('começando validação');
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (inputs[i].value !== false) {
            if (inputs[3].value === inputs[4].value) {
                validado = true
                return false
            } else {
                alert('As senhas devem ser iguais')
                return false
            }

        } else {
            alert('Preencha todos os inputs');
            return false
        }
    }
}

let cadastrar = async () => {

    inputs = document.querySelectorAll('input');

    await validar()

    if (validado === true) {

        fetch('https://sa-3-back.herokuapp.com/api/usuario', {
            method: 'POST',
            body: JSON.stringify({
                nome: inputs[0].value,
                sobrenome: inputs[1].value,
                email: inputs[2].value,
                senha: inputs[3].value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .catch((error) => {
                console.log(error)
            })
            .then((response) => response.json())
            .then((json) => console.log(json))
    }

    validado = false
}

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

const RegisterScreen = () => (

    <div className={styles.body}>

        <div className={styles.banner}>
            <h1>ElTEC</h1>
        </div>

        <div className={styles.container}>

            {/* <div className={styles.info}> */}

            <h1 className={styles.cadastro}>
                CADASTRO
            </h1>

            <div className={styles.div_inputs}>

                <span className={styles.spanEmail}>

                    <label className={styles.labelUser} >
                        <label className={styles.circuloUser}>
                            <FaUserAlt />
                        </label>
                    </label>

                    <input
                        type="text"
                        name="email"
                        onChange={changeInput}
                        className={styles.email}
                        placeholder="email"
                    />
                </span>

                <span className={styles.spanSenha}>

                    <input
                        type="password"
                        name="senha"
                        onChange={changeInput}
                        className={styles.senha}
                        placeholder="senha"

                    />
                    <label className={styles.labelCadeado} >
                        <label className={styles.circuloCadeado}>
                            <RiLock2Fill />
                        </label>
                    </label>
                </span>

                <span className={styles.spanConfSenha}>
                    <input
                        type="password"
                        name="confirmarSenha"
                        onChange={changeInput}
                        className={styles.senha}
                        id={styles.confirm}
                        placeholder=" confirmar senha"
                    />

                    <label className={styles.labelCadeado} >
                        <label className={styles.circuloCadeado}>
                            <RiLock2Fill />
                        </label>
                    </label>
                </span>

            </div>

            <br></br>

            {/* <div className={styles.btn}> */}
            <button
                className={styles.btn_entrar}
                onClick={salvar}
            >
                ENTRAR
            </button>
            {/* </div> */}

            <p>OU</p>

            <p
            // onClick={alerta}
            >
                entrar com Google
            </p>

            {/* </div> */}
        </div>

        {/* <div id='loading' className={styles2.loading}>
        <AiFillThunderbolt className={styles2.loading_icon} id='foguetin'/>
    </div> */}

    </div>
);

export default RegisterScreen;

