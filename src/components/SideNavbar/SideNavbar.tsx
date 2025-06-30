import Logo from "../Logo/Logo";
import styles from "./css/sidenavbar.module.css";
import { Link, useLocation, useNavigate } from "react-router";
import sidebarConfig from "../../configs/sidebar.config";
import { useDispatch } from "react-redux";
import { authLogout } from "../../features/auth/authAction";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const SideNavbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const handleLogout = () => {
    dispatch(authLogout() as any);
    navigate("/auth/login");
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <button
        className={`${styles.hamburger_button} ${isOpen ? styles.hidden : ""}`}
        onClick={toggleSidebar}
      >
        <FaBars size={24} />
      </button>
      <div
        className={`${styles.sidenavbar} ${isOpen ? styles.open : ""}`}
        ref={sidebarRef}
      >
        <div className={styles.sidenavbar_header}>
          <div className={styles.sidenavbar_content_logo}>
            <Logo />
            <p className={styles.sidenavbar_content_logo_text}>Yukihara</p>
          </div>
          <button className={styles.close_button} onClick={toggleSidebar}>
            <FaTimes size={20} />
          </button>
        </div>

        <div className={styles.sidenavbar_menu}>
          {sidebarConfig.map((item, index) =>
            item.path ? (
              <Link
                to={item.path}
                key={index}
                onClick={() => setIsOpen(false)}
              >
                <button
                  className={`${styles.sidenavbar_menu_button} ${
                    isActive(item.path) ? styles.active : ""
                  }`}
                >
                  {item.name}
                </button>
              </Link>
            ) : (
              <button
                key={index}
                className={styles.sidenavbar_menu_button}
                onClick={handleLogout}
              >
                {item.name}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SideNavbar;