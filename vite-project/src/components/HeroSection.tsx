import styles from "../components/styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1>Clover Hill Golf Course</h1>
        <p>Your best round awaits you.</p>
      </div>
    </div>
  );
};

export default HeroSection;
