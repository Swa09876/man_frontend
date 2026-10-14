import React from "react";
import Link from "next/link";
import styles from "./News.module.css";

export const metadata = {
  title: "Latest News, Press Releases & Announcements - Shri Omkareshwar",
  description: "Official press releases, festival updates, administrative circulars, and announcements from Shri Omkareshwar Mandir Trust.",
};

const NEWS_ARTICLES = [
  {
    id: "news-1",
    title: "Ayushman Vay Vandana Scheme Health Welfare Camp Held at Temple Trust",
    date: "October 08, 2026",
    category: "Devotee & Staff Welfare",
    summary:
      "Under the guidance of SDM Punasa and Managing Trustee Rao Pushpendra Singh, a specialized medical verification camp was conducted for issuance of Ayushman Vay Vandana cards for all temple employees, priests, and outsourced security personnel.",
    content:
      "The camp witnessed participation of over 250 beneficiaries who received health checkups and smart health cards ensuring comprehensive cashless healthcare coverage.",
  },
  {
    id: "news-2",
    title: "Temple Trust Reviews Arrangements to Improve Devotee Crowd Management",
    date: "September 28, 2026",
    category: "Administration & Infrastructure",
    summary:
      "A high-level review meeting was held at the Mandir Administrative Office with representatives from the Police Department, Nagar Parishad, and Priest Council to assess crowd control channels along Nagar Ghat.",
    content:
      "Decisions taken include installation of additional misting water coolers in holding sheds, commissioning of new automated ticket verification turnstiles at the VIP Shighra gate, and deployment of 40 additional volunteer marshals.",
  },
  {
    id: "news-3",
    title: "Special Cleanliness Drive Organised at Gaumukh Ghat on Gandhi Jayanti",
    date: "October 02, 2026",
    category: "Swachhata & River Cleanliness",
    summary:
      "Public representatives, local boat operators, and devotees joined temple sanitation teams for a 4-hour riverbed cleaning drive along Gaumukh and Koti Teerth ghats.",
    content:
      "A collective pledge was administered to eliminate single-use plastics from Mandhata island and preserve the holy waters of Maa Narmada in pristine condition.",
  },
];

export default function LatestNewsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/media/news">Media</Link>
            <span>/</span>
            <span className={styles.current}>Latest News (LatestNews.aspx)</span>
          </div>
          <h1 className={styles.title}>Latest News & Press Releases</h1>
          <p className={styles.subtitle}>
            Official announcements, administrative circulars, festival schedules, and developmental news from Shri Omkareshwar Mandir Trust.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.newsGrid}>
          {NEWS_ARTICLES.map((article) => (
            <article key={article.id} className={styles.newsCard}>
              <div className={styles.cardHeader}>
                <span className={styles.categoryBadge}>{article.category}</span>
                <span className={styles.dateTag}>📅 {article.date}</span>
              </div>
              <h2 className={styles.newsTitle}>{article.title}</h2>
              <p className={styles.summary}>{article.summary}</p>
              <div className={styles.body}>{article.content}</div>
              <div className={styles.cardFooter}>
                <span className={styles.pressSource}>Issued by: Office of Chief Executive Officer, Mandir Trust</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
