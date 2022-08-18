import React from 'react';
import { Link } from "react-router-dom";

// import { Login_user } from "../../Context"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import { Carousel } from '@mantine/carousel';

import './CarouselStyle.css';

import raioazul from '../../assets/raioazul.png'

import styles from './HomeStyle.module.css';


const HomeScreen = () => (
    <div className={styles.home}>
        <Header />


        <div className={styles.container}>

        <Carousel slideSize="70%" height={200} slideGap="sm" controlsOffset="xs" controlSize={30} loop withIndicators>
        <Carousel.Slide>{<img src={raioazul} />}</Carousel.Slide>
        <Carousel.Slide>{<img src={raioazul} />}</Carousel.Slide>
        <Carousel.Slide>{<img src={raioazul} />}</Carousel.Slide>
        <Carousel.Slide>{<img src={raioazul} />}</Carousel.Slide>
        <Carousel.Slide>{<img src={raioazul} />}</Carousel.Slide>
    </Carousel>


            <div className={styles.corpo}>
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
);

export default HomeScreen;