import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

import styles from './LoginFormStyle.module.css'

import { Login_values } from "../../../Context"
import { entrar } from "../../../pages/Login/LoginLogic"

function LoginForm() {
    const form = useForm({
        initialValues: { email: '', password: '' },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'E-mail inválido'),
            password: (value) => (value.length < 6 ? 'A senha deve ter no mínimo 6 caracteres' : null),
        },
    });

    const handleError = (errors) => {
        if (errors.password) {
            showNotification({ message: 'Please fill name field', color: 'red' });
        } else if (errors.email) {
            showNotification({ message: 'Please provide a valid email', color: 'red' });
        }
    };

    const handleSubmit = (values) => { 
        console.log(values);
        Login_values.value = values
        document.getElementById("loading").style.display = "flex"
        entrar()
    };

    return (
        <div className={styles.corpoForm}>

            <form onSubmit={form.onSubmit(handleSubmit, handleError)} className={styles.Form}>
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