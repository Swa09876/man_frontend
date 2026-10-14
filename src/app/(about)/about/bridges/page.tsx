import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Bridges of Omkareshwar - Mamleshwar Setu & Suspension Bridges",
  description: "Learn about the suspension bridges and pedestrian access connecting mainland Omkareshwar to Mandhata Island.",
};

export default function BridgesPage() {
  return (
    <ContentPageTemplate
      title="Bridges of Omkareshwar (Setu)"
      subtitle="Architectural pedestrian suspension bridges linking the mainland riverbank to the holy island of Mandhata over the emerald waters of river Narmada."
      category="About"
      categoryHref="/about/main-temple"
      keyFacts={[
        { label: "Main Suspension Bridge", value: "Mamleshwar Setu (Jhula Pul)", icon: "🌉" },
        { label: "New Cable-Stayed Bridge", value: "Adwaita Setu", icon: "🏗️" },
        { label: "Usage", value: "Pedestrian Pilgrims Only", icon: "🚶" },
        { label: "Viewpoint", value: "Breathtaking Gorge Vistas", icon: "📸" },
      ]}
      sections={[
        {
          title: "Mamleshwar Setu (Jhula Pul)",
          content:
            "Before the construction of the suspension bridges, boats were the sole means of crossing from the mainland to Mandhata Island. The iconic pedestrian suspension bridge, popularly known as 'Jhula Pul' or Mamleshwar Setu, spans approximately 268 meters across the rocky Narmada gorge, offering magnificent views of the temple shikharas and river ghats.",
          bullets: [
            "Equipped with high safety fencing and crowd control turnstiles.",
            "Vehicle access is completely prohibited to ensure pilgrim safety and serenity.",
            "Spectacular illumination during evening hours makes for iconic night photography.",
          ],
        },
        {
          title: "Bridge Safety & Crossing Guidelines",
          content:
            "During major festivals like Maha Shivratri and Shravan Somwar, pedestrian traffic is made one-way across the bridges (entry via one bridge and exit via the second) to prevent congestion and facilitate smooth flow for lakhs of yatris.",
          bullets: [
            "Please follow queue marshals and security personnel instructions on the bridge walkway.",
            "Avoid stopping in large clusters in the middle of the bridge for photography during rush hours.",
            "For elderly pilgrims unable to walk across the bridge, boat ferries and authorized wheelchair services are available at river ghats.",
          ],
        },
      ]}
      ctaButton={{
        label: "View Wheelchair & Assisted Services",
        href: "/facility/wheelchair",
      }}
    />
  );
}
