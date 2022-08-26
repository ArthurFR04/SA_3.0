import React, { useRef, useState } from 'react';
import { TextEditor } from '../../components/TextEditor/TextEditor';

import './NewPostStyle.css'

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
        <div className='container-NP'>
            <TextEditor></TextEditor>
        </div>
    )
}

export default NewPost