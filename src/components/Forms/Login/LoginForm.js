import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button } from '@mantine/core';

import styles from './LoginFormStyle.module.css'

import { Login_values } from "../../../Context"
import { entrar } from "../../../pages/Login/LoginLogic"

let LoginForm = () => {
    
    const form = useForm({
        initialValues: { email: '', password: '' },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : (<label className={styles.labelErro}>"E-mail inválido"</label>)),
            password: (value) => (value.length < 6 ? (<label className={styles.labelErro}>"Deve conter no mínimo 6 caracteres"</label>) : null),
        },
    });


    const handleSubmit = (values) => { 
        console.log(values);
        Login_values.value = values
        document.getElementById("loading").style.display = "flex"
        entrar()
    };

    const handleSubmit2 = (values) => { 
        console.log(values);

    }

    return (
        <div className={styles.corpoForm}>

            <form onSubmit={form.onSubmit( handleSubmit )} onChange={handleSubmit2} className={styles.Form}>
                {/* <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} /> */}
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


                <Button type="submit" mt="sm" className={styles.btn_entrar}>
                    Entrar
                </Button>
            </form>
        </div>
    );
}

export default LoginForm    