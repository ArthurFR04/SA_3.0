import React from 'react';
// import { Link } from "react-router-dom";

import { relogar } from "../Login/LoginLogic"
import { VisitedPages } from "../../components/Router/Location"

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Comments } from "../../components/Comments/Comments"

import LoadingDiv from '../../components/Loading/LoadingDiv'


import {  // AiFillHeart,    
    AiOutlineHeart
} from "react-icons/ai";


import styles from "./PostStyle.module.css"



/* <AiFillHeart /> */
let Post = JSON.parse(localStorage.getItem('PostInfos'))

let PrintConteudo = () => {

    document.getElementById('conteudoPost').innerHTML = Post.descricao
    document.getElementById("loading").style.display = "none"
}

let StartPrint = () => {

    setTimeout(PrintConteudo, 500)
}


let PostScreen = () => {
    relogar()
    VisitedPages()
    StartPrint()

    // console.log(Post);
    return (
        <div className={styles.PostScreen}>
            <Header />

            <div className={styles.container}>
                <div className={styles.topo}>
                    <img src={JSON.parse(localStorage.getItem(Post.foto))} className={styles.capa}/>
                    <h1 id='titulo' className={styles.titulo}>{Post.titulo} <AiOutlineHeart className={styles.heartIcon} /></h1>
                    
                </div>
                <div id='conteudoPost' className={styles.conteudo} >
                    {/* <p>É sempre bom ter a ferramenta certa em mãos quando mais precisamos, não é mesmo? Seja para trocar a resistência do chuveiro, instalar uma prateleira ou fixar um quadro novo na parede. Por isso mesmo, é importante estar preparado e contar com algumas ferramentas básicas.
                        Confira a lista de itens que não podem faltar na sua caixa de ferramentas e mantenha-se sempre preparado!
                    </p>
                    <h3>1. Trena</h3>
                    <p>
                        Para ter certeza de que aquele móvel tão desejado cabe perfeitamente na sua casa, a trena é indispensável. Afinal, com o equipamento você tira medidas exatas e consegue evitar problemas futuros.
                    </p>

                    <div className={styles.center}>
                        <img src='https://cdn.leroymerlin.com.br/products/trena_5mx16mm_starrett_89847184_0001_600x600.jpg'></img>
                    </div>
                    <h3>2. Fita Isolante</h3>
                    <p>Perfeita para pequenos reparos e emendas. Tenha sempre ao menos um rolo de fita isolante em casa e proteja-se de choques ao fazer reparos na fiação elétrica.
                    </p>
                    <div className={styles.center}>
                        <img src='https://img.lojadomecanico.com.br/IMAGENS/37/351/14563/Fita-Isolante-Preta-20-Metros---19-mm-x--tramontina-575400201.JPG'></img>
                    </div>

                    <h3>3. Canivete</h3>
                    <p>Um canivete bem afiado pode ser útil em diversas situações de reparo. Seja para aparar um pedaço de corda, cortar as sobras de fita isolante e até mesmo apontar seu lápis de carpinteiro. Opte por um modelo resistente e tenha sempre em mãos uma ferramenta de confiança.
                    </p>
                    <div className={styles.center}>
                        <img src='http://cdn.shopify.com/s/files/1/0626/8374/2430/products/52_p-carb-canivete-a_o-carbono-com-cabo-de-acetato_2_1__2.jpg?v=1647433358'></img>
                    </div>

                    <h3>4. Martelo</h3>
                    <p>O martelo é uma das ferramentas mais versáteis para se ter em casa. Afinal, sua utilidade vai muito além de pregar ou remover pregos. Com um bom martelo, você consegue fazer reparos simples em móveis, objetos e muito mais. Escolha o modelo que mais se adequa às suas necessidades e mantenha-o sempre por perto.
                    </p>
                    <div className={styles.center}>
                        <img src='https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/m/a/martelo-de-unha-20mm-tramontina-40370020_194560_1.jpg'></img>
                    </div>

                    <h3>5. Chaves</h3>
                    <p>Chaves básicas, como as de fenda e Philips, promovem a fixação de parafusos e possibilitam o reparo de diversos itens domésticos. Existem inúmeros modelos e tamanhos disponíveis, por isso mesmo é importante ter uma boa seleção em sua caixa de ferramentas. Recomendamos investir em ao menos uma chave pequena e média de cada formato para não ser pego desprevenido.
                    </p>
                    <div className={styles.center}>
                        <img src='https://static.mundomax.com.br/produtos/51581/550/1.webp'></img>
                    </div>

                    <h3>6. Chave Fixa</h3>
                    <p>Apesar do design relativamente simples, esta chave é de grande importância para efetuar pequenos reparos domésticos. Invista em pequenos kits e tenha sempre em mãos a ferramenta no tamanho que você precisa.
                    </p>
                    <div className={styles.center}>
                        <img src='https://a-static.mlcdn.com.br/800x560/chave-fixa-25-x-28mm-tramontina/aslcc/9216371106/8d5927a22df1328560ec0f54ceb6797c.jpeg'></img>
                    </div>

                    <h3>7. Óculos de Segurança</h3>
                    <p>Proteger seus olhos é fundamental em qualquer reparo caseiro. Por isso mesmo, é importante ter sempre óculos de segurança em sua caixa de ferramentas.
                    </p>
                    <div className={styles.center}>
                        <img src='https://safetytrab.com.br/wp-content/uploads/2020/09/%C3%93culos-de-Seguran%C3%A7a-RJ-Incolor-Poli-Ferr-CA-34082.jpg'></img>
                    </div>

                    <h3>8. Alicate</h3>
                    <p>Fundamental para efetuar pequenos reparos domésticos. Afinal, com a ferramenta é possível cortar fios, apertar objetos e muito mais. Escolha os modelos mais básicos para fazer parte do seu arsenal de ferramentas e esteja sempre preparado.
                    </p>
                    <div className={styles.center}>
                        <img src='https://img.lojadomecanico.com.br/IMAGENS/2/468/111277/Alicate-Universal-Polido-Premium-de-8-Po-thompson-141.JPG'></img>
                    </div>

                    <h3>9. Furadeira</h3>
                    <p>Ferramenta indispensável para perfurar paredes, madeira e metal. Além disso, alguns modelos também podem ser utilizados para parafusar seus móveis e decoração, tornando seu trabalho ainda mais fácil.

                    </p>
                    <div className={styles.center}>
                        <img src='https://philco.vteximg.com.br/arquivos/ids/183474-1000-1000/PPF03_01.jpg?v=637459974394030000'></img>
                    </div>
                    <p>
                        Agora que você já tem uma lista de ferramentas básicas para fazer a manutenção, chegou a hora de ir às compras. Acesse o site da Ferramentas Kennedy e encontre os itens que você mais precisa! </p> */}




                </div>



                <Comments postID={Post.id} />

            </div>

            <Footer />

            <LoadingDiv flex='true' />
        </div>


    )
}



export default PostScreen