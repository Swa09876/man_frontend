import React from "react";
import Link from "next/link";
import styles from "./vishesh-darshan.module.css";

export const metadata = {
  title: "Shighra Darshan (Vishesh Darshan) - Shri Omkareshwar Jyotirlinga",
  description: "Book VIP fast-track Shighra Darshan tickets online for Shri Omkareshwar Jyotirlinga. ₹300 per devotee.",
};

export default function VisheshDarshanPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerBanner}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/booking/darshan">Booking</Link>
            <span>/</span>
            <span className={styles.current}>Shighra Darshan</span>
          </div>
          <span className={styles.categoryBadge}>FAST-TRACK DEVOTIONAL ACCESS</span>
          <h1 className={styles.pageTitle}>Shighra Darshan (विशेष दर्शन)</h1>
          <p className={styles.pageSubtitle}>
            Dedicated fast-track queue access directly into the Sabhamandap of Bhagwan Omkareshwar Jyotirlinga.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.contentGrid}>
          {/* Main Info */}
          <div className={styles.mainInfo}>
            <div className={styles.infoCard}>
              <h2>About Shighra Darshan</h2>
              <p>
                To provide a peaceful, orderly, and spiritually fulfilling experience for elderly pilgrims, families with small children, and travelers on tight itineraries, the Shri Omkareshwar Mandir Trust provides the <strong>Shighra Darshan</strong> facility.
              </p>
              <p>
                A pass fee of <strong>₹300 per devotee</strong> grants priority entry through a dedicated queue line, minimizing waiting time while maintaining highest temple decorum.
              </p>

              <h3>Important Instructions & Sanctity Guidelines:</h3>
              <ul className={styles.rulesList}>
                <li>🎫 <strong>Entry Pass:</strong> Every devotee aged 5 years and above requires an individual ticket pass.</li>
                <li>⏰ <strong>Reporting Time:</strong> Please report at the Shighra Darshan entrance 15 minutes before your booked time slot.</li>
                <li>🪪 <strong>Photo Identity:</strong> Carrying the registered Aadhaar card, Passport, or Voter ID is mandatory during physical gate verification.</li>
                <li>👗 <strong>Dress Code:</strong> Devotees are requested to wear traditional, modest Indian attire (Dhoti/Kurta for men; Saree/Salwar Kameez for women).</li>
                <li>🚫 <strong>Sanctum Rules:</strong> As per Supreme Shaiva Agamas, direct touching of the sacred Jyotirlinga is strictly prohibited for all visitors.</li>
              </ul>
            </div>
          </div>

          {/* Booking Summary Box */}
          <div className={styles.actionCol}>
            <div className={styles.bookingBox}>
              <div className={styles.priceHeader}>
                <span className={styles.feeLabel}>Pass Tariff</span>
                <span className={styles.feeAmount}>₹300 <small>/ Devotee</small></span>
              </div>

              <div className={styles.slotsAvailable}>
                <h4>Daily Time Slots:</h4>
                <div className={styles.slotTag}>• 07:00 AM – 09:00 AM</div>
                <div className={styles.slotTag}>• 10:00 AM – 12:00 PM</div>
                <div className={styles.slotTag}>• 02:00 PM – 04:00 PM</div>
                <div className={styles.slotTag}>• 06:00 PM – 08:00 PM</div>
              </div>

              <Link href="/booking/darshan" className="btn-primary" style={{ width: "100%", marginTop: "16px" }}>
                Proceed to Book Shighra Darshan
              </Link>

              <div className={styles.utilityLinks}>
                <Link href="/booking/availability">Check Slot Availability</Link>
                <span>•</span>
                <Link href="/booking/ticket-reprint">Reprint Ticket</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
