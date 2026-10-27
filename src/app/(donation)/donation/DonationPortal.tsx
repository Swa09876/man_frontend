"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Donation.module.css";

interface SevaCategory {
  id: string;
  title: string;
  hindiTitle: string;
  categoryTag: "food" | "ritual" | "infra";
  description: string;
  amounts: number[];
  highlight: string;
  image: string;
  subPage: string;
  payCategory: string;
}

const SEVA_CATEGORIES: SevaCategory[] = [
  {
    id: "annakshetra",
    title: "Anna Kshetra (Bhandara Seva)",
    hindiTitle: "अन्नक्षेत्र महाप्रसाद सेवा",
    categoryTag: "food",
    description: "Daily holy prasad meal distribution to thousands of visiting pilgrims, sadhus, and poor devotees at Nagar Ghat Mandir Annakshetra.",
    amounts: [550, 1100, 2500, 5100],
    highlight: "Feed 11, 21, or 51 Pilgrims",
    image: "/images/service-prasad.jpg",
    subPage: "/donation/ann-kshetra",
    payCategory: "Anna Kshetra (Bhandara Seva)",
  },
  {
    id: "shringar",
    title: "Shringar & Pushpa Seva",
    hindiTitle: "श्रृंगार एवं पुष्प सेवा",
    categoryTag: "ritual",
    description: "Sacred embellishment of Lord Omkareshwar with fresh Bilva Patra, red hibiscus, pink lotus malas, and fragrant Chandan paste.",
    amounts: [1100, 2100, 5100, 11000],
    highlight: "Sayamkalin & Mangal Shringar",
    image: "/images/darshan-sayamkalin-shringar.jpg",
    subPage: "/donation/shringar",
    payCategory: "Shringar & Pushpa Seva",
  },
  {
    id: "general",
    title: "General Temple & Ghat Preservation",
    hindiTitle: "सामान्य मंदिर निर्माण एवं विकास",
    categoryTag: "infra",
    description: "Support continuous temple maintenance, Narmada Ghat cleanliness, heritage conservation, pilgrim shelters, and security facilities.",
    amounts: [501, 1001, 2100, 5001],
    highlight: "Mandir Trust Infrastructure",
    image: "/images/omkareshwar-temple-history.jpg",
    subPage: "/donation/pay?category=General%20Temple%20Development",
    payCategory: "General Temple Development",
  },
  {
    id: "naivedya",
    title: "Naivedya & Rajbhog Seva",
    hindiTitle: "नैवेद्य एवं राजभोग सेवा",
    categoryTag: "ritual",
    description: "Offering pure satvik Rajbhog cooked in pure cow desi ghee to Lord Omkareshwar at Madhyanha (12:20 PM) daily.",
    amounts: [500, 1100, 2100, 5100],
    highlight: "Daily Midday Rajbhog",
    image: "/images/darshan-madhyanha-rajbhog.jpg",
    subPage: "/donation/naivedya",
    payCategory: "Naivedya & Rajbhog Seva",
  },
  {
    id: "khichdi",
    title: "Khichdi Sadhu Sewa",
    hindiTitle: "खिचड़ी साधु सेवा",
    categoryTag: "food",
    description: "Nutritious and sacred hot Khichdi prasad served to parikramavasi saints and ascetics undertaking the 168km holy Narmada Parikrama.",
    amounts: [351, 701, 1501, 3100],
    highlight: "Parikramavasi Seva",
    image: "/images/omkareshwar-ghat.jpg",
    subPage: "/donation/khichdi",
    payCategory: "Khichdi Sadhu Sewa",
  },
  {
    id: "nanda-deepak",
    title: "Nanda Deepak (Akhand Jyot)",
    hindiTitle: "नंदा दीपक (अखंड ज्योति) सेवा",
    categoryTag: "ritual",
    description: "Offering pure cow ghee to maintain the perpetual Akhand Jyot flame burning uninterrupted in the inner sanctum of Lord Omkareshwar.",
    amounts: [501, 1100, 3100, 11000],
    highlight: "Perpetual Sanctum Flame",
    image: "/images/service-aarti.jpg",
    subPage: "/donation/nanda-deepak",
    payCategory: "Nanda Deepak (Akhand Jyot)",
  },
  {
    id: "shayan",
    title: "Shayan Aarti Daan",
    hindiTitle: "शयन दान सेवा",
    categoryTag: "ritual",
    description: "Evening bedtime offering, soft fragrant jasmine floral bed, velvet canopy, and traditional silver Chaupar arrangement before sanctum closing.",
    amounts: [1100, 2100, 5100],
    highlight: "Divine Night Shayan",
    image: "/images/darshan-shayan-aarti.jpg",
    subPage: "/donation/shayan-daan",
    payCategory: "Shayan Aarti Daan",
  },
  {
    id: "room-donation",
    title: "Vishramalaya Room Construction",
    hindiTitle: "विश्रामालय कमरा निर्माण दान",
    categoryTag: "infra",
    description: "Donate towards the construction of dedicated pilgrim rooms at Mandhata Vishramalaya with a permanent marble plaque bearing your family name.",
    amounts: [51000, 100000, 250000],
    highlight: "Devotee Memorial Plaque",
    image: "/images/service-stay.jpg",
    subPage: "/donation/room-construction",
    payCategory: "Vishramalaya Room Construction",
  },
];

const FAQS = [
  {
    q: "How do I claim my 50% Income Tax Exemption certificate under Section 80G?",
    a: "For all online donations made through this portal, an official 80G Tax Exemption Certificate (Form 10BE compliant) with Mandir Trust URN (AAATS3291PF20214) is generated instantly and emailed with your receipt. For direct NEFT/RTGS bank transfers, simply submit your UTR reference on our 80G Claim Portal to receive your certificate within 24 hours.",
  },
  {
    q: "Can I sponsor Annakshetra (Bhandara) on a specific birthday, anniversary, or Tithi?",
    a: "Yes. When donating online, you can enter a Sankalp note specifying the date, occasion, and the name of the family member in whose honor the Mahaprasad will be dedicated and served to visiting pilgrims.",
  },
  {
    q: "Can I dedicate a donation in the sacred memory of my ancestors (Pitru Seva)?",
    a: "Certainly. Devotees often sponsor Shringar, Akhand Jyot, or Annadanam in the memory of departed parents or elders. You can provide your Gotra and family names in the Sankalp field during checkout.",
  },
  {
    q: "Are online donations received directly by the temple administration?",
    a: "Yes, 100% of all contributions are deposited directly into the official bank accounts of Shri Omkareshwar Jyotirlinga Mandir Trust (Government of Madhya Pradesh registered). There are no intermediary commissions.",
  },
];

export function DonationPortal() {
  const [activeFilter, setActiveFilter] = useState<"all" | "food" | "ritual" | "infra">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`✓ ${label} copied to clipboard!`);
    });
  };

  const filteredCategories = SEVA_CATEGORIES.filter((c) => {
    if (activeFilter === "all") return true;
    return c.categoryTag === activeFilter;
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      {/* 1. Grand & Serene Temple Hero Banner */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          {/* Breadcrumb Navigation */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span className={styles.current}>Donations & Seva</span>
          </div>

          {/* Sacred Sanskrit Invocation Pill */}
          <div className={styles.sanskritPill}>
            <span className={styles.omSign}>ॐ</span>
            <span>पवित्र सेवा एवं दान संकलप | SACRED JYOTIRLINGA SEVA</span>
          </div>

          <h1 className={styles.pageTitle}>Shri Omkareshwar Mandir Seva & Daan</h1>
          <div className={styles.shlokaQuote}>
            &ldquo;दातव्यमिति यद्दानं दीयतेऽनुपकारिणे। देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्॥&rdquo;
          </div>
          <p className={styles.pageSubtitle}>
            Dedicated to the preservation of the 4th Dwadasa Jyotirlinga, daily mass Annadanam, and Vedic rituals.
            Every offering directly sustains holy pilgrimages and qualifies for 50% Tax Relief under Section 80G.
          </p>

          {/* Hero Quick Navigation Action Buttons */}
          <div className={styles.heroActions}>
            <button
              type="button"
              onClick={() => scrollToSection("sevas")}
              className={styles.btnHeroPrimary}
            >
              Explore Seva Offerings ↓
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("bank-details")}
              className={styles.btnHeroSecondary}
            >
              Direct Bank Transfer (SBI / PNB)
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Content Container */}
      <div className={styles.contentWrap}>
        {/* Sleek & Prestigious 80G Tax Exemption Card */}
        <div className={styles.taxExemptionCard}>
          <div className={styles.taxLeft}>
            <div className={styles.taxEmblem}>🏛️</div>
            <div className={styles.taxContent}>
              <h3>
                50% Income Tax Exemption Under Section 80G(5)(vi)
                <span className={styles.taxBadgeInline}>TAX BENEFIT</span>
              </h3>
              <p>
                Shri Omkareshwar Mandir Trust is officially recognized under Section 80G(5)(vi) of the Income Tax Act, 1961.
                URN: <strong className={styles.urnCode}>AAATS3291PF20214</strong>
                <button
                  type="button"
                  onClick={() => copyToClipboard("AAATS3291PF20214", "80G URN")}
                  className={styles.btnCopyUrn}
                  title="Copy URN"
                >
                  Copy
                </button>
                . Instant 80G receipts are generated upon online donation.
              </p>
            </div>
          </div>

          <Link href="/donation/claim-80g" className={styles.claim80GBtn}>
            Claim Offline 80G Receipt →
          </Link>
        </div>

        {/* Impact Ribbon (Trust Numbers) */}
        <div className={styles.impactRibbon}>
          <div className={styles.impactCard}>
            <div className={styles.impactIcon}>🍲</div>
            <div className={styles.impactText}>
              <strong>10,000+ Daily Meals</strong>
              <p>Free satvik Annadanam served 365 days</p>
            </div>
          </div>
          <div className={styles.impactCard}>
            <div className={styles.impactIcon}>📜</div>
            <div className={styles.impactText}>
              <strong>50% 80G Tax Relief</strong>
              <p>Instant digital certificate with Form 10BE</p>
            </div>
          </div>
          <div className={styles.impactCard}>
            <div className={styles.impactIcon}>🛕</div>
            <div className={styles.impactText}>
              <strong>2,500+ Yrs Heritage</strong>
              <p>Sacred Mandhata island sanctum upkeep</p>
            </div>
          </div>
          <div className={styles.impactCard}>
            <div className={styles.impactIcon}>🔒</div>
            <div className={styles.impactText}>
              <strong>100% Direct Trust</strong>
              <p>Government registered temple treasury</p>
            </div>
          </div>
        </div>

        {/* Section Heading & Category Filter Tabs */}
        <div className={styles.sectionHeadingArea} id="sevas">
          <h2>Auspicious Seva Categories</h2>
          <p>Choose a sacred offering to dedicate in the name of your family, ancestors, or personal sankalp</p>
        </div>

        <div className={styles.filterTabs}>
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`${styles.filterTab} ${activeFilter === "all" ? styles.filterTabActive : ""}`}
          >
            🌟 All Sevas ({SEVA_CATEGORIES.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("food")}
            className={`${styles.filterTab} ${activeFilter === "food" ? styles.filterTabActive : ""}`}
          >
            🍲 Annadanam & Bhandara (2)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("ritual")}
            className={`${styles.filterTab} ${activeFilter === "ritual" ? styles.filterTabActive : ""}`}
          >
            🌺 Sanctum Rituals & Jyot (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("infra")}
            className={`${styles.filterTab} ${activeFilter === "infra" ? styles.filterTabActive : ""}`}
          >
            🛕 Infrastructure & Memorials (2)
          </button>
        </div>

        {/* Seva Categories Grid */}
        <div className={styles.categoriesGrid}>
          {filteredCategories.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              {/* Visual Card Image Banner */}
              <div className={styles.cardImageWrap}>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.cardImageOverlay}>
                  <span className={styles.cardBadge}>{category.highlight}</span>
                  <span className={styles.taxMiniBadge}>80G Eligible</span>
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <span className={styles.hindiTitle}>{category.hindiTitle}</span>
                <h3 className={styles.cardTitle}>{category.title}</h3>
                <p className={styles.cardDesc}>{category.description}</p>

                <div className={styles.amountSectionLabel}>Auspicious Vedic Amounts:</div>
                <div className={styles.amountPills}>
                  {category.amounts.map((amt) => (
                    <Link
                      key={amt}
                      href={`/donation/pay?category=${encodeURIComponent(category.payCategory)}&amount=${amt}`}
                      className={styles.amountPill}
                    >
                      ₹{amt.toLocaleString("en-IN")}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className={styles.cardFooter}>
                <Link href={category.subPage} className={styles.detailsBtn}>
                  Read Details
                </Link>
                <Link
                  href={`/donation/pay?category=${encodeURIComponent(category.payCategory)}`}
                  className={styles.donateBtn}
                >
                  Donate Online →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Bank Transfer & Treasury Card */}
        <div className={styles.bankCard} id="bank-details">
          <div className={styles.bankHeader}>
            <div className={styles.bankIcon}>🏦</div>
            <div>
              <h3>Official Temple Trust Bank Accounts (NEFT / RTGS / IMPS)</h3>
              <p>Devotees can transfer offerings directly to the official Mandir Trust bank accounts:</p>
            </div>
          </div>

          <div className={styles.bankDetailsGrid}>
            {/* SBI */}
            <div className={styles.bankBox}>
              <h4>
                <span>State Bank of India (SBI)</span>
                <span style={{ fontSize: "11px", color: "#16a34a", fontWeight: "700" }}>PRIMARY ACCOUNT</span>
              </h4>
              <div className={styles.bankRow}>
                <span className={styles.bankLabel}>Account Name</span>
                <span className={styles.bankVal}>Shri Omkareshwar Mandir Trust</span>
              </div>
              <div className={styles.bankRow}>
                <span className={styles.bankLabel}>Account Number</span>
                <span className={styles.bankVal}>
                  <span className={styles.bankMono}>30894562819</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("30894562819", "SBI Account Number")}
                    className={styles.copyInlineBtn}
                  >
                    Copy
                  </button>
                </span>
              </div>
              <div className={styles.bankRow}>
                <span className={styles.bankLabel}>IFSC Code</span>
                <span className={styles.bankVal}>
                  <span className={styles.bankMono}>SBIN0003291</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("SBIN0003291", "SBI IFSC")}
                    className={styles.copyInlineBtn}
                  >
                    Copy
                  </button>
                </span>
              </div>
              <div className={styles.bankRow}>
                <span className={styles.bankLabel}>Branch</span>
                <span className={styles.bankVal}>Omkareshwar Mandhata (03291)</span>
              </div>
            </div>

            {/* PNB */}
            <div className={styles.bankBox}>
              <h4>
                <span>Punjab National Bank (PNB)</span>
                <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "700" }}>SECONDARY ACCOUNT</span>
              </h4>
              <div className={styles.bankRow}>
                <span className={styles.bankLabel}>Account Name</span>
                <span className={styles.bankVal}>Shri Omkareshwar Mandir Trust</span>
              </div>
              <div className={styles.bankRow}>
                <span className={styles.bankLabel}>Account Number</span>
                <span className={styles.bankVal}>
                  <span className={styles.bankMono}>0841000100084532</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("0841000100084532", "PNB Account Number")}
                    className={styles.copyInlineBtn}
                  >
                    Copy
                  </button>
                </span>
              </div>
              <div className={styles.bankRow}>
                <span className={styles.bankLabel}>IFSC Code</span>
                <span className={styles.bankVal}>
                  <span className={styles.bankMono}>PUNB0084100</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("PUNB0084100", "PNB IFSC")}
                    className={styles.copyInlineBtn}
                  >
                    Copy
                  </button>
                </span>
              </div>
              <div className={styles.bankRow}>
                <span className={styles.bankLabel}>Branch</span>
                <span className={styles.bankVal}>Omkareshwar Nagar</span>
              </div>
            </div>
          </div>

          <div className={styles.bankNotice}>
            <span>ℹ️</span>
            <div>
              After completing a direct bank transfer, please note your UTR transaction number and submit it on the{" "}
              <Link href="/donation/claim-80g">80G Claim Portal</Link> to generate your official tax deduction receipt.
            </div>
          </div>
        </div>

        {/* Devotee FAQ Accordion */}
        <div className={styles.faqSection}>
          <div className={styles.faqHeader}>
            <h3>Frequently Asked Devotee Questions</h3>
            <p>Transparency, trust compliance, and dedicated Seva policies</p>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className={styles.faqQuestion}
                  >
                    <span>{faq.q}</span>
                    <span className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ""}`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className={styles.toastNotification}>
          {toastMessage}
        </div>
      )}
    </div>
  );
}
