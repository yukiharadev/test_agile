import { useState, type InputHTMLAttributes } from "react";
import styles from "./InputField.module.css"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const InputField = ({ label, error,...props }: InputFieldProps) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className={styles.inputField_container}>   
            <label className={styles.inputField_label}>{label}</label>
            <input 
            {...props} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
            className={`${isFocused ? styles.inputField_input_focused : styles.inputField_input_blurred}`}/>
            {error && <p className={styles.inputField_error}>{error}</p>}
        </div>
    )
}

export default InputField;