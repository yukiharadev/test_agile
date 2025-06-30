import styles from "./css/featureItem.module.css";
import type { FeatureType } from "../../../types/Features";

const FeatureItem = (feature: FeatureType) => {
  const { title, description, image, background } = feature;
  return (
    <div className={styles.feature_item}>
      <div className={styles.feature_images}>
        <img src={image} alt="feature" className={styles.feature_image} />
        <img
          src={background}
          alt="feature"
          className={styles.feature_background}
        />
      </div>
      <div className={styles.feature_content}>
        <h3 className={styles.feature_content_title}>{title}</h3>
        <p className={styles.feature_content_description}>{description}</p>
        <div className={styles.feature_content_button}>
          Learn More{"  "}
          <svg
            width="23"
            height="16"
            viewBox="0 0 23 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1864 15.0002L21.0952 8.10663L15.1864 1.21301"
              stroke="#9C69E2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.0955 8.10669H1.39941"
              stroke="#9C69E2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
