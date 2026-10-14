import React from "react";
import Link from "next/link";
import styles from "./OmSandesh.module.css";

export const metadata = {
  title: "Omkar Sandesh Blog - Sacred Stories, Legends & Spiritual Knowledge",
  description: "Official spiritual blog of Shri Omkareshwar Mandir Trust featuring Puranic legends, saintly encounters, and scriptural wisdom.",
};

const BLOG_POSTS = [
  {
    id: "post-1",
    title: "The Legend of King Mandhata and the Emergence of the Fourth Jyotirlinga",
    date: "October 05, 2026",
    category: "Puranic Legends",
    excerpt:
      "How Emperor Mandhata of the Ikshvaku dynasty performed millennia of intense tapasya on this island, moving Lord Shiva to manifest as the self-born Jyotirlinga.",
    readTime: "5 Min Read",
  },
  {
    id: "post-2",
    title: "The Sacred Mystery of the Night Chaupar Board at Shayan Aarti",
    date: "September 24, 2026",
    category: "Mandir Traditions",
    excerpt:
      "Why temple priests arrange an ivory dice board and bed of fresh flowers every night, and the timeless mystery of the displaced game pieces discovered at dawn.",
    readTime: "4 Min Read",
  },
  {
    id: "post-3",
    title: "Adi Shankaracharya and the Revival of Advaita Vedanta in the Omkareshwar Cave",
    date: "September 12, 2026",
    category: "Saints & History",
    excerpt:
      "Tracing the historic meeting between the boy-monk Shankara and his guru Govinda Bhagavatpada in the sacred riverbank cave beneath Mandhata hill.",
    readTime: "7 Min Read",
  },
  {
    id: "post-4",
    title: "Kankad Kankad Shankar: The Spiritual Science of Narmadeshwar Shivlings",
    date: "August 30, 2026",
    category: "Spiritual Science",
    excerpt:
      "Why every river pebble sculpted by the rapid eddies of Maa Narmada is venerated as a naturally consecrated Swayambhu Lingam requiring no Pranapratishtha.",
    readTime: "6 Min Read",
  },
];

export default function OmSandeshPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/media/news">Media</Link>
            <span>/</span>
            <span className={styles.current}>Omkar Sandesh (Blog.aspx)</span>
          </div>
          <h1 className={styles.title}>Omkar Sandesh - Spiritual Insights & Lore</h1>
          <p className={styles.subtitle}>
            Information, stories, and sacred proverbs related to Shri Omkareshwar Jyotirlinga, river Narmada, and Sanatana Dharma.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.blogGrid}>
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.postHeader}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.readTime}>⏱️ {post.readTime}</span>
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.postFooter}>
                <span className={styles.date}>📅 {post.date}</span>
                <span className={styles.readMore}>Read Full Story →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
