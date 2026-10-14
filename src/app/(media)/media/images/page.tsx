import React from "react";
import Link from "next/link";
import styles from "./Images.module.css";

export const metadata = {
  title: "Official Photo Gallery - Shri Omkareshwar Jyotirlinga",
  description: "High-resolution photo gallery of Shri Omkareshwar temple spires, sanctum shringar, festivals, and river ghats.",
};

const CATEGORIES = [
  "All Photos",
  "Sanctum & Shringar",
  "Somwar Sawari & Palki",
  "Narmada River & Ghats",
  "Festivals & Parikrama",
];

const PHOTO_ITEMS = [
  { id: 1, title: "Grand Sanctum Shringar with Lotus Garlands", category: "Sanctum & Shringar" },
  { id: 2, title: "Royal Somwar Sawari Palki Procession", category: "Somwar Sawari & Palki" },
  { id: 3, title: "Evening Deepdaan & Maha Aarti at Nagar Ghat", category: "Narmada River & Ghats" },
  { id: 4, title: "Sunset over Mamleshwar Setu Suspension Bridge", category: "Narmada River & Ghats" },
  { id: 5, title: "Maha Shivratri Holy Abhishek Gathering", category: "Festivals & Parikrama" },
  { id: 6, title: "Aerial Panorama of Omkar-Shaped Mandhata Island", category: "Festivals & Parikrama" },
  { id: 7, title: "Ancient Carved Pillars of Sabhamandap", category: "Sanctum & Shringar" },
  { id: 8, title: "Nauka Vihar of Lord Shiva Across River Narmada", category: "Somwar Sawari & Palki" },
  { id: 9, title: "Panchamrit Abhishek Offering to Jyotirlinga", category: "Sanctum & Shringar" },
];

export default function ImageGalleryPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/media/news">Media</Link>
            <span>/</span>
            <span className={styles.current}>Photo Gallery (ImageGallaryNew.aspx)</span>
          </div>
          <h1 className={styles.title}>Official Temple Photo Gallery</h1>
          <p className={styles.subtitle}>
            A visual pilgrimage through the sacred shrines, festivals, and holy riverfront of Shri Omkareshwar Jyotirlinga.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        {/* Category Pills */}
        <div className={styles.filterPills}>
          {CATEGORIES.map((cat, i) => (
            <span key={i} className={`${styles.filterPill} ${i === 0 ? styles.filterActive : ""}`}>
              {cat}
            </span>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {PHOTO_ITEMS.map((item) => (
            <div key={item.id} className={styles.photoCard}>
              <div className={styles.placeholderImg}>
                <span className={styles.omBadge}>ॐ</span>
                <span className={styles.catTag}>{item.category}</span>
              </div>
              <div className={styles.photoCaption}>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
