import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Parva Panchang 2026 - Auspicious Tithis & Temple Calendar",
  description: "Official religious calendar, lunar tithis, Masik Shivratri, Pradosh Vrats, and Shravan dates for Shri Omkareshwar.",
};

export default function ParvaPanchangPage() {
  return (
    <ContentPageTemplate
      title="Shri Omkareshwar Parva Panchang (Calendar 2026)"
      subtitle="The official astronomical and Agamic calendar calculated by the Chief Astrologer of Shri Omkareshwar Mandir Trust."
      category="Admin"
      categoryHref="/admin-info/administration"
      keyFacts={[
        { label: "Current Samvat", value: "Vikram Samvat 2083", icon: "🗓️" },
        { label: "Panchang System", value: "Purnimanta / Shukla System", icon: "🌙" },
        { label: "Weekly Auspicious", value: "Every Somwar (Monday)", icon: "✨" },
        { label: "Monthly Vrat", value: "Pradosh & Masik Shivratri", icon: "🔱" },
      ]}
      sections={[
        {
          title: "Major Shiva Vrats & Parva Tithis 2026",
          content: "Key auspicious dates for performing Abhishek, Rudrabhishek, and special Sankalpam pujas:",
          table: {
            headers: ["Auspicious Parva", "Vedic Month & Tithi", "Recommended Seva Offering"],
            rows: [
              ["Maha Shivratri", "Phalguna Krishna Chaturdashi", "Maha Rudrabhishek & Char Prahar Aarti"],
              ["Chaitra Navratri", "Chaitra Shukla Pratipada to Navami", "Chandi Path & Maa Narmada Chunari Seva"],
              ["Somvati Amavasya", "Amavasya falling on Monday", "Holy River Confluence Snan & Pitra Tarpan"],
              ["Shravan Maas Begins", "Shravan Krishna Pratipada", "Continuous Daily Jalabhishek & Kanwar Yatra"],
              ["Nag Panchami", "Shravan Shukla Panchami", "Kalsarp Dosh Nivaran & Silver Snake Archana"],
              ["Kartik Purnima", "Kartik Shukla Purnima", "Akhand Deepdaan & Mela Snan"],
              ["Masik Shivratri (Every Month)", "Krishna Paksha Chaturdashi", "Panchamrit Abhishek & Shayan Daan"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Book Special Puja on Auspicious Tithi",
        href: "/booking/puja",
      }}
    />
  );
}
