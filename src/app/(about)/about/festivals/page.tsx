import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Festivals of Shri Omkareshwar - Maha Shivratri, Shravan & Kartik Mela",
  description: "Annual festivals celebrated with grand devotion at Shri Omkareshwar Jyotirlinga.",
};

export default function FestivalsPage() {
  return (
    <ContentPageTemplate
      title="Sacred Festivals at Shri Omkareshwar"
      subtitle="Throughout the year, vibrant spiritual festivals draw hundreds of thousands of pilgrims to celebrate the eternal glory of Mahadev."
      category="About"
      categoryHref="/about/main-temple"
      keyFacts={[
        { label: "Grandest Festival", value: "Maha Shivratri (Phalguna)", icon: "🔥" },
        { label: "Holy Month", value: "Shravan Maas (July-August)", icon: "🌧️" },
        { label: "Fair & Deepdaan", value: "Kartik Purnima Mela", icon: "🪔" },
        { label: "Weekly Parv", value: "Somwar Sawari (Every Monday)", icon: "⛵" },
      ]}
      sections={[
        {
          title: "Major Annual Celebrations",
          content: "The following major festivals transform Mandhata island into a vibrant spectacle of music, prayer, and deep spiritual communion:",
          table: {
            headers: ["Festival", "Hindu Tithi", "Celebration Details"],
            rows: [
              ["Maha Shivratri", "Phalguna Krishna Chaturdashi", "All-night continuous Char Prahar Abhishek, Maha Aarti, lakh-fold footfall."],
              ["Shravan Maas", "Full Holy Month of Shravan", "Lakhs of Kanwariyas carrying Narmada water, daily Palki processions, floral decoration."],
              ["Kartik Purnima Mela", "Kartik Shukla Purnima", "Grand multi-day pilgrimage fair, mass holy river bathing, floating deepdaan."],
              ["Narmada Jayanti", "Magha Shukla Saptami", "Chunari Manorath across river, 1,000-deep aarti, fireworks and devotional bhajan nights."],
              ["Anant Chaturdashi", "Bhadrapada Shukla Chaturdashi", "Traditional conclusion of Ganesh festival and Vishesh Sawari of Lord Shiva."],
            ],
          },
        },
        {
          title: "Pilgrim Facilities During Festival Days",
          content:
            "During major festivals, special holding areas, continuous drinking water kiosks, medical first-aid posts, additional ghat safety divers, and barricaded queue channels are deployed by District Administration Khandwa and the Mandir Trust to ensure comfortable and safe darshan.",
        },
      ]}
      ctaButton={{
        label: "Check Real-Time Slot Quotas",
        href: "/booking/availability",
      }}
    />
  );
}
