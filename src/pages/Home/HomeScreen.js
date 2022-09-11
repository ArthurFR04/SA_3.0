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

const HomeScreen = () => {
    relogar()
    VisitedPages()

    return (
        <div className={styles.home}>
            <Header />


            <div className={styles.container}>

                <div className={styles.carrossel}>
                    <Carrossel />
                </div>


                <div className={styles.vitrine}>

                    <Grid component="Favorites" />


                    <div className={styles.Textooo} >
                        <h4>Home</h4>
                        <p>Aqui é o Home sabe ?</p>
                        <Link to="/Login" >Bora pro login ??</Link>             <br></br>
                        <Link to="/NewPost" >Nova postagem</Link>                     <br></br>
                        <Link to="/Register" >Bora registraarr</Link>           <br></br>
                        oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>
                        oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>
                        oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>oioioi <br></br><br></br>
                    </div>
                </div>

            </div>


            <Footer component="Home" />
        </div>
    )
};

export default HomeScreen;