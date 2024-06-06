import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link component
import styles from "../components/styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <span className={styles.navTitle}>Clover Hill Golf</span>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          <li className={styles.navItem}>
            {/* Update anchor tags to Link components */}
            <Link to="/" className={styles.navLinks}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/course-details" className={styles.navLinks}>
              Course Details
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/rates" className={styles.navLinks}>
              Rates
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/book-tee-time" className={styles.navLinks}>
              Book a Tee Time
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact-us" className={styles.navLinks}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
