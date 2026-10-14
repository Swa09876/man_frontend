import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Maha Mrityunjaya Anushthan - Shri Omkareshwar Jyotirlinga",
  description: "Vedic Maha Mrityunjaya Mantra Jaap and Havan for health, rejuvenation, and victory over untimely death.",
};

export default function MahaMrityunjayaPage() {
  return (
    <ContentPageTemplate
      title="Maha Mrityunjaya Mantra Jaap & Anushthan"
      subtitle="The supreme Sanjeevani mantra from the Rigveda, recited by disciplined Vedic pandits for rejuvenation, vitality, and protection from all mortal perils."
      category="Services"
      categoryHref="/services/abhishek-puja"
      keyFacts={[
        { label: "Jaap Counts", value: "1,100 to 1,25,000", icon: "📿" },
        { label: "Vedic Priests", value: "1 to 5 Brahmins", icon: "👥" },
        { label: "Seva Dakshina", value: "₹2,100 to ₹51,000", icon: "🪙" },
        { label: "Duration", value: "Single Day to 7 Days", icon: "⏳" },
      ]}
      sections={[
        {
          title: "The Supreme Sanjeevani Healing Vibration",
          content:
            "॥ ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥\n\nThe Maha Mrityunjaya mantra revealed to Sage Markandeya is the master key to curing prolonged ailments, removing fear of untimely death (Akaal Mrityu), and awakening inner vitality. Performed at the sacred Jyotirlinga, the sound resonance invokes the life-preserving grace of Lord Shiva.",
          bullets: [
            "Conducted for recovery from chronic illness, surgeries, or critical health crises.",
            "Includes personal sankalp with devotee gotra, continuous mala jaap, and purnahuti havan with Amrita herbs and pure cow ghee.",
            "Live video darshan and sacred consecrated Bhasma & Rudraksha dispatched to devotee residence.",
          ],
        },
        {
          title: "Anushthan Tiers",
          content: "Available jaap counts and recitation periods:",
          table: {
            headers: ["Anushthan Level", "No. of Brahmins", "Duration", "Dakshina (₹)"],
            rows: [
              ["Laghu Mrityunjaya Jaap (1,100 Jaap)", "1 Brahmin", "Half Day", "₹2,100"],
              ["Madhyam Anushthan (11,000 Jaap)", "3 Brahmins", "2 Days", "₹15,000"],
              ["Maha Sanjeevani Anushthan (1,25,000 Jaap)", "5 Brahmins", "7 Days", "₹51,000"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Book Maha Mrityunjaya Jaap",
        href: "/booking/puja?category=Maha+Mrityunjaya&service=Mrityunjaya+Jaap+(1100+Jaap)",
      }}
    />
  );
}
