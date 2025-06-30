import { Link, useLocation } from "react-router";
import navbarConfig from "../../configs/navbar.config";
import Logo from "../Logo/Logo";
import styles from "./css/Navbar.module.css";
import Button from "../Button/Button";
import { authLogout } from "../../features/auth/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isError = useSelector((state: any) => state.auth.isError);
  const error = useSelector((state: any) => state.auth.error);
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError, error]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <button
        className={`${styles.navbar_toggle} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`${styles.navbar_list} ${isMenuOpen ? styles.active : ""}`}>
        {navbarConfig.map((item) => {
          const isHomePageMatch =
            item.isHomePage === true
              ? location.pathname === "/"
              : location.pathname !== "/";

          const isLoginMatch =
            item.isLogin === true ? isAuthenticated : !isAuthenticated;

          if (isHomePageMatch && isLoginMatch) {
            return (
              <li key={item.name} className={styles.navbar_list_item}>
                {item.path ? (
                  <Link to={item.path}>
                    <Button
                      onClick={() => {}}
                      type="button"
                      disabled={false}
                      children={item.name}
                    />
                  </Link>
                ) : (
                  <Button
                    onClick={() => {
                      if (item.name === "Log Out" && isAuthenticated) {
                        dispatch(authLogout() as any);
                      }
                    }}
                    type="button"
                    disabled={false}
                    children={item.name}
                  />
                )}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;