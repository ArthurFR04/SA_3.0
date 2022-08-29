import React, { useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import TextEditor from '../../components/Text Editor/TextEditor';
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
  
                <Header/>
                
            <div className='container-NP'>

                <div className='editor'>
                    <TextEditor/>
                </div>
            
            </div>
            
                <Footer/>
                
        </div>
    )
}

export default NewPost