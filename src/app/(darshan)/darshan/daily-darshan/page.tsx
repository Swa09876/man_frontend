import React from "react";
import Link from "next/link";
import styles from "./DailyDarshan.module.css";

export const metadata = {
  title: "Today's Daily Darshan & Shringar Photographs - Shri Omkareshwar",
  description: "View daily morning Mangal Darshan, Madhyanha Bhog, and Sandhya Shringar photographs of Lord Omkareshwar Jyotirlinga.",
};

const DAILY_DARSHAN_PICS = [
  {
    session: "Mangal Aarti & Abhishek",
    time: "05:00 AM",
    description: "Sacred morning Narmada water and Panchamrit snan of the holy Jyotirlinga.",
    badge: "Morning Shringar",
  },
  {
    session: "Madhyanha Rajbhog",
    time: "12:20 PM",
    description: "Midday Rajbhog offering with fresh chandan paste and bilvapatra archana.",
    badge: "Midday Darshan",
  },
  {
    session: "Sayamkalin Royal Shringar",
    time: "04:30 PM",
    description: "Grand evening floral ornamentation adorned with silver chatra and lotus garlands.",
    badge: "Evening Shringar",
  },
  {
    session: "Shayan Aarti & Chaupar",
    time: "08:30 PM",
    description: "Night bed offering with fresh blossoms and silver dice board before sanctum closing.",
    badge: "Night Darshan",
  },
];

export default function DailyDarshanPage() {
  const currentDate = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/darshan/live">Darshan</Link>
            <span>/</span>
            <span className={styles.current}>Daily Darshan (DailyDarshan.aspx)</span>
          </div>
          <h1 className={styles.title}>Daily Darshan & Sacred Shringar Gallery</h1>
          <p className={styles.subtitle}>
            Photographs of today's four sacred aartis and ornamentation ceremonies taken directly by the temple priests.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.dateBanner}>
          <span className={styles.calendarIcon}>🗓️</span>
          <div>
            <strong>Today's Darshan Date:</strong> {currentDate}
          </div>
          <Link href="/darshan/live" className={styles.liveLink}>
            Watch Live 24x7 Broadcast →
          </Link>
        </div>

        <div className={styles.darshanGrid}>
          {DAILY_DARSHAN_PICS.map((pic, idx) => (
            <div key={idx} className={styles.darshanCard}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.omWatermark}>ॐ</span>
                <span className={styles.holyTag}>{pic.badge}</span>
              </div>

              <div className={styles.cardInfo}>
                <div className={styles.timeTag}>🕒 {pic.time}</div>
                <h3>{pic.session}</h3>
                <p>{pic.description}</p>
                <div className={styles.cardActions}>
                  <Link href="/booking/puja" className={styles.bookPujaBtn}>
                    Book Similar Seva
                  </Link>
                  <Link href="/prasad/laddu-mahaprasad" className={styles.prasadBtn}>
                    Order Mahaprasad
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
