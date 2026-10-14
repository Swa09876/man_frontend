import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Partheshwar Shivling Pujan - Shri Omkareshwar Jyotirlinga",
  description: "Authentic Partheshwar Shivling Nirman & Abhishek Puja at sacred Narmada banks.",
};

export default function PartheshwarPujaPage() {
  return (
    <ContentPageTemplate
      title="Partheshwar Shivling Nirman & Pujan"
      subtitle="Sacred ritual of hand-crafting Shivling from pure holy Narmada river clay, sanctified with Vedic hymns and immersed with devotion."
      category="Services"
      categoryHref="/services/abhishek-puja"
      keyFacts={[
        { label: "Ritual Duration", value: "1.5 to 3 Hours", icon: "⏳" },
        { label: "Vedic Priests", value: "1 to 7 Brahmins", icon: "👥" },
        { label: "Seva Dakshina", value: "₹1,100 to ₹11,000", icon: "🪙" },
        { label: "Sacred Venue", value: "Ghats & Sabhamandap", icon: "🛕" },
      ]}
      sections={[
        {
          title: "Significance of Partheshwar Puja",
          content:
            "According to the Shiva Purana (Koti Rudra Samhita), worshipping a Partheshwar Shivling created from pure river clay is considered superior to worshipping idols of gold, silver, or precious gemstones. Bhagwan Rama worshipped Partheshwar Shivling at Rameshwaram, and King Mandhata performed this sacred penance on this very island to receive the boons of Lord Shiva.",
          bullets: [
            "Bestows peace of mind, liberation from ancestral Pitra doshas, and family prosperity.",
            "Prepared strictly using soil from the sacred riverbed of Maa Narmada mixed with Ganga jal, cow milk, and pure chandan.",
            "Performed in the Sabhamandap or at the holy Brahmagiri river ghats under learned priest guidance.",
          ],
        },
        {
          title: "Partheshwar Puja Options & Fees",
          content: "Devotees may choose from the following sacred seva options based on personal sankalpam:",
          table: {
            headers: ["Puja Seva Package", "No. of Brahmins", "Estimated Duration", "Dakshina (₹)"],
            rows: [
              ["Mitti Shivling Nirman & Ek Linga Archana", "1 Brahmin", "1 Hour", "₹1,100"],
              ["Ekottar Shata Linga Archana (108 Shivlings)", "3 Brahmins", "2 Hours", "₹3,100"],
              ["Sahasra Partheshwar Abhishek (1,000 Shivlings)", "7 Brahmins", "Full Morning", "₹11,000"],
            ],
          },
        },
        {
          title: "Ritual Sequence & Inclusions",
          content:
            "All Puja Samagri including pure desi ghee, Panchamrit, bilvapatra, janeu, dhoop, and fresh flowers are arranged by the temple priests.",
          bullets: [
            "1. Sankalpam in the name and Gotra of the devotee and family members.",
            "2. Shodashopachara Pujan of the consecrated clay Shivlings.",
            "3. Recitation of Sri Rudram, Namakam, and Chamakam Vedic suktams.",
            "4. Aarti, Prasad distribution, and respectful Visarjan into Maa Narmada waters.",
          ],
        },
      ]}
      ctaButton={{
        label: "Book Partheshwar Puja Online",
        href: "/booking/puja?category=Partheshwar+Puja&service=Mitti+Shivling+Nirman+%26+Pujan",
      }}
    />
  );
}
