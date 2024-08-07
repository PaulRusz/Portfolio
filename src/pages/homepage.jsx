import React from "react";
import ImageSlider from "./ImageSlider"; // Import your ImageSlider component
import ImageSlider2 from "./ImageSlider2"; // Import your ImageSlider2 component
import styles from "./Home.module.scss"; // Import your CSS Module
import { Helmet } from "react-helmet-async"; // Import react-helmet-async

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Image slider example with React and SCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <div className={styles.homepageContainer}>
        <div className={styles.homepageSlideShow}>
          <main className={styles.main}>
            <ImageSlider />
          </main>
        </div>

        <div className={styles.homepageTextContainer}>
          <h1>Hey, I'm Paul!</h1>
          <div className={styles.divider3}></div>
          <p className={styles.homepageText}>Take a look around.</p>
        </div>

        <div className={styles.homepageSlideShow2}>
          <main className={styles.main}>
            <ImageSlider2 />
          </main>
        </div>
      </div>
    </>
  );
}
