import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Omkar Parvat Heritage Walk & Parikrama - Shri Omkareshwar Jyotirlinga",
  description: "Guided spiritual walk around Mandhata Island covering ancient rock shrines, Gauri Somnath temple, and scenic Narmada vistas.",
};

export default function HeritageWalkPage() {
  return (
    <ContentPageTemplate
      title="Omkar Parvat Heritage Walk & Island Parikrama"
      subtitle="A guided walking pilgrimage around the holy Om-shaped island of Mandhata, traversing ancient monolithic sculptures, cliff-top temples, and sacred river gorges."
      category="Services"
      categoryHref="/services/abhishek-puja"
      keyFacts={[
        { label: "Walking Distance", value: "Approx. 6.5 km", icon: "🚶" },
        { label: "Duration", value: "2.5 to 3.5 Hours", icon: "⏳" },
        { label: "Difficulty", value: "Moderate (Stone paths & steps)", icon: "🏞️" },
        { label: "Guided Tour Fee", value: "₹500 / person", icon: "🪙" },
      ]}
      sections={[
        {
          title: "About Mandhata Island & The Holy Omkara Shape",
          content:
            "From an aerial viewpoint, the island of Mandhata created by river Narmada's bifurcating branches naturally forms the sacred primordial syllable 'ॐ' (OM). Circumambulating this hill is regarded as one of the most spiritually meritorious acts in Sanatana Dharma, practiced by saints including Adi Shankaracharya and Swami Vivekananda.",
          bullets: [
            "Covers historic highlights including the giant 6-foot Shivling at Gauri Somnath Mandir, Siddhanath Temple ruins, and Chand-Suraj Gateways.",
            "Scenic viewpoints overlooking the turquoise waters of Narmada gorge and the Omkareshwar Dam reservoir.",
            "Accompanied by knowledgeable certified Mandir heritage guides sharing authentic Puranic legends.",
          ],
        },
        {
          title: "Tour Slots & Timings",
          content: "To avoid afternoon heat, guided walks are scheduled in two daily batches:",
          table: {
            headers: ["Batch", "Reporting Time", "Meeting Point", "Duration"],
            rows: [
              ["Morning Sunrise Batch", "06:00 AM", "Koti Teerth Ghat Reception Desk", "3 Hours"],
              ["Evening Sunset Batch", "03:30 PM", "Nagar Ghat Tourism Center", "3 Hours"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Book Heritage Walk Pass",
        href: "/booking/puja?category=Parikrama&service=Heritage+Walk+-+Omkar+Parvat+Parikrama",
      }}
    />
  );
}
