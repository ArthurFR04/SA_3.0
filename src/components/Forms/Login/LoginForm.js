import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

import styles from './LoginFormStyle.module.css'

function LoginForm() {
    const form = useForm({
        initialValues: { name: '', email: '' },
        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const handleError = (errors) => {
        if (errors.name) {
            showNotification({ message: 'Please fill name field', color: 'red' });
        } else if (errors.email) {
            showNotification({ message: 'Please provide a valid email', color: 'red' });
        }
    };

    const handleSubmit = (values) => { };

    return (
        <div>

            <form onSubmit={form.onSubmit(handleSubmit, handleError)} className={styles.Form}>
                {/* <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} /> */}
                <input mt="sm" placeholder="Email" {...form.getInputProps('email')} className={styles.email}/>
                <Button type="submit" mt="sm" className={styles.btn_entrar}>
                    Entrar
                </Button>
            </form>
        </div>
    );
}

export default LoginForm    