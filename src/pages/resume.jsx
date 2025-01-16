import styles from "../styles/resume.module.scss";
import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      className="page1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.resumeContainer}>
        <h1>Resume</h1>
        <div className={styles.divider}></div>
        <div className={styles.resumeContent}>
          <a
            className={styles.resumeButton}
            href="https://drive.google.com/uc?id=15KpFnZcJfkW-7DIV6zZtgv64DAU6CIl2&export=download"
            download="Resume.pdf"
          >
            Download my CV
          </a>

          <div className={styles.backgroundContainer}>
            <p>
              {/* With a strong foundation in front-end and back-end development,  */}
              I strive to deliver seamless and engaging digital experiences.
            </p>
            <div className={styles.divider3}></div>
            <p>
              {/* My ultimate goal is to continue honing my skills, collaborating
              with talented individuals, and contributing to cutting-edge
              projects that make a positive impact on society. */}
              My ultimate goal is to contribute to cutting-edge projects that
              make a positive impact on our world.
            </p>
            <br />
            <br />
            <div className={styles.divider3}></div>
            <h2>Let's build something.</h2>
          </div>
        </div>

        <div className={styles.divider2}></div>

        <div className={styles.resumeContainer2}>
          <div className={styles.resumeColumn}>
            <h2>Technical Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className={styles.divider}></div>

            <h2>Frontend Tech</h2>
            <ul>
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>Responsive Web Design</li>
            </ul>
            <div className={styles.divider}></div>

            <h2>BackEnd Tech</h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>

          <div className={styles.resumeColumn}>
            <h2>Deployment & Hosting</h2>
            <ul>
              <li>Heroku</li>
              <li>Netlify</li>
            </ul>
            <div className={styles.divider}></div>

            <h2>Databases</h2>
            <ul>
              <li>SQL</li>
              <li>NoSQL</li>
            </ul>
            <div className={styles.divider}></div>

            <h2>Development Tools</h2>
            <ul>
              <li>Visual Studio Code</li>
            </ul>
            <div className={styles.divider}></div>

            <h2>Other Skills</h2>
            <ul>
              <li>Problem-Solving</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
