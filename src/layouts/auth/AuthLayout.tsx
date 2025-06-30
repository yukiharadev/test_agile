import { Outlet } from "react-router"
import Navbar from "../../components/Navbar/Navbar"
import styles from "./css/authLayout.module.css"

const AuthLayout = () => {
    return (
        <div >
            <div className={styles.authLayout_container_navbar}>
            <Navbar />
            </div>
           <div className={styles.authLayout_container_form}>
            <Outlet />
           </div>
        </div>
    )
}

export default AuthLayout;