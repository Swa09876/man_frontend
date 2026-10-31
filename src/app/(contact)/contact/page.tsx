import React from "react";
import Link from "next/link";
import styles from "./Contact.module.css";

export const metadata = {
  title: "Contact Us & Administrative Office - Shri Omkareshwar Jyotirlinga",
  description: "Official contact address, 24x7 helpline phone numbers, email addresses, and key department extensions for Shri Omkareshwar Mandir Trust.",
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span className={styles.current}>Contact Us (ContactUs.aspx)</span>
          </div>
          <h1 className={styles.title}>Contact Shri Omkareshwar Mandir Trust</h1>
          <p className={styles.subtitle}>
            Official contact points for devotee inquiries, special ritual scheduling, donation assistance, and administrative correspondence.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.contactGrid}>
          {/* Address & Helpline Card */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>🛕</span>
              <h3>Temple Trust Head Office</h3>
            </div>
            <div className={styles.cardContent}>
              <p>
                <strong>Shri Omkareshwar Mandir Trust</strong>
                <br />
                Mandhata Island, Post Omkareshwar,
                <br />
                Tehsil Punasa, District Khandwa,
                <br />
                Madhya Pradesh - 450535, India
              </p>

              <div className={styles.contactLine}>
                <span className={styles.label}>📞 24x7 Control Room:</span>
                <a href="tel:8770473325">8770473325</a>
              </div>
              <div className={styles.contactLine}>
                <span className={styles.label}>✉️ Official Email:</span>
                <a href="mailto:info@shriomkareshwar.org">info@shriomkareshwar.org</a>
              </div>
              <div className={styles.contactLine}>
                <span className={styles.label}>🌐 Official Website:</span>
                <a href="https://shriomkareshwar.org">https://shriomkareshwar.org</a>
              </div>
            </div>
          </div>

          {/* Department Extensions */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>📋</span>
              <h3>Department Directory</h3>
            </div>
            <div className={styles.deptList}>
              <div className={styles.deptItem}>
                <div>
                  <strong>Chief Executive Officer / SDM Office</strong>
                  <span>Administration & Governance</span>
                </div>
                <span className={styles.phoneTag}>07280-271228</span>
              </div>
              <div className={styles.deptItem}>
                <div>
                  <strong>Puja Coordination & Priest Office</strong>
                  <span>Abhishek, Havan & Sankalpam</span>
                </div>
                <span className={styles.phoneTag}>8770473325 (Ext 1)</span>
              </div>
              <div className={styles.deptItem}>
                <div>
                  <strong>Accounts & 80G Tax Exemption Cell</strong>
                  <span>Donation receipts & IT exemptions</span>
                </div>
                <span className={styles.phoneTag}>8770473325 (Ext 2)</span>
              </div>
              <div className={styles.deptItem}>
                <div>
                  <strong>Mahaprasad Dispatch (India Post)</strong>
                  <span>Speed Post tracking inquiries</span>
                </div>
                <span className={styles.phoneTag}>8770473325 (Ext 3)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action Banner */}
        <div className={styles.actionBanner}>
          <div>
            <h3>Have a suggestion or grievance to submit?</h3>
            <p>Direct your query to the Chief Executive Officer via the online Devotee Message portal.</p>
          </div>
          <Link href="/feedback" className={styles.feedbackBtn}>
            Submit Devotee Feedback →
          </Link>
        </div>
      </div>
    </div>
  );
}
