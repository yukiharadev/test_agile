import { useState } from "react";
import GalleryCard from "../Card/GalleryCard";
import styles from "./css/galleryCarousel.module.css";

const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    <GalleryCard />,
    <GalleryCard />,
    <GalleryCard />,
    <GalleryCard />,
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className={styles.gallery_carousel_container}>
      <div className={styles.gallery_background}>
        <h1 className={styles.gallery_background_title}>Testimonials</h1>
        <div className={styles.gallery_button_container}>
          <button className={styles.gallery_button_left} onClick={handlePrev}>
            <svg
              width="43"
              height="17"
              viewBox="0 0 43 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.06298 1.70128L1.05225 8.7138L7.06298 15.7263"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.05247 8.71374L41.124 8.71375"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className={styles.gallery_button_right} onClick={handleNext}>
            <svg
              width="43"
              height="17"
              viewBox="0 0 43 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.9263 1.12874L41.937 8.14127L35.9263 15.1538"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M41.9374 8.14124L1.86572 8.14124"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={styles.carousel_wrapper}>
          <div
            className={styles.carousel_inner}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, i) => (
              <div className={styles.carousel_item} key={i}>
                {card}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.gallery_dots}>
          {cards.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;
