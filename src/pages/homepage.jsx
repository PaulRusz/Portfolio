import React from "react";
import ImageSlider from "../components/imageslider.tsx";
import ImageSlider2 from "../components/imageslider2.tsx";
import styles from "../styles/homepage.module.scss";

export default function Home() {
  return (
    <>
      <title>Home Page</title>
      <meta
        name="description"
        content="Image slider example with React and SCSS"
      />
      <link rel="icon" href="/favicon.ico" />

      <div className={styles.homepageContainer}>
        <div className={styles.homepageSlideShow}>
          <main className={styles.main}>
            <ImageSlider />
          </main>
        </div>

        <div className={styles.homepageTextContainer}>
          <h1>
            <div className={styles.heyText}>Hey,</div>
            <br></br>I'm Paul!
          </h1>
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
