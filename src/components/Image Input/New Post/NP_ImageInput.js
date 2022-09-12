
import { useState } from 'react';
import { FileButton, Button, Text } from '@mantine/core';

import styles from './NP_ImageInputStyle.module.css'


let ImageInput = () => {
    
    let showImage = () => {
        document.getElementById('SearchBtn').style.display = 'none';
        document.getElementById('image').style.display = 'flex';
        let img = document.getElementById('image');
        img.src = JSON.parse(localStorage.getItem('image'))
    }

    const [file, setFile] = useState(null);

    const delImage = () => {
        setFile(null)
        document.getElementById('SearchBtn').style.display = 'flex';
        document.getElementById('image').style.display = 'none';
        document.getElementById('image').src = ''
    }

    const imgPath = file;
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        // convert image file to base64 string and save to localStorage
        localStorage.setItem(document.getElementById('imgName').innerHTML, JSON.stringify(reader.result));
        showImage()
    }, false);

    if (imgPath) {
        reader.readAsDataURL(imgPath);
    }

    return (
        <div className={styles.btns}>


            <FileButton onChange={setFile} accept="image/png,image/jpeg" className={styles.SearchBtn} id='SearchBtn'>
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
            <img id='image' className={styles.selectedImg}/>



        </div>
    );
}

export default ImageInput