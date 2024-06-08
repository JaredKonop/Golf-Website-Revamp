import React from "react";
import styles from "../components/styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <div>
        <h1>Clover Hill Golf Course</h1>
        <div className={styles.slogan}>
          <p>
            From Tee to Green: Crafting Memorable Momements, One Swing at a Time
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
