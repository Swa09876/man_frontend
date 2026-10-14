import React from "react";
import Link from "next/link";
import styles from "./AbhishekPuja.module.css";

export const metadata = {
  title: "Abhishek Pujan - Shri Omkareshwar Jyotirlinga Official Website",
  description: "Book sacred Jalabhishek, Panchamrit Pujan, Laghu Rudrabhishek, and Maha Rudrabhishek rituals at Shri Omkareshwar Jyotirlinga.",
};

const PUJA_OPTIONS = [
  {
    id: "jalabhishek",
    name: "Jalabhishek (1 Brahmin)",
    sanskritName: "जलाभिषेक",
    price: 2100,
    brahmins: 1,
    duration: "45 Minutes",
    description: "Sacred stream of Narmada water and Panchamrit offering directly at the holy Jyotirlinga with Vedic mantra chanting.",
    includes: ["Sankalpam with Gotra & Name", "Panchamrit Abhishek", "Bilvapatra Offering", "Prasadam & Vibhuti"],
  },
  {
    id: "panchamrit",
    name: "Panchamrit Pujan (5 Brahmin)",
    sanskritName: "पंचामृत पूजन",
    price: 5100,
    brahmins: 5,
    duration: "1 Hour 30 Mins",
    description: "Elaborate puja performed by 5 Vedic archaks using cow milk, curd, pure ghee, honey, and raw sugar with Rudra Suktam.",
    includes: ["5 Vedic Brahmins Path", "Special Aarti & Bhog", "Silver Thali Aradhana", "Maha Prasad Box sent by post"],
  },
  {
    id: "laghu-rudra",
    name: "Laghu Rudrabhishek (11 Brahmin)",
    sanskritName: "लघु रुद्राभिषेक",
    price: 21000,
    brahmins: 11,
    duration: "3 Hours",
    description: "Grand Vedic Rudrabhishek chanting of Namakam & Chamakam 121 times by 11 scholarly priests in the inner Sabhamandap.",
    includes: ["11 Scholarly Acharyas", "Homa & Purnahuti", "Special Temple Shringar", "Prasadam & Shrimad Bhagavad Gita"],
  },
  {
    id: "maha-rudra",
    name: "Maha Rudrabhishek (11 Brahmins Special)",
    sanskritName: "महारुद्राभिषेक",
    price: 51000,
    brahmins: 11,
    duration: "Full Day Anushthan",
    description: "Highest level of Shiva worship performed for peace, prosperity, and spiritual liberation with 1,331 Rudra recitations.",
    includes: ["Full Day Ritual", "Grand Shringar of Lord Omkareshwar", "Maha Aarti Participation", "Exclusive Prasad & Silver Coin"],
  },
];

const SCHEDULE_HOURS = [
  { time: "04:30 AM - 05:00 AM", ritual: "Mangal Arti & Bhog", significance: "Opening worship with Vedic hymns" },
  { time: "05:00 AM - 12:20 PM", ritual: "Mangal Darshan & Abhishek", significance: "Main window for all Abhishek pujas" },
  { time: "12:20 PM - 01:15 PM", ritual: "Madhyanha Bhog", significance: "Rajbhog offering (Darshan closed)" },
  { time: "01:15 PM - 04:00 PM", ritual: "Madhyanha Darshan & Pujan", significance: "Afternoon Abhishek window" },
  { time: "04:00 PM - 04:30 PM", ritual: "Sayamkalin Shringar", significance: "Evening royal ornamentation" },
  { time: "08:30 PM - 09:30 PM", ritual: "Shayan Arti & Temple Closing", significance: "Final evening bell and rest prayer" },
];

export default function AbhishekPujaPage() {
  return (
    <div className={styles.container}>
      {/* Header Banner */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services/abhishek-puja">Services</Link>
            <span>/</span>
            <span className={styles.current}>Abhishek Pujan</span>
          </div>
          <h1 className={styles.title}>Abhishek Pujan of Shri Omkareshwar</h1>
          <p className={styles.subtitle}>
            Experience divine blessings through authentic Vedic rituals performed by designated temple priests at the sacred Narmada banks.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        {/* Important Rule Banner */}
        <div className={styles.timingBanner}>
          <div className={styles.clockIcon}>⏰</div>
          <div>
            <strong>Puja Timing Guidelines:</strong> The most auspicious time for Abhishek Puja is between <strong>6:00 AM and 4:00 PM</strong>.
            All Abhishek Pujas are conducted exclusively in the holy Sabhamandap and cannot be conducted after sunset in accordance with traditional Agamic Shastras.
          </div>
        </div>

        {/* Options Grid */}
        <h2 className={styles.sectionHeading}>Abhishek Pujan Options & Seva Fees</h2>
        <div className={styles.pujaGrid}>
          {PUJA_OPTIONS.map((puja) => (
            <div key={puja.id} className={styles.pujaCard}>
              <div className={styles.cardTop}>
                <span className={styles.sanskritName}>{puja.sanskritName}</span>
                <h3 className={styles.pujaTitle}>{puja.name}</h3>
                <div className={styles.priceTag}>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.amount}>{puja.price.toLocaleString("en-IN")}</span>
                  <span className={styles.perSeva}>/ sankalp</span>
                </div>
              </div>

              <div className={styles.metaRow}>
                <span className={styles.metaBadge}>👥 {puja.brahmins} Brahmin{puja.brahmins > 1 ? "s" : ""}</span>
                <span className={styles.metaBadge}>⏳ {puja.duration}</span>
              </div>

              <p className={styles.pujaDesc}>{puja.description}</p>

              <div className={styles.inclusionsList}>
                <h4>Seva Inclusions:</h4>
                <ul>
                  {puja.includes.map((inc, i) => (
                    <li key={i}>✓ {inc}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardActions}>
                <Link
                  href={`/booking/puja?category=Abhishek+Pooja&service=${encodeURIComponent(puja.name)}&price=${puja.price}`}
                  className={styles.bookBtn}
                >
                  Book Online Ritual
                </Link>
                <Link
                  href={`/services/e-aradhana?service=${encodeURIComponent(puja.name)}`}
                  className={styles.onlineAradhanaBtn}
                >
                  E-Aradhana (In Absentia)
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Table */}
        <div className={styles.scheduleCard}>
          <h2 className={styles.scheduleTitle}>Daily Puja & Aarti Timetable</h2>
          <div className={styles.tableResponsive}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Timings</th>
                  <th>Sacred Ritual</th>
                  <th>Spiritual Significance</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE_HOURS.map((sch, i) => (
                  <tr key={i}>
                    <td className={styles.timeCell}>{sch.time}</td>
                    <td className={styles.ritualCell}><strong>{sch.ritual}</strong></td>
                    <td className={styles.significanceCell}>{sch.significance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Temple Helpline & FAQs */}
        <div className={styles.helpSection}>
          <div className={styles.helpCard}>
            <div className={styles.helpIcon}>📞</div>
            <div>
              <h3>Pujan Sahayata & Priest Coordination</h3>
              <p>For custom Samuhik Abhishek, Nakshatra Shanti, or accommodation assistance, reach temple reception.</p>
              <div className={styles.helplineNumbers}>
                <a href="tel:8989998686" className={styles.callBadge}>Call 8989998686</a>
                <span className={styles.timeNotice}>Open 24 Hours Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
