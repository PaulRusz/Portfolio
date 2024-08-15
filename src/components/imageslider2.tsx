import React, { useState, useEffect } from "react";
import image1 from "../assets/images/boat.png";
import image2 from "../assets/images/budapest.png";
import image3 from "../assets/images/winterTrees.png";
import image4 from "../assets/images/sophie.png";
import styles from "../styles/imageslider2.module.scss";

const images = [image1, image2, image3, image4];

export default function ImageSlider2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderContainer2}>
      <div className={styles.sliderImageWrapper2}>
        {images.map((src, index) => (
          <img
            key={index}
            className={`${styles.sliderImage2} ${
              index === currentIndex ? styles.show : ""
            }`}
            src={src}
            loading="lazy"
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#beff46] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}