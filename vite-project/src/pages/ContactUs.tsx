import React from "react";
import styles from "../components/styles/ContactUs.module.css"; // Import CSS module for custom styling

const ContactUs: React.FC = () => {
  return (
    <div className={styles.contactUsContainer}>
      {" "}
      {/* Apply custom container */}
      <div className={styles.section}>
        <h2>Book a Tee Time</h2>
        <p>
          Call us at <strong>412-364-2447</strong> to schedule your tee time.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Leave A Message</h2>
        <p>
          We want to hear from you. Your questions and concerns are of the
          utmost importance to us. Please use the Online Form to request
          additional information about our course, services and promotions. We’d
          also like to encourage you to voice any concerns you may have and let
          us know how we’re doing in our efforts to provide the best facility we
          can possibly provide.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
