import Logo from "../Logo/Logo";
import styles from "./css/sidenavbar.module.css";
import { Link, useLocation, useNavigate } from "react-router";
import sidebarConfig from "../../configs/sidebar.config";
import { useDispatch } from "react-redux";
import { authLogout } from "../../features/auth/authAction";

const SideNavbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return pathname === path;
  };    
  const handleLogout = () => {
    dispatch(authLogout() as any);  
    navigate("/auth/login");
  }
  return (
    <div>
      <div className={styles.sidenavbar_content_logo}>
        <Logo />
        <p className={styles.sidenavbar_content_logo_text}>Yukihara</p>
      </div>

      <div className={styles.sidenavbar_menu}>
        {sidebarConfig.map((item, index) => (
          item.path ? (
            <Link to={item.path} key={index} >
              <button className={`${styles.sidenavbar_menu_button} ${isActive(item.path) ? styles.active : ""}`}>{item.name}</button>
            </Link>
          ) : (
            <button key={index} className={styles.sidenavbar_menu_button} onClick={() => handleLogout()}>{item.name}</button>
          )
        ))}
      </div>
    </div>
  );
};

export default SideNavbar;
