"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_LEGAL_LINKS, TEMPLE_INFO } from "@/lib/constants";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Col 1: About Mandir */}
          <div className={styles.col}>
            <div className={styles.brandRow}>
              <span className={styles.omIcon}>ॐ</span>
              <h3 className={styles.colTitle}>Shri Omkareshwar</h3>
            </div>
            <p className={styles.aboutText}>
              Shri Omkareshwar Jyotirlinga is one of the 12 sacred Jyotirlingas of Bhagwan Shiva,
              situated on the holy island of Mandhata on the sacred banks of Maa Narmada.
            </p>
            <p className={styles.addressText}>
              📍 {TEMPLE_INFO.address}
            </p>
            <div className={styles.helplineBox}>
              <span className={styles.helplineLabel}>24x7 Mandir Helpline:</span>
              <a href={`tel:${TEMPLE_INFO.helpline}`} className={styles.helplineNumber}>
                📞 {TEMPLE_INFO.helpline}
              </a>
            </div>
          </div>

          {/* Col 2: Important Portals & Services */}
          <div className={styles.col}>
            <h4 className={styles.sectionHeading}>Devotee Services</h4>
            <ul className={styles.linkList}>
              <li><Link href="/darshan/vishesh-darshan">Shighra Darshan (₹300)</Link></li>
              <li><Link href="/booking/availability">Ticket Availability Check</Link></li>
              <li><Link href="/services/abhishek-puja">Abhishek & Rudrabhishek</Link></li>
              <li><Link href="/booking/vishramalaya">Vishramalaya Stay</Link></li>
              <li><Link href="/prasad/laddu-mahaprasad">Laddu Mahaprasad</Link></li>
              <li><Link href="/donation">Donate for Holy Cause</Link></li>
              <li><Link href="/donation/claim-80g">Claim 80G Tax Exemption</Link></li>
            </ul>
          </div>

          {/* Col 3: Legal & Temple Policies */}
          <div className={styles.col}>
            <h4 className={styles.sectionHeading}>Legal & Policies</h4>
            <ul className={styles.linkList}>
              {FOOTER_LEGAL_LINKS.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links & Contact */}
          <div className={styles.col}>
            <h4 className={styles.sectionHeading}>Mandir Administration</h4>
            <ul className={styles.linkList}>
              {FOOTER_LEGAL_LINKS.slice(6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li><Link href="/contact">Contact Office</Link></li>
              <li><Link href="/feedback">Devotee Feedback</Link></li>
            </ul>
            <div className={styles.appDownload}>
              <a
                href="https://play.google.com/store/apps/details?id=com.shriomkareshwar"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.playStoreBtn}
              >
                <span>GET IT ON</span>
                <strong>Google Play</strong>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomFlex}>
            <p>© 2026 Shri Omkareshwar Mandir Trust. All Rights Reserved.</p>
            <p className={styles.devotionNote}>Devotion Without Distance • Har Har Mahadev</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
