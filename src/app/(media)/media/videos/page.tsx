import React from "react";
import Link from "next/link";
import styles from "./Videos.module.css";

export const metadata = {
  title: "Official Video Gallery & Live Aarti Recordings - Shri Omkareshwar",
  description: "Watch authentic video recordings of daily Aartis, Somwar Sawari boat procession, Maha Shivratri abhishek, and Mandhata Parikrama.",
};

const VIDEOS = [
  {
    id: "v1",
    title: "Maha Shivratri All-Night Abhishek & Aarti",
    duration: "18:45",
    category: "Festivals",
    description: "Sacred night char-prahar abhishek performed by temple Acharyas in the Sabhamandap.",
  },
  {
    id: "v2",
    title: "Royal Somwar Sawari Palki & Nauka Vihar",
    duration: "12:20",
    category: "Processions",
    description: "Bhagwan Omkareshwar's weekly Monday palanquin procession across holy river Narmada.",
  },
  {
    id: "v3",
    title: "Evening Narmada Maha Aarti at Nagar Ghat",
    duration: "15:10",
    category: "River Aartis",
    description: "Majestic brass multi-tiered deepaarti offered to Maa Narmada by priests and devotees.",
  },
  {
    id: "v4",
    title: "Omkar Parvat Parikrama & Heritage Trail Guide",
    duration: "24:30",
    category: "Parikrama",
    description: "Visual journey traversing the 6.5 km walking circuit around the holy Omkara-shaped island.",
  },
  {
    id: "v5",
    title: "Sayamkalin Shringar & Floral Adornment Ceremony",
    duration: "09:15",
    category: "Sanctum Rituals",
    description: "Intimate view of priests adorning the holy Jyotirlinga with lotus blossoms and chandan.",
  },
  {
    id: "v6",
    title: "Shayan Aarti & The Mystery of Chaupar Game",
    duration: "11:40",
    category: "Sanctum Rituals",
    description: "Closing evening prayers and preparation of the divine bed and silver dice board.",
  },
];

export default function VideoGalleryPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/media/news">Media</Link>
            <span>/</span>
            <span className={styles.current}>Video Gallery (VideoGallary.aspx)</span>
          </div>
          <h1 className={styles.title}>Official Video Gallery</h1>
          <p className={styles.subtitle}>
            Experience the divine music, aartis, festive processions, and heritage walks of Shri Omkareshwar Jyotirlinga.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.liveBanner}>
          <div className={styles.liveLeft}>
            <span className={styles.redBadge}>● LIVE NOW</span>
            <h3>Looking for continuous 24x7 live sanctum darshan?</h3>
            <p>Connect directly to our official YouTube Garbhagriha broadcast.</p>
          </div>
          <Link href="/darshan/live" className={styles.watchLiveBtn}>
            Watch Live Darshan →
          </Link>
        </div>

        <div className={styles.videoGrid}>
          {VIDEOS.map((vid) => (
            <div key={vid.id} className={styles.videoCard}>
              <div className={styles.thumbnailWrapper}>
                <div className={styles.playOverlay}>
                  <span className={styles.playIcon}>▶</span>
                </div>
                <span className={styles.durationTag}>{vid.duration}</span>
                <span className={styles.catBadge}>{vid.category}</span>
              </div>

              <div className={styles.videoDetails}>
                <h3>{vid.title}</h3>
                <p>{vid.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
