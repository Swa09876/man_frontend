import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Naivedya & Rajbhog Daan - Shri Omkareshwar Jyotirlinga",
  description: "Sponsor daily midday Rajbhog offering to Bhagwan Omkareshwar.",
};

export default function NaivedyaDonationPage() {
  return (
    <ContentPageTemplate
      title="Naivedya & Rajbhog Seva Daan"
      subtitle="Offering holy midday satvik feasts prepared in pure cow ghee to Lord Omkareshwar during the daily Rajbhog ceremony."
      category="Donation"
      categoryHref="/donation"
      keyFacts={[
        { label: "Bhog Timing", value: "Daily 12:20 PM to 01:15 PM", icon: "⏰" },
        { label: "Tax Exemption", value: "50% Under Section 80G", icon: "🧾" },
        { label: "Seva Offerings", value: "₹500 / ₹1,100 / ₹2,100", icon: "🪙" },
        { label: "Ingredients", value: "Pure Desi Cow Ghee & Grains", icon: "🥣" },
      ]}
      sections={[
        {
          title: "About the Madhyanha Rajbhog",
          content:
            "At 12:20 PM sharp every day, the sanctum curtains are drawn for the royal feast (Rajbhog) of Lord Omkareshwar. The meal is cooked in traditional copper vessels following ancient Agamic recipes: chapatis, seasonal vegetables, fragrant rice, sweet kheer, and dry fruits. Sponsoring this offering ensures abundance and food security in the donor's family.",
          bullets: [
            "Devotees can dedicate this offering in the name of their parents or ancestors.",
            "All consecrated bhog is subsequently distributed among sadhus and pilgrims at the Mandir Annakshetra.",
          ],
        },
      ]}
      ctaButton={{
        label: "Sponsor Naivedya Seva",
        href: "/donation/pay?category=Naivedya+%26+Rajbhog+Seva&amount=500",
      }}
    />
  );
}
