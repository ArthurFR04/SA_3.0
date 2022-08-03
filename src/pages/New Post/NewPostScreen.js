import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

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
        <div className='container'>
            <div className='editor'>

                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onBlur={handleUptade}
                    onChange={(newContent) => { }}
                />
            </div>
        </div>
    )
}

export default NewPost