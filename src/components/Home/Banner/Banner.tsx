import banner from "../../../assets/images/image.png";
import Button from "../../Button/Button";
import styles from "./css/banner.module.css";

const Banner = () => {
    return (
        <div className={styles.banner_container}>
            <div className={styles.banner_content}>
                <h1 className={styles.banner_content_title}>Save your data storage here.</h1>
                <p className={styles.banner_content_description}>
                Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
                </p>
                <Button onClick={() => {}} type="button" disabled={false} children="Learn more" className={styles.banner_content_button} />
             
            </div>
            <div className={styles.banner_image}>
                <img src={banner} alt="banner" />
            </div>
        </div>
    )                   
}

export default Banner;