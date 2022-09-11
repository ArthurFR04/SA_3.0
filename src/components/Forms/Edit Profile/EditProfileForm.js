import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput } from '@mantine/core';

import styles from './EditProfileFormStyle.module.css'


let EditProfileForm = () => {

    let Original = JSON.parse(localStorage.getItem('Login'))


    const form = useForm({
        validateInputOnChange: true,
        initialValues: { nome: Original.nome , sobrenome: Original.sobrenome , biografia: Original.biografia , senha: '' , confSenha: '' },
        validate: {
            nome: (value) => (value.value === Original.nome ? (<label className={styles.labelErro}>"Mudança obrigatória"</label>) : null),
            sobrenome: (value) => (value.value === Original.sobrenome ? (<label className={styles.labelErro}>"Preenchimento obrigatório"</label>) : null),
        },
    });



    return (
        <div className={styles.EditProfileForm}>

            <div className={styles.nameInps}>

                <TextInput
                    placeholder="Nome"
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

            <h2 className={styles.email}>
                {Original.email}
            </h2>

            <textarea
                id='biografiaUser'
                className={styles.biografia}
                {...form.getInputProps('biografia')}
            />


            <PasswordInput
                placeholder="Nova senha"
                radius="md"
                size="md"
                mt="sm"
                {...form.getInputProps('password')}
                className={styles.senha}
            />
            <PasswordInput
                placeholder="Confirme a nova senha"
                radius="md"
                size="md"
                mt="sm"
                {...form.getInputProps('confirmPassword')}
                className={styles.confSenha}
            />

        </div >
    );
}

export default EditProfileForm    