import React from "react";
import Link from "next/link";
import styles from "./Donation.module.css";

export const metadata = {
  title: "Online Donations & Seva - Shri Omkareshwar Jyotirlinga Official Website",
  description: "Contribute to sacred sevas, Anna Kshetra, Shringar, and Temple renovation with 80G income tax exemption certificate.",
};

const SEVA_CATEGORIES = [
  {
    id: "annakshetra",
    title: "Anna Kshetra (Bhandara Seva)",
    hindiTitle: "अन्नक्षेत्र महाप्रसाद सेवा",
    description: "Daily holy prasad meal distribution to thousands of visiting pilgrims, sadhus, and poor devotees at the Mandir Annakshetra.",
    amounts: [550, 1100, 2500, 5100],
    highlight: "Feed 11, 21, or 51 pilgrims",
    icon: "🍲",
  },
  {
    id: "shringar",
    title: "Shringar & Pushpa Seva",
    hindiTitle: "श्रृंगार एवं पुष्प सेवा",
    description: "Sacred morning and evening embellishment of the holy Jyotirlinga with fresh Bilva leaves, lotus garlands, and chandan paste.",
    amounts: [1100, 2100, 5100, 11000],
    highlight: "Sayamkalin & Mangal Shringar",
    icon: "🌺",
  },
  {
    id: "general",
    title: "General Temple Development",
    hindiTitle: "सामान्य मंदिर निर्माण एवं विकास",
    description: "Support continuous temple maintenance, cleanliness, heritage preservation, ghat security, and pilgrim shelter facilities.",
    amounts: [501, 1001, 2100, 5001],
    highlight: "Mandir Trust Infrastructure",
    icon: "🛕",
  },
  {
    id: "naivedya",
    title: "Naivedya & Rajbhog Seva",
    hindiTitle: "नैवेद्य एवं राजभोग सेवा",
    description: "Offering pure satvik Rajbhog cooked in pure cow desi ghee to Lord Omkareshwar at Madhyanha (12:20 PM) daily.",
    amounts: [500, 1100, 2100, 5100],
    highlight: "Daily Midday Bhog",
    icon: "🪔",
  },
  {
    id: "khichdi",
    title: "Khichdi Sadhu Sewa",
    hindiTitle: "खिचड़ी साधु सेवा",
    description: "Nutritious and sacred hot Khichdi prasad served to parikramavasi saints and ascetics undertaking the 168km Narmada Parikrama.",
    amounts: [351, 701, 1501, 3100],
    highlight: "Parikramavasi Seva",
    icon: "🥣",
  },
  {
    id: "nanda-deepak",
    title: "Nanda Deepak (Akhand Jyot)",
    hindiTitle: "नंदा दीपक (अखंड ज्योति) सेवा",
    description: "Offering pure cow ghee to maintain the perpetual Akhand Jyot burning uninterrupted in the sanctum sanctorum of Lord Omkareshwar.",
    amounts: [501, 1100, 3100, 11000],
    highlight: "Perpetual Sanctum Flame",
    icon: "✨",
  },
  {
    id: "shayan",
    title: "Shayan Aarti Daan",
    hindiTitle: "शयन दान सेवा",
    description: "Evening bed offering, soft cotton linens, aromatic flowers, and chaupar play arrangement for Lord Shiva and Mata Parvati before closing.",
    amounts: [1100, 2100, 5100],
    highlight: "Divine Night Worship",
    icon: "🌙",
  },
  {
    id: "room-donation",
    title: "Vishramalaya Room Construction",
    hindiTitle: "विश्रामालय कमरा निर्माण दान",
    description: "Donate towards the construction of dedicated pilgrim rooms at Mandhata Vishramalaya with plaque bearing your family name.",
    amounts: [51000, 100000, 250000],
    highlight: "Devotee Memorial Plaque",
    icon: "🏢",
  },
];

export default function DonationPage() {
  return (
    <div className={styles.container}>
      {/* Banner */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span className={styles.current}>Donations & Seva</span>
          </div>
          <h1 className={styles.title}>Shri Omkareshwar Mandir Seva & Daan</h1>
          <p className={styles.subtitle}>
            Support the sacred traditions, annadanam, and Vedic preservation of the 4th Jyotirlinga. All donations qualify for 50% Tax Exemption under Section 80G.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        {/* 80G Tax Exemption Banner */}
        <div className={styles.taxExemptionCard}>
          <div className={styles.taxBadge}>TAX BENEFIT</div>
          <div className={styles.taxContent}>
            <h3>50% Income Tax Exemption Under Section 80G</h3>
            <p>
              Shri Omkareshwar Mandir Trust is registered under Section 80G(5)(vi) of the Income Tax Act, 1961.
              URN: <strong>AAATS3291PF20214</strong>. Tax exemption certificates are generated instantly upon online contribution.
            </p>
          </div>
          <Link href="/donation/claim-80g" className={styles.claim80GBtn}>
            Claim Offline 80G Receipt →
          </Link>
        </div>

        {/* Categories Grid */}
        <div className={styles.gridHeader}>
          <h2>Auspicious Seva Categories</h2>
          <p>Choose an auspicious offering to dedicate in the name of your ancestors or family members</p>
        </div>

        <div className={styles.categoriesGrid}>
          {SEVA_CATEGORIES.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{category.icon}</span>
                <span className={styles.cardBadge}>{category.highlight}</span>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.hindiTitle}>{category.hindiTitle}</span>
                <h3 className={styles.cardTitle}>{category.title}</h3>
                <p className={styles.cardDesc}>{category.description}</p>

                <div className={styles.amountPills}>
                  {category.amounts.map((amt) => (
                    <Link
                      key={amt}
                      href={`/donation/pay?category=${encodeURIComponent(category.title)}&amount=${amt}`}
                      className={styles.amountPill}
                    >
                      ₹{amt.toLocaleString("en-IN")}
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <Link
                  href={`/donation/pay?category=${encodeURIComponent(category.title)}`}
                  className={styles.donateBtn}
                >
                  Donate Online Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bank Account Details for NEFT/RTGS */}
        <div className={styles.bankCard}>
          <div className={styles.bankHeader}>
            <span className={styles.bankIcon}>🏦</span>
            <div>
              <h3>Direct Bank Transfer (NEFT / RTGS / IMPS)</h3>
              <p>Devotees can also transfer donations directly to the official Mandir Trust bank accounts:</p>
            </div>
          </div>

          <div className={styles.bankDetailsGrid}>
            <div className={styles.bankBox}>
              <h4>State Bank of India (SBI)</h4>
              <p><strong>Account Name:</strong> Shri Omkareshwar Mandir Trust</p>
              <p><strong>Account Number:</strong> 30894562819</p>
              <p><strong>IFSC Code:</strong> SBIN0003291</p>
              <p><strong>Branch:</strong> Omkareshwar Mandhata (03291)</p>
            </div>

            <div className={styles.bankBox}>
              <h4>Punjab National Bank (PNB)</h4>
              <p><strong>Account Name:</strong> Shri Omkareshwar Mandir Trust</p>
              <p><strong>Account Number:</strong> 0841000100084532</p>
              <p><strong>IFSC Code:</strong> PUNB0084100</p>
              <p><strong>Branch:</strong> Omkareshwar Nagar</p>
            </div>
          </div>

          <div className={styles.bankNotice}>
            After completing a direct bank transfer, please submit your UTR reference on the{" "}
            <Link href="/donation/claim-80g">80G Claim Portal</Link> to receive your official IT tax exemption certificate.
          </div>
        </div>
      </div>
    </div>
  );
}
