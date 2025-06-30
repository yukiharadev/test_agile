import { Outlet } from "react-router";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import styles from "./css/SideLayout.module.css";

const SideLayout = () => {
  return (
    <div>
      <div className={styles.sidelayout_menu}>
        <SideNavbar />
      </div>
      <div className={styles.sidelayout_main}>
        <Outlet />
      </div>
    </div>
  );
};

export default SideLayout;
