import React from 'react';
import { Link } from "react-router-dom";


import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import Carrossel from "../../components/Carousel/Carousel"
import Grid from "../../components/Simple Grid/SimpleGrid"


import styles from './HomeStyle.module.css';
import '../../assets/Styles/Geral.css'

import { VisitedPages } from "../../components/Router/Location"
import { relogar } from "../Login/LoginLogic"

let vitrine = () => {
   
}

const HomeScreen = () => {
    relogar()
    VisitedPages()
    vitrine()

    return (
        <div className={styles.home}>
            <Header />


            <div className={styles.container}>

                <div className={styles.carrossel}>
                    <Carrossel />
                </div>


                <div className={styles.vitrine}>

                        <Grid />

                </div>

            </div>


            <Footer component="Home" />
        </div>
    )
};

export default HomeScreen;