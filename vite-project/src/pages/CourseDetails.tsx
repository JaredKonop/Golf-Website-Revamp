import React from "react";
import styles from "../components/styles/CourseDetails.module.css";
import sc from "../assets/Scorecard.jpg";

const CourseDetails: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Course Details</h1>
        <h2>Scorecard</h2>
        <img src={sc}></img>
        <h2>History</h2>
        <p>
          The first round of golf at Clover Hill Golf Course happened on April
          13, 1990. Since that day, we have worked our hardest to maintain a
          standard of excellence in Pittsburgh golf. We do whatever it takes to
          provide a high-quality experience for our most valuable asset -- our
          customers. <br></br>
          <br></br>
          Clover Hill is a challenging, 9-hole Pittsburgh golf course,
          maintained and open all year round, weather and course conditions
          permitting. Clover Hill is not a long course, but it provides a unique
          test of golf skills. It uses sand traps, rolling greens, water hazards
          and other obstacles, emphasizing accuracy rather than distance. We
          accept tee times, and they must be made no later than an hour before
          the scheduled start. Golfers can make tee times anytime except during
          scheduled leagues. We also host small outings, parties, reunions and
          special events by calling Jim Huff at 412-364-2447.
          <br></br>
          <br></br>
          Clover Hill combines quality conditions, friendly service and customer
          appreciation. The end result is the finest Pittsburgh golf option.
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;
