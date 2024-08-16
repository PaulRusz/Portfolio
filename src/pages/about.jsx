import React, { useState, useEffect } from "react";
import styles from "../styles/about.module.scss";
import monacoImage from "../assets/images/Monaco.png";
import weddingImagine from "../assets/images/wedding.png";
import { motion } from "framer-motion";

export default function About() {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const images = [monacoImage, weddingImagine];
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  }, []);

  return (
    <>
      <motion.div
        className={styles.page1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.aboutMeContainer}>
          <h1 className={styles.h1}>A Bit About Me:</h1>
          <div className={styles.divider}></div>

          {currentImage && (
            <img src={currentImage} alt="" className={styles.image} />
          )}

          <div className={styles.narrativeContainer}>
            <p>Born in New Jersey but call Delaware home.</p>
            <div className={styles.divider3}></div>
            <p>
              My collegiate journey took me to Newark, Delaware, and Nashville,
              Tennessee, where I earned a bachelor's degree in business.
              However, my passion for technology has now led me down a different
              path.
            </p>
            <p>
              Over time, I embarked on a self-taught coding journey, delving
              into the intricacies of programming. This newfound interest
              inspired me to enroll in a full stack development course at
              Columbia University.
            </p>
            <p>
              While I acknowledge that there's always more to learn, I thrive on
              the challenge of tackling complex problems and honing my coding
              skills. I'm excited about the possibilities that lie ahead as I
              continue to grow in this dynamic field.
            </p>
            <div className={styles.divider3}></div>
            <p>
              When I'm not immersed in work or coding projects, you can find me
              staying active, spending some downtime outdoors, and exploring
              this beautiful pale blue dot.
            </p>
            <p>
              I also spend my time diving into captivating reads, looking for
              newly released music, or searching for the best lasagna the East
              Coast has to offer.
            </p>
            <p>
              I'm sure there's much more to me than what's listed here, so don't
              hesitate to reach out if you'd like to learn more.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
