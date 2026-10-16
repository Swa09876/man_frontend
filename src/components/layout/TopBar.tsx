"use client";

import React from "react";
import Link from "next/link";
import styles from "./TopBar.module.css";

export const TopBar: React.FC = () => {
  return (
    <>
      {/* Official Welcome & Services Marquee Ribbon (matching official temple portals) */}
      <div className={styles.welcomeBannerStrip}>
        <div className={styles.marqueeText}>
          <span>
            Shri Omkareshwar Jyotirlinga Mandir Trust Welcomes You. All online services are now available — Online Donation (80G), Shighra Darshan Booking, Abhishek &amp; E-Pujan, Vishramalaya Accommodation, and Desi Ghee Laddu Mahaprasad Speed Post Delivery.
          </span>
        </div>
      </div>

      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              <strong>Home</strong>
            </Link>
            <span className={styles.divider}>|</span>
            <Link href="/booking/find-booking" className={styles.link}>
              <strong>Find Booking</strong>
            </Link>
            <span className={styles.divider}>|</span>
            <Link href="/booking/ticket-reprint" className={styles.link}>
              <strong>Ticket Reprint</strong>
            </Link>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.helplineNotice}>
              24x7 Helpline: <a href="tel:8989998686">8989998686</a>
            </div>
            <div id="google_translate_element" className={styles.translateWrapper}>
              {/* Google translate fallback */}
              <span className={styles.langBadge}>EN / HI</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
