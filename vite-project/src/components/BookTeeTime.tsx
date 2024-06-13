import React from "react";
import styles from "../components/styles/Home.module.css";

const BookTeeTime: React.FC = () => {
  return (
    <div>
      <h1 className={styles.button}>Book a Tee Time</h1>
      <p>Here you can book your tee time.</p>
    </div>
  );
};

export default BookTeeTime;
