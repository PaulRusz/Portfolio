import React, { useState, useEffect } from "react";
import image1 from "../assets/images/SA.webp";
import image2 from "../assets/images/SA2.webp";
import image3 from "../assets/images/Charleston.webp";
import image4 from "../assets/images/sophierizz.webp";
import styles from "../styles/imageslider.module.scss";

const images = [image1, image2, image3, image4];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderImageWrapper}>
        {images.map((src, index) => (
          <img
            key={index}
            className={`${styles.sliderImage} ${
              index === currentIndex ? styles.show : ""
            }`}
            src={src}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}