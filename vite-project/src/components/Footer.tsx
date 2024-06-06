import React from "react";
import styles from "../components/styles/Footer.module.css"; // Import CSS module for styling

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>This is the footer of the website.</p>
    </footer>
  );
};

export default Footer;
