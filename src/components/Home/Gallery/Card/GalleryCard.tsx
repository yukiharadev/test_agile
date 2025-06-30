import styles from "./css/galleryCard.module.css";

const GalleryCard = () => {
  return (
    <div className={styles.gallery_card}>
      <div className={styles.gallery_card_image}>
        <img src="https://placehold.co/90x90" alt="gallery" />
      </div>
      <div className={styles.gallery_card_content}>
        <h3 className={styles.gallery_card_content_title_name}>John Doe</h3>
        <p className={styles.gallery_card_content_title_website}>website.com</p>
        <p className={styles.gallery_card_content_description}>
          Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
          enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
          laoreet nulla.
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;