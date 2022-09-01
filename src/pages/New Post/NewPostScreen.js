import React, { useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import TextEditor from '../../components/Text Editor/TextEditor';
import Footer from '../../components/Footer/Footer';

import styles from'./NewPostStyle.module.css'

import { visitedPages } from "../../components/Router/Location"


const NewPostScreen = () => {
    visitedPages()


    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false,
        height: 400,
    }

    const handleUptade = (event) => {
        const editorContent = event.target.value
        setContent(editorContent)
    }

    return (
        <div className={styles.tela}>
  
                <Header/>
                
            <div className={styles.container}>

                <div className={styles.editor}>
                    <TextEditor/>
                </div>
            
                <button className={styles.btn}> ENVIAR</button>
            </div>
            
                <Footer/>
                
        </div>
    )
}

export default NewPostScreen