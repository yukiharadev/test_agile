import styles from "./css/button.module.css"

const Button = ({children, onClick, type, className, disabled}: {children: React.ReactNode, onClick: () => void, type: "button" | "submit" | "reset", className?: string, disabled: boolean}) => {
    return (
        <button className={`${styles.button} ${className}`} onClick={onClick} type={type} disabled={disabled}>
            <span className={styles.button_text}>
                {children}
            </span>
        </button>
    )
}

export default Button;


