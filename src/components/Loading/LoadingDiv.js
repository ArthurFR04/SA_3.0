import { AiFillThunderbolt } from "react-icons/ai";

import styles from './LoadingDivStyle.module.css'


let LoadingDiv = (props) => {

    return (

        <div id='loading' 
            className={styles.LoadingDiv} 
            style={{ display: props.flex === "true" ? 'flex' : 'none' }}
        >
            <AiFillThunderbolt className={styles.loading_icon} id='foguetin' />
        </div>
    )
}

export default LoadingDiv