import React from "react";
import WeatherWidget from "../components/WeatherWidget"; // Adjust the import path as needed
import styles from "../components/styles/BookTeeTime.module.css"; // Import your CSS module for styling

const BookTeeTime: React.FC = () => {
  return (
    <div className={styles.bookTeeTimeContainer}>
      <div className={styles.section}>
        <h1>Book a Tee Time</h1>
        <h2>Tee Time</h2>
        <p>
          Call us at <strong>412-364-2447</strong> to schedule your tee time.
        </p>
      </div>
      <WeatherWidget /> {/* Add the WeatherWidget component here */}
    </div>
  );
};

export default BookTeeTime;
