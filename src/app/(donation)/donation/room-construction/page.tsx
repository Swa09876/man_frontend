import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Vishramalaya Room Construction Daan - Shri Omkareshwar Jyotirlinga",
  description: "Donate towards the construction of dedicated pilgrim rest rooms with commemorative donor plaque.",
};

export default function RoomConstructionPage() {
  return (
    <ContentPageTemplate
      title="Vishramalaya Room Construction Daan"
      subtitle="Support the expansion of high-quality, subsidized pilgrim rest bhavans on Mandhata Island and leave a permanent legacy of seva for future generations."
      category="Donation"
      categoryHref="/donation"
      keyFacts={[
        { label: "Donor Plaque", value: "Engraved Marble Plaque", icon: "🏛️" },
        { label: "Tax Exemption", value: "50% Under Section 80G", icon: "🧾" },
        { label: "Room Tiers", value: "₹51,000 / ₹1,00,000 / ₹2,50,000", icon: "🪙" },
        { label: "Complimentary Stay", value: "3 Days / Year Free Stay", icon: "🔑" },
      ]}
      sections={[
        {
          title: "Building Shelter for Devotees (Vishramalaya Seva)",
          content:
            "Millions of pilgrims visit Omkareshwar each year, particularly during holy Shravan Maas and Kartik Purnima. To ensure no humble devotee is left without safe shelter, the Temple Trust is constructing modern pilgrim rooms equipped with solar hot water, clean beds, and elevators.",
          bullets: [
            "Donor Memorial: A polished granite or marble plaque displaying the donor's family name and ancestors' memory is affixed at the room entrance.",
            "Complimentary Access: Donors are allotted 3 days of complimentary priority stay each year during their lifetime.",
            "Full Section 80G Tax Exemption receipt provided instantly upon donation receipt.",
          ],
        },
        {
          title: "Room Sponsorship Tiers",
          content: "Options for memorial room sponsorship:",
          table: {
            headers: ["Sponsorship Category", "Room Type", "Contribution (₹)"],
            rows: [
              ["Standard Pilgrim Room Sponsorship", "Family Non-AC Room", "₹51,000"],
              ["Deluxe Pilgrim Room Sponsorship", "Deluxe AC Room", "₹1,00,000"],
              ["Grand Suite / Floor Block Memorial", "Multi-Bed Family Suite", "₹2,50,000"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Donate for Room Construction",
        href: "/donation/pay?category=Vishramalaya+Room+Construction&amount=51000",
      }}
    />
  );
}
