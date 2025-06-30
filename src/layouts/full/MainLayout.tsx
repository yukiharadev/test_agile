import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./css/MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout_container}>
      <div className={styles.mainLayout_container_navbar}>
        <Navbar />
      </div>
      <div className={styles.mainLayout_container_content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
