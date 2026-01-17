import styles from './TextButton.module.scss';


const TextButton = props => {
    return <button className={styles.button}>{props.placeholder}</button>
}

export default TextButton;

