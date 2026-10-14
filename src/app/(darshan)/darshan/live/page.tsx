import React from "react";
import Link from "next/link";
import styles from "./LiveDarshan.module.css";

export const metadata = {
  title: "Live Darshan 24x7 - Shri Omkareshwar Jyotirlinga Official Stream",
  description: "Watch official 24x7 live darshan streaming directly from the Garbhagriha of Shri Omkareshwar Jyotirlinga.",
};

const SCHEDULE_ITEMS = [
  { time: "04:30 AM - 05:00 AM", ritual: "Mangal Aarti & Bhog", note: "Opening worship with Vedic hymns" },
  { time: "05:00 AM - 12:20 PM", ritual: "Mangal Darshan & Abhishek", note: "Live Abhishek darshan" },
  { time: "12:20 PM - 01:15 PM", ritual: "Madhyanha Bhog (Closed)", note: "Rajbhog offering ceremony" },
  { time: "01:15 PM - 04:00 PM", ritual: "Madhyanha Darshan", note: "Afternoon sanctum stream" },
  { time: "04:00 PM - 04:30 PM", ritual: "Sayamkalin Shringar", note: "Royal floral decoration" },
  { time: "08:30 PM - 09:30 PM", ritual: "Shayan Aarti & Bed Offering", note: "Final night prayer & closing" },
];

export default function LiveDarshanPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/darshan/live">Darshan</Link>
            <span>/</span>
            <span className={styles.current}>Live Darshan (LiveDarshan.aspx)</span>
          </div>
          <h1 className={styles.title}>24x7 Official Live Sanctum Stream</h1>
          <p className={styles.subtitle}>
            Continuous direct broadcast from the Garbhagriha of Shri Omkareshwar Jyotirlinga. Experience the living divine presence of Mahadev from anywhere in the world.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.streamLayout}>
          {/* Video Player */}
          <div className={styles.videoCard}>
            <div className={styles.streamHeader}>
              <div className={styles.liveIndicator}>
                <span className={styles.redDot}></span> LIVE BROADCAST
              </div>
              <span className={styles.streamChannel}>Official YouTube Feed • 1080p HD</span>
            </div>

            <div className={styles.playerWrapper}>
              <iframe
                src="https://www.youtube.com/embed/live_stream?channel=UCsIZ3yYwCW4316fPX3V-4lg&autoplay=1"
                title="Shri Omkareshwar Jyotirlinga Live Darshan"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.iframe}
              ></iframe>
            </div>

            <div className={styles.streamFooter}>
              <div className={styles.mantraBar}>
                ॥ ॐ नमः शिवाय ॥ कावेरी नर्मदयोः पवित्रे समागमे सज्जनतारणाय । प्रासादमासाद्य वसन्तमीशमोङ्कारमीशानमहं नमामि ॥
              </div>
              <div className={styles.actionButtons}>
                <Link href="/booking/puja" className={styles.pujanBtn}>
                  Book Online Ritual / E-Aradhana
                </Link>
                <Link href="/donation" className={styles.donateBtn}>
                  Offer Seva Donation
                </Link>
              </div>
            </div>
          </div>

          {/* Schedule Sidebar */}
          <div className={styles.scheduleCard}>
            <h3 className={styles.schedTitle}>Today's Live Aarti Timetable</h3>
            <p className={styles.schedSub}>Indian Standard Time (IST)</p>

            <div className={styles.timeline}>
              {SCHEDULE_ITEMS.map((item, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineTime}>{item.time}</div>
                  <div className={styles.timelineContent}>
                    <strong>{item.ritual}</strong>
                    <span>{item.note}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.helpBox}>
              <strong>Experiencing stream buffering?</strong>
              <p>During heavy peak festivals, connect directly via our official YouTube Channel (@shriomkareshwartemple).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
