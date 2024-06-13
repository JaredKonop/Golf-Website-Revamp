import React, { useEffect, useState } from "react";
import styles from "./styles/BusinessHours.module.css";

const BusinessHours: React.FC = () => {
  const [open, setOpen] = useState("7:30 am");
  const [close, setClose] = useState("6:00 pm");
  const [mOpen, setMOpen] = useState<number>(0);
  const [mClose, setMClose] = useState<number>(0);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const updateStatus = () => {
      const military = 1200;
      const sClose = close.replace(/\D/g, "");
      const mClose = parseInt(sClose, 10) + military;
      setMClose(mClose);
      const sOpen = open.replace(/\D/g, "");
      let mOpen = parseInt(sOpen, 10);
      if (mOpen < 1000) {
        mOpen = parseInt("0" + sOpen, 10);
      }
      setMOpen(mOpen);

      const now = new Date();
      const hour = now.getHours();
      let mHour;
      if (hour >= 10) {
        mHour = hour;
      } else {
        mHour = "0" + hour;
      }

      const minute = now.getMinutes();
      const time = parseInt(
        "" + mHour + (minute < 10 ? "0" + minute : minute),
        10
      );

      if (time >= mOpen && time < mClose) {
        setStatus("Yes, We're Open");
      } else {
        setStatus("Sorry We're Closed");
      }
    };

    // Initial update
    updateStatus();

    // Refresh every minute
    const interval = setInterval(updateStatus, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [open, close]);

  return (
    <div>
      <div className={status === "Yes, We're Open" ? "open" : "closed"}>
        <p className={styles.status}>{status}</p>
      </div>
      <p className={styles.date}>Open 7 Days a week</p>
      <p className={styles.hours}>
        {open} to {close}
      </p>
    </div>
  );
};

export default BusinessHours;
