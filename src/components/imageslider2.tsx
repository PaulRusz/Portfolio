import React, { useState, useEffect } from "react";
import image1 from "../assets/images/SA.png";
import image2 from "../assets/images/SA2.png";
import styles from "../styles/imageslider2.module.scss";

// Remove `StaticImageData` interface usage if not needed
interface ImageData {
  src: string; // Use string since you're using the regular <img> tag
}

const images: ImageData[] = [
  { src: image1 },
  { src: image2 },
  // { src: image3 },
];

export default function ImageSlider2(): JSX.Element {
  // Keeps track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Determines if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  // const prevSlide = (): void => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Effect to handle auto slide transition
  useEffect(() => {
    // Start auto slide transition if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleans the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className={styles.sliderContainer2}>
      <div
        className={`${styles.sliderImage2} group hover:-translate-y-2`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={styles.sliderImage2}
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
        />
      </div>
      {/* <button
          className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-gray-400 group-hover:text-white" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
          onClick={nextSlide}
        >
          <ChevronRight className="text-gray-400 group-hover:text-white" />
        </button> */}
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