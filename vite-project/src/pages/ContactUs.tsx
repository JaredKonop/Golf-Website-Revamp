import React from "react";
import styles from "../components/styles/ContactUs.module.css"; // Import CSS module for custom styling
import LeafletMap from "../components/LeafletMap";

const ContactUs: React.FC = () => {
  return (
    <div className={styles.contactUsContainer}>
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
          utmost importance to us. Please use the{" "}
          <a
            href="https://www.franklinparkborough.us/FormCenter/Clover-Hill-Golf-Course-6/Contact-Clover-Hill-Golf-45"
            target="_blank"
            rel="noopener noreferrer"
          >
            Online Form
          </a>{" "}
          to request additional information about our course, services and
          promotions. We’d also like to encourage you to voice any concerns you
          may have and let us know how we’re doing in our efforts to provide the
          best facility we can possibly provide.
        </p>
      </div>
      <a
        href="https://www.google.com/maps/place/2200+Reis+Run+Rd,+McKnight,+PA+15237/@40.5631322,-80.0752258,17z/data=!4m6!3m5!1s0x88348af2f420989f:0x367e90f9cdd2dcc2!8m2!3d40.5631077!4d-80.0732946!16s%2Fg%2F11csdy2q19?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Directions</button>
      </a>
      <LeafletMap /> {/* Add the LeafletMap component here */}
    </div>
  );
};

export default ContactUs;
