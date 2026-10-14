import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Wheelchair & Assisted Darshan for Elderly & Divyang Devotees",
  description: "Free wheelchair services, ramp access, priority queues, and porter assistance at Shri Omkareshwar.",
};

export default function WheelchairFacilityPage() {
  return (
    <ContentPageTemplate
      title="Wheelchair & Assisted Divyang Darshan Services"
      subtitle="Ensuring comfortable, barrier-free access for elderly yatris, pregnant women, and differently-abled devotees."
      category="Facility"
      categoryHref="/facility/accommodation"
      keyFacts={[
        { label: "Wheelchair Service", value: "Complimentary Free Service", icon: "♿" },
        { label: "Assistance Desks", value: "Available at Bridge & Ghat Heads", icon: "🤝" },
        { label: "Priority Lane", value: "Direct Ramp & Lift Access", icon: "🛗" },
        { label: "Sevadars", value: "Trained Trust Attendants", icon: "👥" },
      ]}
      sections={[
        {
          title: "Assisted Services for Divyang & Senior Devotees",
          content: "Shri Omkareshwar Mandir Trust provides dedicated accessibility facilities across the temple premises:",
          bullets: [
            "Free Wheelchairs: Available at the security entry of Mamleshwar Setu bridge and Gomukh Ghat approach. Devotees may deposit an ID card to avail a wheelchair.",
            "Dedicated Sevadar Attendants: Trained temple volunteers are stationed to assist in maneuvering wheelchairs through designated ramp channels.",
            "Elevator Access: A public lift connects the lower river ghat level to the upper Sabhamandap courtyard, avoiding the steep stone steps.",
            "Priority Sanctum Entry: Senior citizens (above 70 years) and divyang yatris are given expedited entry through the Vishesh VIP queue without booking charge.",
          ],
        },
      ]}
      ctaButton={{
        label: "Request Assistance via Helpline",
        href: "/helpline",
      }}
    />
  );
}
