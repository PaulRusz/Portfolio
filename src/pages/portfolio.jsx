import React from "react";
import styles from "./Portfolio.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      {/* Optionally include Navbar if needed */}
      {/* <Navbar /> */}

      <motion.div
        className={styles.page1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.portfolio}>
          <h1>Portfolio</h1>
          <div className={styles.divider}></div>
          <h2 className={styles.header2}>Here are some of my projects:</h2>

          <div className={styles.projectDivider}>
            <ul>
              <li>
                <a
                  className={styles.link}
                  href="https://friendsblog.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FriendsBlog
                  <br />
                  <br />
                  <Image
                    src="/FriendsBlog.png"
                    alt="Friends Blog"
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </li>
            </ul>
          </div>
          <p className={styles.fancyBullet}>
            A social media / blogging platform where a user creates posts,
            searches for other users, and views other user profiles.
          </p>
          <p className={styles.fancyBullet}>
            FriendsBlog utilized React, MongoDB Atlas, Apollo, GraphQL,
            Font-Awesome, NPM Packages, Vite Config.
          </p>
          <p className={styles.fancyBullet}>
            Refer to the{" "}
            <a href="https://github.com/PaulRusz/FriendsBlog">FriendsBlog</a>{" "}
            GitHub for details on my contributions.
          </p>

          <div className={styles.divider2}></div>
          <div className={styles.projectDivider}>
            <ul>
              <li>
                <a
                  className={styles.link}
                  href="https://paulrusz.github.io/Group-Project1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Workout Tracker 1.0
                  <br />
                  <br />
                  <Image
                    src="/Workout1.0.png"
                    alt="Workout App 1.0"
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </li>
            </ul>
          </div>
          <p className={styles.fancyBullet}>
            Workout Tracker 1.0 is a web-based application designed to help
            users plan, track, and manage their workouts.
          </p>
          <p className={styles.fancyBullet}>
            Workout Tracker 1.0 utilized HTML, CSS, JavaScript, Bootstrap,
            Day.js, WGER API, Quotable API.
          </p>
          <p className={styles.fancyBullet}>
            Refer to{" "}
            <a href="https://github.com/PaulRusz/Group-Project1">
              Workout Tracker 1.0
            </a>{" "}
            GitHub for details on my contributions.
          </p>

          <div className={styles.divider2}></div>
          <div className={styles.projectDivider}>
            <ul>
              <li>
                <a
                  className={styles.link}
                  href="https://workout-tracker-3b0i.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Workout Tracker 2.0
                  <br />
                  <br />
                  <Image
                    src="/Workout2.png"
                    alt="Workout App 2.0"
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </li>
            </ul>
          </div>
          <p className={styles.fancyBullet}>
            Workout Tracker 2.0 is an improved version of 1.0 with new features
            including user authentication, improved workout planner,
            customizable plans, calendar integration, and a more responsive
            design.
          </p>
          <p className={styles.fancyBullet}>
            Workout Tracker 2.0 utilized HTML, CSS, JavaScript (with backend
            functionality and dynamic content generation), Bootstrap, Day.js,
            WGER API, Quotable API.
          </p>
          <p className={styles.fancyBullet}>
            Refer to{" "}
            <a href="https://github.com/emsim11/Group-Project2">
              Workout Tracker 2.0
            </a>{" "}
            GitHub for details on my contributions.
          </p>

          {/* SPACE FOR FUTURE PROJECTS TO GO HERE */}
        </div>
      </motion.div>

      {/* Optionally include Footer if needed */}
      {/* <Footer /> */}
    </>
  );
}
