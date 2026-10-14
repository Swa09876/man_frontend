import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Ann Kshetra Meal Sponsorship - Shri Omkareshwar Jyotirlinga",
  description: "Feed visiting pilgrims and sadhus with free satvik meals at Shri Omkareshwar Annakshetra.",
};

export default function AnnKshetraDonationPage() {
  return (
    <ContentPageTemplate
      title="Anna Kshetra - Bhandara Mahaprasad Seva"
      subtitle="Donation support for daily mass meal services feeding thousands of yatris, parikramavasis, and destitute devotees at the sacred Omkareshwar Annakshetra."
      category="Donation"
      categoryHref="/donation"
      keyFacts={[
        { label: "Daily Footfall", value: "3,000+ Pilgrims Fed", icon: "🍲" },
        { label: "Kitchen Purity", value: "100% Satvik Clean Cooking", icon: "✨" },
        { label: "80G Benefit", value: "Eligible for 50% Tax Relief", icon: "🧾" },
        { label: "URN No.", value: "AAATS3291PF20214", icon: "📜" },
      ]}
      sections={[
        {
          title: "The Supreme Virtue of Annadanam",
          content:
            "'अन्नदानं महादानं विद्यादानं ततः परम्' — In the Hindu tradition, feeding the hungry is the highest form of worship. Shri Omkareshwar Mandir Trust operates a modern community dining hall (Annakshetra) near Nagar Ghat where no visiting pilgrim ever goes without a hot, nutritious, satvik meal.",
          bullets: [
            "Meals include freshly rolled rotis, subzi, dal, rice, and kheer/sweet.",
            "Special dedicated seating arrangements for parikramavasi saints and elderly yatris.",
            "Continuous service operating 365 days a year without interruption.",
          ],
        },
        {
          title: "Meal Sponsorship Options",
          content: "Sponsor meals for groups of devotees in memory of your loved ones or for special family occasions:",
          table: {
            headers: ["Sponsorship Option", "Devotees Fed", "Seva Contribution (₹)"],
            rows: [
              ["Donation for 11 Person Meal", "11 Pilgrims", "₹550"],
              ["Donation for 21 Person Meal", "21 Pilgrims", "₹1,100"],
              ["Donation for 51 Person Meal", "51 Pilgrims", "₹2,500"],
              ["Full Day Annakshetra Bhandara", "Over 2,000 Pilgrims", "₹51,000"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Sponsor Annakshetra Meals Online",
        href: "/donation/pay?category=Anna+Kshetra+(Bhandara+Seva)&amount=1100",
      }}
    />
  );
}
