import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>&copy; Paul Ruszkay</p>
    </div>
  );
}
