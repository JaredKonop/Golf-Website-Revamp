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
      const closeTime = parseInt(sClose, 10) + military;
      setMClose(closeTime);

      const sOpen = open.replace(/\D/g, "");
      let openTime = parseInt(sOpen, 10);
      if (openTime < 1000) {
        openTime = parseInt("0" + sOpen, 10);
      }
      setMOpen(openTime);

      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = parseInt(
        `${hour < 10 ? "0" : ""}${hour}${minute < 10 ? "0" : ""}${minute}`,
        10
      );

      if (currentTime >= openTime && currentTime < closeTime) {
        setStatus("Yes, We're Open");
      } else {
        setStatus("Sorry, We're Closed");
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
      <div
        className={status === "Yes, We're Open" ? styles.open : styles.closed}
      >
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
