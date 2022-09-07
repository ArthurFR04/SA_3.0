import React from 'react';
// import { Link } from "react-router-dom";

import { VisitedPages } from "../../components/Router/Location"

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import {  // AiFillHeart,    
AiOutlineHeart } from "react-icons/ai";

import styles from "./PostStyle.module.css"


/* <AiFillHeart /> */ 

let PostScreen = () => {
    VisitedPages()

    return (
        <div>
            <Header />

            <div className={styles.container}>
                <div className={styles.topo}>
                    <h1 id='titulo' >Ferramentas para Manutenção</h1>
                    <AiOutlineHeart className={styles.heartIcon} />
                </div>
                <div className={styles.conteudo}>
                    <label>É sempre bom ter a ferramenta certa em mãos quando mais precisamos, não é mesmo? Seja para trocar a resistência do chuveiro, instalar uma prateleira ou fixar um quadro novo na parede. Por isso mesmo, é importante estar preparado e contar com algumas ferramentas básicas.
                        Confira a lista de itens que não podem faltar na sua caixa de ferramentas e mantenha-se sempre preparado!
                    </label>
                    <h3>1.Trena</h3>
                    <label>
                    Para ter certeza de que aquele móvel tão desejado cabe perfeitamente na sua casa, a trena é indispensável. Afinal, com o equipamento você tira medidas exatas e consegue evitar problemas futuros.  

                    </label>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PostScreen