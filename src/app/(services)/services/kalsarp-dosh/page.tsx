import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Kalsarp Yog Nivaran Pujan - Shri Omkareshwar Jyotirlinga",
  description: "Authentic Kalsarp Dosh Nivaran and Rahu-Ketu Shanti ritual at Sangam Ghat, Shri Omkareshwar.",
};

export default function KalsarpDoshPage() {
  return (
    <ContentPageTemplate
      title="Kalsarp Yog & Rahu-Ketu Shanti Pujan"
      subtitle="Ancient Vedic remedy performed at the sacred Omkareshwar Sangam to alleviate obstacles created by planetary entrapment between Rahu and Ketu."
      category="Services"
      categoryHref="/services/abhishek-puja"
      keyFacts={[
        { label: "Duration", value: "2 to 3.5 Hours", icon: "⏳" },
        { label: "Vedic Priests", value: "2 to 4 Brahmins", icon: "👥" },
        { label: "Seva Dakshina", value: "₹3,500 to ₹7,500", icon: "🪙" },
        { label: "Venue", value: "Sangam Ghat / Sabhamandap", icon: "🌊" },
      ]}
      sections={[
        {
          title: "Understanding Kalsarp Dosh",
          content:
            "When all seven major Vedic planets are positioned between the lunar nodes of Rahu and Ketu in an individual's birth chart, Kalsarp Yog is formed. It may cause recurrent impediments in career, marriage delays, persistent anxiety, or unforeseen losses. Performing worship to Lord Omkareshwar, who wears the serpent Vasuki as his adornment, permanently mitigates the serpentine affliction.",
          bullets: [
            "Conducted on auspicious Amavasya, Panchami, Monday, or Pradosh days.",
            "Includes Nag-Nagin silver pair puja, Rudra chanting, and holy river immersion.",
            "Helps overcome recurring bad dreams, professional instability, and health afflictions.",
          ],
        },
        {
          title: "Kalsarp Puja Options",
          content: "Two ritual options are available depending on severity of horoscope dasha:",
          table: {
            headers: ["Puja Seva", "Vedic Priests", "Duration", "Dakshina (₹)"],
            rows: [
              ["Kalsarp Yog Nivaran (Normal)", "2 Brahmins", "2 Hours", "₹3,500"],
              ["Vishesh Kalsarp Maha Puja & Nagbali", "4 Brahmins", "3.5 Hours", "₹7,500"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Book Kalsarp Puja Online",
        href: "/booking/puja?category=Kalsarp+Dosh&service=Kalsarp+Yog+Nivaran+(Normal)",
      }}
    />
  );
}
