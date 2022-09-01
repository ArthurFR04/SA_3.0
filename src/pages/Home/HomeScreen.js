import React from 'react';
import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import Carrossel from "../../components/Carousel/Carousel"
import Grid from "../../components/Simple Grid/SimpleGrid"
// import raioazul from '../../assets/cavalos.jpg'

import styles from './HomeStyle.module.css';

import { visitedPages } from "../../components/Router/Location"


const HomeScreen = () => {

    visitedPages()

    return (
        <div className={styles.home}>
            <Header />


            <div className={styles.container}>

                <div className={styles.carrossel}>
                    <Carrossel />
                </div>


                <div className={styles.vitrine}>

                    <Grid />

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