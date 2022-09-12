import React from 'react';

import { IoAddCircle } from "react-icons/io5";

import styles from './FavoritesStyle.module.css';

import Grid from '../Simple Grid/SimpleGrid'

const Favorites = () => {

    return (
        <div className={styles.favoritas}>
            <h1 className={styles.titleFavorites}>

                Minhas postagens

                <IoAddCircle
                    className={styles.heartIcon}
                    onClick={() => {window.location.href='/NewPost'}}
                />
            </h1>

            <Grid component="Favorites" />
            
        </div>
    )
}

export default Favorites