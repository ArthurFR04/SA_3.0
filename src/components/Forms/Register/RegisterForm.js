
import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button } from '@mantine/core';

import { cadastrar } from "../../../pages/Register/RegisterLogic"

import styles from './RegisterFormStyle.module.css'

let RegisterForm = () => {
    const form = useForm({
        initialValues: { name: '', lastname: '', email: '', password: '' },
        validate: {
            
            name: (value) => (value.length < 1 ? (<label className={styles.labelErro}>"Preenchimento obrigatório"</label>) : null),

            lastname: (value) => (value.length < 1 ? (<label className={styles.labelErro}>"Preenchimento obrigatório"</label>) : null),
            
            email: (value) => (/^\S+@\S+$/.test(value) ? null : (<label className={styles.labelErro}>"E-mail inválido"</label>)),
            
            password: (value) => (value.length < 6 ? (<label className={styles.labelErro}>"Mínimo de 6 caracteres"</label>) : null),

            confirmPassword: (value, values) => value !== values.password ? (<label className={styles.labelErro}>"As senhas não são iguais"</label>) : null,
        },
    });


    const handleSubmit = (values) => {
        console.log(values);
        // Login_values.value = values
        document.getElementById("loading").style.display = "flex"
        cadastrar(values)
    };

    return (
        <div className={styles.corpoForm}>

            <form onSubmit={form.onSubmit(handleSubmit)} className={styles.Form}>

                <TextInput
                    placeholder="Nome"
                    radius="md"
                    size="md"
                    mt="sm"
                    {...form.getInputProps('name')}
                    className={styles.nome}
                />
                <TextInput
                    placeholder="Sobrenome"
                    radius="md"
                    size="md"
                    mt="sm"
                    {...form.getInputProps('lastname')}
                    className={styles.nome}
                />
                <TextInput
                    placeholder="E-mail"
                    radius="md"
                    size="md"
                    mt="sm"
                    {...form.getInputProps('email')}
                    className={styles.email}
                />
                <PasswordInput
                    placeholder="Senha"
                    radius="md"
                    size="md"
                    mt="sm"
                    {...form.getInputProps('password')}
                    className={styles.senha}
                />
                <PasswordInput
                    placeholder="Confirme a senha"
                    radius="md"
                    size="md"
                    mt="sm"
                    {...form.getInputProps('confirmPassword')}
                    className={styles.confSenha}
                />


                <Button type="submit" mt="sm" className={styles.btn_cadastrar}>
                    Cadastrar
                </Button>
            </form>
        </div>
    );

    //                     <span className={styles.spanEmail}>

    //                         <label className={styles.circuloUser}>
    //                             <FaUserAlt />
    //                         </label>

    //                         <input
    //                             type="text"
    //                             name="email"
    //                             onChange={changeInput}
    //                             className={styles.email}
    //                             placeholder="email"
    //                         />
    //                     </span>

    //                     <span className={styles.spanSenha}>

    //                         <input
    //                             type="password"
    //                             name="senha"
    //                             onChange={changeInput}
    //                             className={styles.inputs}
    //                             placeholder="senha"

    //                         />
    //                         <label className={styles.circuloCadeado}>
    //                             <RiLock2Fill />
    //                         </label>
    //                     </span>

    //                     <span className={styles.spanConfSenha}>
    //                         <input
    //                             type="password"
    //                             name="confirmarSenha"
    //                             onChange={changeInput}
    //                             className={styles.inputs}
    //                             id={styles.confirm}
    //                             placeholder=" confirmar senha"
    //                         />

    //                         <label className={styles.circuloCadeado}>
    //                             <RiLock2Fill />
    //                         </label>
    //                     </span>

    //                     {/* <span className={styles.spanConfSenha2}>
    //                     <input
    //                         type="password"
    //                         name="confirmarSenha"
    //                         onChange={changeInput}
    //                         id={styles.confirm}
    //                         placeholder=" confirmar senha"
    //                     />


    //                         <label className={styles.circuloCadeado2}>
    //                             <RiLock2Fill />
    //                         </label>
    //                 </span> */}
    // <button
    //            className={styles.btn_entrar}
    //            onClick={salvar}
    //        >
    //            ENTRAR
    //        </button> 

}

export default RegisterForm   