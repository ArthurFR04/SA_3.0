
import { useState } from 'react';
import { FileButton, Button, Text } from '@mantine/core';

import styles from './EP_ImageInputStyle.module.css'

let showImage = () => {
    let img = document.getElementById('image');
    img.src = JSON.parse(localStorage.getItem('image'))
} 

let ImageInput = () => {

    const [file, setFile] = useState(null);

    const delImage = () => {
        setFile(null)
    }

    const imgPath = file;
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        // convert image file to base64 string and save to localStorage
        localStorage.setItem("image", JSON.stringify( reader.result));
        showImage()
    }, false);

    if (imgPath) {
        reader.readAsDataURL(imgPath);  
    }

    return (
        <div className={styles.btns}>


            <FileButton onChange={setFile} accept="image/png,image/jpeg" className={styles.SearchBtn}>
                {(props) => <Button {...props} ><span><p>Escolher</p><p>Imagem</p></span></Button>}
            </FileButton>
            <div onClick={delImage} className={styles.DeleteBtn}>
                X
            </div>

            {file && (
                <Text size="sm" align="center" mt="sm" >
                    <span className={styles.nomeImg} >
                        <p id='imgName'>{file.name}</p>
                    </span>
                </Text>

            )}
            <img id='image' />



        </div>
    );
}

export default ImageInput