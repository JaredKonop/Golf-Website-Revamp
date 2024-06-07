import React from "react";
import styles from "../components/styles/Footer.module.css"; // Import CSS module for styling

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.leftFooter}>
        Website by:{" "}
        <a
          href="https://github.com/Jared-Konop"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jared Konop
        </a>
      </p>
      <div className={styles.rightFooter}>
        <p>(412) 364-2447</p>
        <p>2200 Reis Run Rd, Pittsburgh, PA 15237</p>
      </div>
    </footer>
  );
};

export default Footer;
