import React from 'react';

import styles from './Header.module.css';

import Logo from '../../assets/logo_branca_eltec.png'

const Header = (props) => {

        return (
                <header className={styles.header}>
                        <img src={Logo} className={styles.logo} alt='Imagem da logo do site' />
                        <label className={styles.eltec}>
                                ELTEC
                        </label>
                        <div className={styles.direita} style={{ display: props.component === "Profile" ? 'none' : 'flex' }} >
                                <div className={styles.azul_1}>  </div>
                                <div className={styles.azul_2}>  </div>
                        </div>
                </header>
        )
}

export default Header