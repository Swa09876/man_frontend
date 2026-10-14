import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Holy Bathing Ghats of Omkareshwar - Nagar Ghat, Gomukh & Koti Teerth",
  description: "Explore the sacred bathing ghats of river Narmada at Omkareshwar, safety protocols, changing rooms, and aarti timings.",
};

export default function GhatsPage() {
  return (
    <ContentPageTemplate
      title="Sacred River Bathing Ghats of Omkareshwar"
      subtitle="Holy stone bathing steps on the banks of Maa Narmada where pilgrims take ritual cleansing baths, perform deepdaan, and attend evening aartis."
      category="About"
      categoryHref="/about/main-temple"
      keyFacts={[
        { label: "Principal Ghat", value: "Nagar Ghat (South Mainland)", icon: "🌊" },
        { label: "Island Sanctum Ghat", value: "Gomukh Ghat & Koti Teerth", icon: "🛕" },
        { label: "Safety Facilities", value: "Safety Chains, Divers & Nets", icon: "🛟" },
        { label: "Aarti Timing", value: "Daily 07:00 PM at Nagar Ghat", icon: "🪔" },
      ]}
      sections={[
        {
          title: "Major Holy Bathing Ghats",
          content: "The holy riverfront at Omkareshwar features several ancient and well-maintained bathing ghats:",
          table: {
            headers: ["Ghat Name", "Location & Bank", "Significance & Facilities"],
            rows: [
              ["Nagar Ghat", "South Mainland bank", "Spacious stone ghat with safety chains, changing rooms, and grand evening Narmada Maha Aarti."],
              ["Gomukh Ghat", "North Island bank", "Located just beneath the main temple shikhara with natural cold spring spout resembling a cow's face."],
              ["Koti Teerth Ghat", "Island southern tip", "Holy confluence where devotees perform ancestral Pitra Tarpan and board Somwar Sawari boats."],
              ["Brahmapuri Ghat", "Near Sangam", "Peaceful serene ghat frequented by sages, meditation seekers, and parikramavasis."],
            ],
          },
        },
        {
          title: "Bathing Safety Guidelines",
          content:
            "River Narmada has deep underwater gorges and powerful currents. The temple trust and administration strictly enforce safety measures for all pilgrims:",
          bullets: [
            "Always bathe within the stainless-steel safety chains and demarcation floats.",
            "Do not venture into midstream deep waters under any circumstances.",
            "Certified life-saving divers and speedboats are stationed at all active ghats.",
            "Use dedicated eco-friendly disposal bins for flower garlands and avoid plastic soap in the holy river.",
          ],
        },
      ]}
      ctaButton={{
        label: "Book Maa Narmada Deepdan Seva",
        href: "/services/narmada-pujan",
      }}
    />
  );
}
