import React from "react";
import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>&copy; Paul Ruszkay</p>
    </div>
  );
}
