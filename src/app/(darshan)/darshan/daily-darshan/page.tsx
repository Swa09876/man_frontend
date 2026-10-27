import React from "react";
import Link from "next/link";
import styles from "./DailyDarshan.module.css";
import { DailyDarshanGallery, DarshanItem } from "./DailyDarshanGallery";

export const metadata = {
  title: "Today's Daily Darshan & Sacred Shringar - Shri Omkareshwar Jyotirlinga",
  description: "View daily morning Mangal Darshan, Madhyanha Bhog, and Sandhya Shringar high-resolution photographs taken directly from the sanctum of Lord Omkareshwar.",
};

const DAILY_DARSHAN_PICS: DarshanItem[] = [
  {
    id: "mangal-aarti",
    category: "morning",
    prahar: "PRATHAM PRAHAR • 05:00 AM",
    session: "Mangal Aarti & Abhishek",
    time: "05:00 AM",
    period: "Brahmamuhurta (Dawn Ceremony)",
    mantra: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्य pushyatmā amṛtāt॥",
    description:
      "Sacred morning Narmada water and Panchamrit snan of the Swayambhu Jyotirlinga, adorned with fresh chandan, sacred bilvapatra, and midnight bhasma aarti.",
    badge: "Morning Shringar",
    rituals: ["Panchamrit Snan", "Vedic Rudra Chanting", "Bhasma Shringar", "Silver Sheshnag"],
    image: "/images/darshan-mangal-aarti.jpg",
    alt: "Morning Mangal Aarti and Holy Abhishek Ceremony at Shri Omkareshwar Jyotirlinga",
  },
  {
    id: "madhyanha-rajbhog",
    category: "midday",
    prahar: "DWITIYA PRAHAR • 12:20 PM",
    session: "Madhyanha Rajbhog Darshan",
    time: "12:20 PM",
    period: "Madhyanha (Noon Bhog Ceremony)",
    mantra: "ॐ नमो भगवते रुद्राय, अन्नपूर्णे सदा पूर्णे शङ्करप्राणवल्लभे। ज्ञानवैराग्यसिद्ध्यर्थं भिक्षां देहि च पार्वति॥",
    description:
      "Midday royal offering with golden Mukut crown shringar, fragrant sandalwood paste, bilvapatra archana, and consecrated pure ghee satvik naivedya.",
    badge: "Midday Darshan",
    rituals: ["Golden Mukut Crown", "Rajbhog Naivedya", "Sandalwood Paste", "Marigold Malas"],
    image: "/images/darshan-madhyanha-rajbhog.jpg",
    alt: "Midday Rajbhog Offering and Royal Shringar of Lord Omkareshwar",
  },
  {
    id: "sayamkalin-shringar",
    category: "evening",
    prahar: "TRITIYA PRAHAR • 04:30 PM",
    session: "Sayamkalin Royal Shringar",
    time: "04:30 PM",
    period: "Sandhyakal (Dusk Ceremony)",
    mantra: "कर्पूरगौरं करुणावतारं संसारसारम् भुजगेन्द्रहारम्। सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमाम॥",
    description:
      "Grand evening ornamentation adorned with an ornate silver chatra umbrella, red hibiscus, pink lotus malas, and glowing multi-tiered brass deepams.",
    badge: "Evening Shringar",
    rituals: ["Silver Chatra", "Lotus & Hibiscus Garland", "Multi-tier Deepams", "Dhoop Arati"],
    image: "/images/darshan-sayamkalin-shringar.jpg",
    alt: "Grand Evening Sayamkalin Royal Shringar and Aarti of Shri Omkareshwar",
  },
  {
    id: "shayan-aarti",
    category: "night",
    prahar: "CHATURTHA PRAHAR • 08:30 PM",
    session: "Shayan Aarti & Chaupar",
    time: "08:30 PM",
    period: "Nishitha (Night Shayan Ceremony)",
    mantra: "शान्तं पद्मासनस्थं शशिधरमुकुटं पञ्चवक्त्रं त्रिनेत्रं, शूलं वज्रं च खड्गं परशुमभयदं दक्षभागे वहन्तम्॥",
    description:
      "Nocturnal divine shayan ritual with a soft bed of fragrant jasmine petals, velvet canopy, and the traditional silver Chaupar board game before sanctum closing.",
    badge: "Night Darshan",
    rituals: ["Jasmine Floral Bed", "Silver Chaupar Board", "Lullaby Prayers", "Sanctum Pujan"],
    image: "/images/darshan-shayan-aarti.jpg",
    alt: "Sacred Night Shayan Aarti and Chaupar Ceremony of Lord Shiva and Mata Parvati",
  },
];

export default function DailyDarshanPage() {
  const currentDate = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.container}>
      {/* 1. Page Header with Breadcrumbs and Devotional Title */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/darshan/live">Darshan</Link>
            <span>/</span>
            <span className={styles.current}>Daily Darshan</span>
          </div>

          <div className={styles.headerBadge}>
            <span className={styles.badgePulse}></span>
            <span>SANCTUM SANCTORUM • OFFICIAL SHRINGAR</span>
          </div>

          <h1 className={styles.title}>Daily Darshan &amp; Sacred Shringar Gallery</h1>
          <p className={styles.subtitle}>
            Experience divine blessings directly from the 4th Jyotirlinga. High-resolution photographs
            of today&apos;s four sacred aartis, ornamentation, and bhog ceremonies captured by temple sevaks.
          </p>
        </div>
      </div>

      {/* 2. Interactive Gallery & Filter Wrap */}
      <div className={styles.contentWrap}>
        <DailyDarshanGallery currentDate={currentDate} items={DAILY_DARSHAN_PICS} />
      </div>
    </div>
  );
}
