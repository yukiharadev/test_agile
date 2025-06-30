import styles from "./css/footer.module.css";
import logo from "../../assets/images/features/logo_footer.png";
import { IoLogoYoutube, IoLogoInstagram , IoLogoGithub } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_content}>
        <div className={styles.footer_content_info}>
          <img src={logo} className={styles.footer_content_logo} alt="logo" />
          <p className={styles.footer_content_address}>Warehouse Society, 234 Bahagia Ave Street PRBW 29281</p>
          <p className={styles.footer_content_email}>info@warehouse.project</p>
          <p className={styles.footer_content_phone}>1-232-3434 (Main)</p>
        </div>
        <div className={styles.footer_content_links}>
          <p className={styles.footer_content_links_title}>About</p>
          <p className={styles.footer_content_links_item}>Profile</p>
          <p className={styles.footer_content_links_item}>Features</p>
          <p className={styles.footer_content_links_item}>Careers</p>
          <p className={styles.footer_content_links_item}>DW News</p>
        </div>
        <div className={styles.footer_content_contact}>
          <p className={styles.footer_content_contact_title}>Help</p>
          <p className={styles.footer_content_contact_item}>Support</p>
          <p className={styles.footer_content_contact_item}>Sign up</p>
          <p className={styles.footer_content_contact_item}>Guide</p>
          <p className={styles.footer_content_contact_item}>Reports</p>
          <p className={styles.footer_content_contact_item}>Q & A</p>
        </div>
        <div className={styles.footer_content_social}>
          <p className={styles.footer_content_social_title}>Social Media</p>
          <div className={styles.footer_content_social_icons}>
            <IoLogoYoutube className={styles.footer_content_social_icon} />
            <IoLogoInstagram className={styles.footer_content_social_icon} />
            <IoLogoGithub className={styles.footer_content_social_icon} />
          </div>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <div className={styles.footer_copyright_content}>
            <p className={styles.footer_copyright_text}>© Datawarehouse™, 2020. All rights reserved. Company</p>
            <p className={styles.footer_copyright_text}>Registration Number: 21479524.</p>
        </div>
        <div>
            <IoChatbubbleEllipsesSharp className={styles.footer_content_social_icon_chat} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
