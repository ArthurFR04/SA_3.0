
import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

import styles from './NP_ImageInputStyle.module.css'

let ImageInput = () => {

    const [file, setFile] = useState(null);

    const delImage = () => {
        setFile(null)
    }

    return (
        <div className={styles.btns}>

            
                <FileButton onChange={setFile} accept="image/png,image/jpeg" className={styles.SearchBtn}>
                    {(props) => <Button {...props}><span><p>Escolher</p><p>Imagem</p></span></Button>}
                </FileButton>
                <div onClick={delImage} className={styles.DeleteBtn}>
                    X
                </div>
         
            {file && (
                <Text size="sm" align="center" mt="sm" >
                    <span className={styles.nomeImg}>
                        <p id='imgName'>{file.name}</p>
                    </span>
                </Text>
            )}

        </div>
    );
}

export default ImageInput