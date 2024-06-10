import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/styles/Home.module.css";
import BusinessHours from "../components/BusinessHours";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/book-tee-time");
  };

  return (
    <div>
      <div>
        <h1>Clover Hill Golf Course</h1>
        <div className={styles.slogan}>
          <p>
            From Tee to Green: Crafting Memorable Moments, One Swing at a Time
          </p>
        </div>
      </div>
      <BusinessHours />
      <button className={styles.button} onClick={handleButtonClick}>
        Book a Tee Time
      </button>
    </div>
  );
};

export default Home;
