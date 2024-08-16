import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.scss";
import { FaUser, FaBriefcase, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function Navbar({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.container}>
      {" "}
      {children}
      <nav className={`${styles.navbar} ${showMenu ? styles.show : ""}`}>
        <div>
          <Link to="/">
            <p className={`${styles.logo} ${styles.logoButton}`}>PR</p>
          </Link>
        </div>

        <button
          className={styles.hamburgerMenu}
          onClick={() => setShowMenu(!showMenu)}
        >
          &#9776;
        </button>

        <ul className={`${styles.links} ${showMenu ? styles.showMenu : ""}`}>
          <li>
            <Link to="/about" className={styles.links}>
              <FaUser /> About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={styles.links}>
              <FaBriefcase /> Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.links}>
              <FaEnvelope /> Contact
            </Link>
          </li>
          <li>
            <Link to="/resume" className={styles.links}>
              <FaFileAlt /> Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
