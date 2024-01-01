import styles from './Compot2.module.scss'
import {FC} from 'react'
import Cat from './assets/cat.svg'
import ghostImg from './assets/ghost.png'
export const Compot2:FC = () => {

    return (
        <div className={styles.compot2}>
            <h1>Component2</h1>
            <p>Css modules are OK!</p>
            <hr/>
            <div className={styles.loadersection}>
                <div className={styles.imager}><img src={ghostImg} alt="Ghost"/></div>
                <div className={styles.loadernote}> FILE LOADER SECTION IS OK</div>
            </div>
            <hr/>
<div className={styles.loadersection}>
    <Cat className={styles.svgcat}/>
    <div className={styles.loadernote}> SVG LOADER SECTION IS OK</div>

</div>
            </div>
    )
}