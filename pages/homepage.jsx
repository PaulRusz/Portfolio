import React from "react";
import ImageSlider from "./ImageSlider"; // Import your ImageSlider component
import ImageSlider2 from "./ImageSlider2"; // Import your ImageSlider2 component
import "./styles/global.scss"; // Import your SCSS file
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

      <div className="homepageContainer">
        <div className="homepageSlideShow">
          <main className="flex min-h-screen flex-col items-center justify-center py-2">
            <ImageSlider />
          </main>
        </div>

        <div className="homepageTextContainer">
          <h1>Hey, I'm Paul!</h1>
          <div className="divider3"></div>
          <p className="homepageText">Take a look around.</p>
        </div>

        <div className="homepageSlideShow2">
          <main className="flex min-h-screen flex-col items-center justify-center py-2">
            <ImageSlider2 />
          </main>
        </div>
      </div>
    </>
  );
}
