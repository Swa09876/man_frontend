import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Helicopter Joyride & Indore-Omkareshwar Heli-Service",
  description: "Aerial helicopter joyrides over Mandhata island, Narmada gorge, and direct heli-connectivity from Indore.",
};

export default function HelicopterFacilityPage() {
  return (
    <ContentPageTemplate
      title="Helicopter Joyride & Heli-Services"
      subtitle="Experience an awe-inspiring bird's-eye view of the holy Omkara-shaped island and enjoy rapid aerial connectivity from Indore."
      category="Facility"
      categoryHref="/facility/accommodation"
      keyFacts={[
        { label: "Helipad Location", value: "Omkareshwar Mainland Helipad", icon: "🚁" },
        { label: "Joyride Duration", value: "7 to 10 Minutes Aerial Tour", icon: "⏱️" },
        { label: "Flight Route", value: "Mandhata Island, Dam & Ghats", icon: "⛰️" },
        { label: "Indore Shuttle", value: "20-Minute Flight from IDR Airport", icon: "✈️" },
      ]}
      sections={[
        {
          title: "Aerial Parikrama & Joyrides",
          content:
            "During major festive seasons and winter months, MP Tourism in association with certified aviation partners conducts helicopter joyrides. The flight takes off from the mainland helipad near the Dam reservoir, flies directly above the Om-shaped island, offering passengers a breathtaking aerial darshan of the temple spires, Narmada-Kaveri confluence, and lush Satpura forests.",
          bullets: [
            "Tickets can be booked at the Helipad Booking Counter or online through the MP Tourism Aviation Portal.",
            "Operates subject to clear weather and DGCA safety clearance.",
            "Weight limits and security baggage protocols apply to all passengers.",
          ],
        },
      ]}
      ctaButton={{
        label: "Contact Helpline for Flight Schedule",
        href: "/helpline",
      }}
    />
  );
}
