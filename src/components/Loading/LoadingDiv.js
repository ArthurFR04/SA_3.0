import { AiFillThunderbolt } from "react-icons/ai";

import styles from './LoadingDivStyle.module.css'


let LoadingDiv = () => {

    return (

        <div id='loading' className={styles.LoadingDiv}>
            <AiFillThunderbolt className={styles.loading_icon} id='foguetin' />
        </div>
    )
}

export default LoadingDiv