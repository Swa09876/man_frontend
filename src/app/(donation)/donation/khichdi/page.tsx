import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Khichdi Sadhu Sewa - Shri Omkareshwar Jyotirlinga",
  description: "Sponsor hot nutritious Moong Dal Khichdi for Narmada Parikramavasi saints and ascetics.",
};

export default function KhichdiDonationPage() {
  return (
    <ContentPageTemplate
      title="Khichdi Sadhu & Parikramavasi Sewa"
      subtitle="Providing hot, digestive, pure cow ghee moong dal khichdi to weary saints and sadhus undertaking the arduous 168 km Narmada Parikrama on foot."
      category="Donation"
      categoryHref="/donation"
      keyFacts={[
        { label: "Target Beneficiaries", value: "Parikramavasi Saints", icon: "🙏" },
        { label: "Prepared With", value: "Desi Cow Ghee & Moong Dal", icon: "🥣" },
        { label: "Tax Exemption", value: "80G Benefit Available", icon: "🧾" },
        { label: "Sponsorship", value: "₹351 / ₹701 / ₹1,501", icon: "🪙" },
      ]}
      sections={[
        {
          title: "Sewa to Walking Parikramavasis",
          content:
            "Thousands of sadhus walk bare-foot along the holy banks of Narmada carrying only a kamandalu. Omkareshwar is the starting and concluding point of the Parikrama. To sustain these holy wanderers, the Mandir Trust serves hot khichdi prasad from early morning till late evening.",
          bullets: [
            "Easy on the digestive system after long days of rigorous walking.",
            "Prepared with nourishing yellow moong dal, aged rice, and fragrant spices in pure cow ghee.",
            "Donors receive the spiritual merit of aiding authentic tapasvis and seekers.",
          ],
        },
        {
          title: "Khichdi Sewa Options",
          content: "Available contribution tiers:",
          table: {
            headers: ["Sewa Option", "Details", "Contribution (₹)"],
            rows: [
              ["Khichdi Sewa Daan 351", "Feeds approx. 25 Parikramavasis", "₹351"],
              ["Khichdi Sewa Daan 701", "Feeds approx. 50 Parikramavasis", "₹701"],
              ["Khichdi Sewa Daan 1501", "Feeds approx. 120 Parikramavasis", "₹1,501"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Sponsor Khichdi Sewa",
        href: "/donation/pay?category=Khichdi+Sadhu+Sewa&amount=701",
      }}
    />
  );
}
