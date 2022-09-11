import React, { 

} from 'react';
import Header from '../../components/Header/Header';
import TextEditor from '../../components/Text Editor/TextEditor';
import Footer from '../../components/Footer/Footer';

import { relogar } from "../Login/LoginLogic"

import styles from'./NewPostStyle.module.css'

const NewPostScreen = () => {
    relogar()

    return (
        <div className={styles.tela}>
  
                <Header/>
                
            <div className={styles.container}>

                <div className={styles.editor}>
                    <TextEditor/>
                </div>
            
            </div>
            
                <Footer/>
                
        </div>
    )
}

export default NewPostScreen