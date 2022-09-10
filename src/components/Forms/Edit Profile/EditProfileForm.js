import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput } from '@mantine/core';

import styles from './EditProfileFormStyle.module.css'

import { Login_values } from "../../../Context"
import { entrar } from "../../../pages/Login/LoginLogic"

let EditProfileForm = () => {

    let Original = JSON.parse(localStorage.getItem('Login'))

    
    const form = useForm({
        validateInputOnChange: true,
        initialValues: { nome: Original.nome, sobrenome: Original.sobrenome },
        validate: {
            nome: (value) => ( value.value === Original.nome ? (<label className={styles.labelErro}>"Mudança obrigatória"</label>) : null ),
            sobrenome: (value) => ( value.value === Original.sobrenome ? (<label className={styles.labelErro}>"Preenchimento obrigatório"</label>) : null ),
        },
    });
    
    console.log(Original);

    const handleSubmit = (values) => { 
        console.log(values);
    };

    return (


<div className={styles.nameInps}>
                  
            <div onChange={handleSubmit} className={styles.nameInps}>

                <TextInput
                    // placeholder="Nome"
                    radius="md"
                    size="md"
                    mt="sm"
                    {...form.getInputProps('nome')}
                    className={styles.nome}
                />
                <TextInput
                    placeholder="Sobrenome"
                    radius="md"
                    size="md"
                    mt="sm"
                    {...form.getInputProps('sobrenome')}
                    className={styles.sobrenome}
                    />
            </div>
        </div>
    );
}

export default EditProfileForm    