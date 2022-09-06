import React from 'react';

import { AiFillHeart } from "react-icons/ai";

import styles from './FavoritesStyle.module.css';

import Grid from '../Simple Grid/SimpleGrid'

const Favorites = () => {

    return (
        <div className={styles.favoritas}>
            <h1 className={styles.titleFavorites}>

                Postagens favoritadas
                <AiFillHeart className={styles.heartIcon} />
            </h1>

            <Grid component="Favorites" />
            
        </div>
    )
}

export default Favorites