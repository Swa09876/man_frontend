import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Temple Trust Activities & Social Welfare - Shri Omkareshwar",
  description: "Learn about the social, educational, medical, and environmental activities managed by Shri Omkareshwar Mandir Trust.",
};

export default function ActivitiesPage() {
  return (
    <ContentPageTemplate
      title="Trust Activities & Social Welfare Works"
      subtitle="Fulfilling the sacred ideal of 'Nara Seva is Narayana Seva' through philanthropic community health camps, clean river initiatives, and free pilgrim dining."
      category="Admin"
      categoryHref="/admin-info/administration"
      keyFacts={[
        { label: "Free Meals", value: "Annakshetra Operating 365 Days", icon: "🍲" },
        { label: "Healthcare", value: "Free Medical Aid & Ambulances", icon: "🏥" },
        { label: "River Purity", value: "Daily Narmada Swachhata Drive", icon: "🧹" },
        { label: "Veda Pathshala", value: "Preserving Ancient Recitation", icon: "📖" },
      ]}
      sections={[
        {
          title: "Core Welfare & Philanthropic Portfolios",
          content: "Shri Omkareshwar Mandir Trust channels devotee contributions into impactful community initiatives:",
          bullets: [
            "Shreeji Annakshetra: Serving free and subsidized meals to over 10 lakh pilgrims every year with high standards of culinary cleanliness.",
            "Free Medical Aid Kiosks: Stationed at Nagar Ghat, Gomukh Ghat, and Bus Stand, staffed with MBBS doctors, paramedics, oxygen cylinders, and emergency boats.",
            "Veda Pathshala: Supporting young brahmachari scholars learning the Krishna Yajurveda and Shukla Yajurveda Samhitas under expert Acharyas.",
            "Narmada Riverfront Sanitation: Over 120 dedicated sanitation workers conducting multiple daily cleaning shifts across all bathing ghats.",
          ],
        },
      ]}
      ctaButton={{
        label: "Support Trust Activities with Donation",
        href: "/donation",
      }}
    />
  );
}
