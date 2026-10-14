import React from "react";
import Link from "next/link";
import styles from "./Downloads.module.css";

export const metadata = {
  title: "Official Downloads - Stotras, Panchang & Trust Reports - Shri Omkareshwar",
  description: "Download sacred Sanskrit hymns, Shiva Mahimna Stotra, official Parva Panchang, trust audit reports, and pilgrim maps.",
};

const DOWNLOAD_ITEMS = [
  {
    id: "d1",
    category: "Sacred Stotras & Hymns",
    title: "Shri Omkareshwar Jyotirlinga Ashtakam (Sanskrit & Hindi)",
    fileSize: "1.2 MB PDF",
    description: "Eight divine verses praising the Jyotirlinga at the Narmada-Kaveri confluence with Hindi poetic translation.",
  },
  {
    id: "d2",
    category: "Sacred Stotras & Hymns",
    title: "Shri Shiva Mahimna Stotram (Original Text & Meaning)",
    fileSize: "2.4 MB PDF",
    description: "The hymn composed by Pushpadanta Gandharva, inscribed on the ancient stone walls of Mamleshwar temple.",
  },
  {
    id: "d3",
    category: "Panchang & Calendars",
    title: "Official Parva Panchang & Festival Calendar 2026",
    fileSize: "3.8 MB PDF",
    description: "Complete Hindu religious calendar with Shravan Maas dates, Pradosh Vrats, and Masik Shivratri timings.",
  },
  {
    id: "d4",
    category: "Pilgrim Maps & Guides",
    title: "Mandhata Island Parikrama Route & Pilgrim Map",
    fileSize: "4.5 MB PDF",
    description: "High-resolution topographical map showing walking trails, temples, ghats, drinking water points, and restrooms.",
  },
  {
    id: "d5",
    category: "Administration & Accounts",
    title: "Section 80G Approval Certificate (URN: AAATS3291PF20214)",
    fileSize: "850 KB PDF",
    description: "Official Income Tax exemption registration certificate issued by Commissioner of Income Tax (Exemption).",
  },
  {
    id: "d6",
    category: "Administration & Accounts",
    title: "Temple Trust Annual Audited Financial Statements",
    fileSize: "5.1 MB PDF",
    description: "Statutory audited balance sheet, income & expenditure account, and public seva utilization report.",
  },
];

export default function DownloadsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/media/news">Media</Link>
            <span>/</span>
            <span className={styles.current}>Downloads (Downloads.aspx)</span>
          </div>
          <h1 className={styles.title}>Official Publications & Downloads</h1>
          <p className={styles.subtitle}>
            Sacred texts, audio stotras, pilgrimage trail maps, religious calendars, and public trust audit documentation.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.downloadsGrid}>
          {DOWNLOAD_ITEMS.map((item) => (
            <div key={item.id} className={styles.downloadCard}>
              <div className={styles.cardTop}>
                <span className={styles.categoryBadge}>{item.category}</span>
                <span className={styles.fileSize}>{item.fileSize}</span>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>

              <div className={styles.cardAction}>
                <button
                  type="button"
                  onClick={() => alert(`Starting download for: ${item.title}`)}
                  className={styles.downloadBtn}
                >
                  📥 Download PDF File
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
