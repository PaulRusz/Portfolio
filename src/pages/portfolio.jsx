import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/portfolio.module.scss";
import FriendsBlog from "../assets/images/FriendsBlog.png";
import Workout1 from "../assets/images/Workout1.0.png";
import Workout2 from "../assets/images/Workout2.png";
import RateThis from "../assets/images/RateThis.png";
import TM from "../assets/images/TM.png";

export default function Portfolio() {
  return (
    <>
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

          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>
              <a
                className={styles.link}
                href="https://friendsblog.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FriendsBlog
                <br />
                <br />
                <img
                  src={process.env.PUBLIC_URL + FriendsBlog}
                  alt="Friends Blog"
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
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
                <a href="https://github.com/PaulRusz/FriendsBlog">
                  FriendsBlog
                </a>{" "}
                GitHub for details on my contributions.
              </p>
            </div>

            <div className={styles.projectItem}>
              <a
                className={styles.link}
                href="https://paulrusz.github.io/Group-Project1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Workout Tracker 1.0
                <br />
                <br />
                <img
                  src={process.env.PUBLIC_URL + Workout1}
                  alt="Workout App 1.0"
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
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
            </div>

            <div className={styles.projectItem}>
              <a
                className={styles.link}
                href="https://workout-tracker-3b0i.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Workout Tracker 2.0
                <br />
                <br />
                <img
                  src={process.env.PUBLIC_URL + Workout2}
                  alt="Workout App 2.0"
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
              <p className={styles.fancyBullet}>
                Workout Tracker 2.0 is an improved version of 1.0 with new
                features including user authentication, improved workout
                planner,
                <br></br>
                customizable plans, calendar integration, and a more responsive
                design.
              </p>
              <p className={styles.fancyBullet}>
                Workout Tracker 2.0 utilized HTML, CSS, JavaScript (with backend
                functionality and dynamic content generation),
                <br></br> Bootstrap, Day.js, WGER API, Quotable API.
              </p>
              <p className={styles.fancyBullet}>
                Refer to{" "}
                <a href="https://github.com/emsim11/Group-Project2">
                  Workout Tracker 2.0
                </a>{" "}
                GitHub for details on my contributions.
              </p>
            </div>

            <div className={styles.projectItem}>
              <a
                className={styles.link}
                href="https://ratethis.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RateThis
                <br />
                <br />
                <img
                  src={process.env.PUBLIC_URL + RateThis}
                  alt="RateThis"
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
              <p className={styles.fancyBullet}>
                ** WORK IN PROGRESS **
                <br></br>
                This web application allows users to create a personalized
                profile, log in, and rate various items, such as movies, TV
                shows, restaurants, and more. The platform serves as a dynamic
                and convenient reference for users to track their ratings over
                time. Designed with user-friendliness and versatility in mind,
                it offers a seamless way to document and revisit personal
                preferences, making it a perfect tool for movie buffs, foodies,
                and anyone who loves keeping tabs on their favorites.
              </p>
              <p className={styles.fancyBullet}>
                RateThis uses JavaScript, SCSS,
                <br></br>
              </p>
              <p className={styles.fancyBullet}>
                Refer to{" "}
                <a href="https://github.com/PaulRusz/rating-application">
                  RateThis
                </a>{" "}
                GitHub for details.
              </p>
            </div>

            <div className={styles.projectItem}>
              <a
                className={styles.link}
                href="https://travismcdermott.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Political Portfolio
                <br />
                <br />
                <img
                  src={process.env.PUBLIC_URL + TM}
                  alt="Political Portfolio"
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
              <p className={styles.fancyBullet}>
                I designed and developed a political website for a local
                politician to connect with constituents. The site enables
                residents to explore his views, contact him directly, make
                donations, and access city resources. With a user-friendly
                design and dynamic functionality, this platform serves as an
                interactive hub to engage with the community and provide
                essential information.
              </p>
              <p className={styles.fancyBullet}>
                The political portfolio uses Next.js, SCSS
                <br></br>
              </p>
              <p className={styles.fancyBullet}>
                Refer to{" "}
                <a href="https://github.com/PaulRusz/travisportfolio">
                  Political Portfolio
                </a>{" "}
                GitHub for details.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
