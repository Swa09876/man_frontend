import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Narmada Parikrama & Mandhata Island Parikrama - Spiritual Pilgrimage",
  description: "Guidelines and spiritual significance of circumambulating sacred Mandhata Island and holy river Narmada.",
};

export default function ParikramaPage() {
  return (
    <ContentPageTemplate
      title="Sacred Parikrama of Omkareshwar & Narmada"
      subtitle="Circumambulating the sacred hill of Mandhata and undertaking the 3-year holy Narmada Parikrama — the ultimate spiritual pilgrimage in central India."
      category="About"
      categoryHref="/about/main-temple"
      keyFacts={[
        { label: "Island Parikrama", value: "6.5 km Circumference", icon: "🚶" },
        { label: "River Parikrama", value: "Over 2,600 km Pilgrimage", icon: "🌊" },
        { label: "Spiritual Merit", value: "Equal to Circumambulating Earth", icon: "✨" },
        { label: "Traditional Rule", value: "Keep River Always to the Right", icon: "🧭" },
      ]}
      sections={[
        {
          title: "The Island Parikrama (Omkar Parvat)",
          content:
            "Walking around Mandhata Island on foot is an ancient ritual practiced by millions of devotees. The 6.5 km circuit begins at Nagar Ghat or Gomukh Ghat, proceeds clockwise keeping the holy island always to one's right side, passes through Gauri Somnath Temple and Siddhanath temple atop the hill, and returns along the scenic Narmada gorge.",
          bullets: [
            "Estimated Walking Time: Approximately 2 to 3.5 hours at a gentle meditative pace.",
            "Paved Pathway: Stone steps and paved trails with shade resting huts and drinking water stations.",
            "Spiritual Rule: Strict silence or continuous chanting of 'Om Namah Shivaya' during the walk.",
          ],
        },
        {
          title: "The Great Narmada Parikrama",
          content:
            "Maa Narmada is the only river in the world whose entire length is circumambulated on foot by pilgrims. Starting traditionally at Omkareshwar or Amarkantak, parikramavasis walk along the southern bank all the way to the Arabian Sea at Bharuch, cross by boat, and return along the northern bank back to their origin point.",
        },
      ]}
      ctaButton={{
        label: "Book Guided Heritage Walk",
        href: "/services/heritage-walk",
      }}
    />
  );
}
