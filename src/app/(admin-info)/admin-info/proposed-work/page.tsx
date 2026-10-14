import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Proposed Development Works & Master Plan - Shri Omkareshwar Jyotirlinga",
  description: "Future infrastructure master plan, pilgrim amenities, Ekatmata Dham, and ghat beautification initiatives.",
};

export default function ProposedWorkPage() {
  return (
    <ContentPageTemplate
      title="Proposed Development Works & Temple Master Plan"
      subtitle="Modernizing pilgrim infrastructure and preserving ancient heritage through the ambitious Omkareshwar Corridor and Ekatmata Dham initiatives."
      category="Admin"
      categoryHref="/admin-info/administration"
      keyFacts={[
        { label: "Flagship Project", value: "Ekatmata Dham (Statue of Oneness)", icon: "🕉️" },
        { label: "Corridor Plan", value: "Omkareshwar Mandir Corridor", icon: "🏛️" },
        { label: "Ghat Upgrades", value: "All-Weather Continuous Riverfront", icon: "🌊" },
        { label: "Funding", value: "Mandir Trust & State Govt Budget", icon: "💰" },
      ]}
      sections={[
        {
          title: "Major Infrastructure Initiatives Under Execution",
          content: "The Mandir Trust and Madhya Pradesh Tourism are actively developing world-class facilities to support rising tourist footfall:",
          bullets: [
            "Ekatmata Dham: A monumental 108-foot bronze statue of Acharya Adi Shankaracharya atop Mandhata hill, along with an Advaita philosophy research institute and museum.",
            "Queue Complex & Shade Corridors: Construction of air-cooled multi-tier holding complexes equipped with digital waiting screens and baby-care centers.",
            "Ropeway & Mechanical Vertical Mobility: Cable car and cliffside elevators connecting mainland bus parks directly to the hill plateau.",
            "Waterfront Promenade: Unified paved riverfront promenade linking Nagar Ghat, Koti Teerth Ghat, and Gomukh Ghat with advanced floodlighting.",
          ],
        },
      ]}
      ctaButton={{
        label: "Contribute to Temple Construction",
        href: "/donation/room-construction",
      }}
    />
  );
}
