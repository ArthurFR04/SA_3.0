import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import draftToHtml from "draftjs-to-html";

import ImageInput from '../Image Input/New Post/NP_ImageInput';

import { enviar } from '../../pages/New Post/NewPostLogic'

import './TextEditorStyle.css'

export default class TextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;

        // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        
        return (
            <div className='TextEditor_div'>

                <ImageInput />
                <input id="titulo" placeholder="Título" className='TextEditor_titulo'/>

                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />
                <textarea
                    disabled
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                    id='TextArea'
                    className='TextEditor_textarea'
                ></textarea>

                <button className='TextEditor_btn' onClick={enviar} > Enviar</button>

            </div>
        );
    }
}