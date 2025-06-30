import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import styles from "./css/login.module.css";
import { useEffect, useState } from "react";
import { authLogin } from "../../features/auth/authAction";
import type { LoginRequest } from "../../types/Auth/auth.request.type";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");

    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state : any) => state.auth.isAuthenticated);
    const isError = useSelector((state : any) => state.auth.isError);
    const isLoading = useSelector((state : any) => state.auth.isLoading);
    const error = useSelector((state : any) => state.auth.error);

    const handleLogin =  () => {
        const payload : LoginRequest = {username: username};
        dispatch(authLogin(payload) as any);
    }

    useEffect(() => {
        if(isAuthenticated){
            navigate("/");
        }
        if(isError){
            console.log(error);
        }
    }, [isAuthenticated, isError, error]);

    return (
        <div className={styles.signIn_container}>
            <span className={styles.signIn_title}>Sign In</span>
            <InputField label="Username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            {isError && <p className={styles.error_message}>{error}</p>}
            <Button onClick={handleLogin} type="button" disabled={isLoading} className={styles.signIn_button} children="Sign In" />
         
        </div>
    )
}

export default Login;