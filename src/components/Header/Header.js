import React from 'react';

import styles from './Header.module.css';

const Header = (props) => {

        return (
                <header className={styles.header}>
                        <label className={styles.eltec}>
                                ELTEC
                        </label>
                        <div className='azul'>

                        </div>
                </header>
        )
}

export default Header