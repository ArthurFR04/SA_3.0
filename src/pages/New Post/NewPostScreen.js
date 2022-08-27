import React, { useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import TextEditor from '../../components/TextEditor';
import Footer from '../../components/Footer/Footer';

import styles from'./NewPostStyle.css'

const NewPost = () => {

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
        <div className='tela'>

                <div className={styles.headerNP}>
                        <Header/>
                </div>
            <div className='container-NP'>


                <div className='editor'>
                    <TextEditor/>
                </div>
            
            </div>
                <div className='footerNP'>
                    <Footer/>
                </div>
        </div>
    )
}

export default NewPost