import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Child Safety Wristband Distribution Points - Shri Omkareshwar",
  description: "Distribution kiosks for waterproof child safety tags, senior citizen tracking wristbands, and lost & found booths.",
};

export default function WristbandPointsPage() {
  return (
    <ContentPageTemplate
      title="Child Safety Wristband Distribution Points"
      subtitle="Free safety wristband kiosks deployed by the Mandir Trust and Police Control Room to prevent separation of children and senior citizens during large gatherings."
      category="Facility"
      categoryHref="/facility/accommodation"
      keyFacts={[
        { label: "Cost", value: "100% Free of Cost", icon: "🏷️" },
        { label: "Material", value: "Tear-Resistant & Waterproof", icon: "🛡️" },
        { label: "Kiosk Locations", value: "5 Major Bridge & Ghat Checkpoints", icon: "📍" },
        { label: "Helpline", value: "Lost & Found Cell: 8989998686", icon: "📢" },
      ]}
      sections={[
        {
          title: "About the Child Safety Wristband Initiative",
          content:
            "During peak pilgrimage rush (especially Shravan Somwar and Kartik Mela), over 2 lakh devotees gather on Mandhata island. To eliminate the distress of lost children, parents can obtain free waterproof wristbands upon arrival. The child's name, parent's name, and contact mobile numbers are written in indelible ink on the band.",
          bullets: [
            "Tear-proof Tyvek material withstands holy river bathing and rain.",
            "If any lost child is identified by police or volunteers, parents are reunited within minutes via mobile announcement.",
            "Senior citizens with memory conditions or speech difficulties can also be tagged at these kiosks.",
          ],
        },
        {
          title: "Kiosk Locations Across Omkareshwar",
          content: "Wristband distribution points are active 24x7 at the following 5 key entry bottlenecks:",
          table: {
            headers: ["Distribution Point", "Location Description", "Operating Hours"],
            rows: [
              ["Point 1: Main Bus Stand", "Next to Police Assistance Booth", "24 Hours Daily"],
              ["Point 2: Jhula Pul Entrance", "Mainland side of Mamleshwar Suspension Bridge", "04:30 AM to 10:00 PM"],
              ["Point 3: Nagar Ghat Kiosk", "Near River Changing Rooms & Ferry Point", "05:00 AM to 08:30 PM"],
              ["Point 4: Gomukh Ghat Entry", "Under the Main Temple Shikhara Steps", "05:00 AM to 09:30 PM"],
              ["Point 5: Koti Teerth Confluence", "Island Southern Parikrama Entry", "06:00 AM to 07:00 PM"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Read Child Safety Policy",
        href: "/policies/child-safety",
      }}
    />
  );
}
