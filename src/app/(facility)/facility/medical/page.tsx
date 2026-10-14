import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Medical & Emergency Health Facilities - Shri Omkareshwar Jyotirlinga",
  description: "24x7 emergency medical centers, ambulance fleet, first-aid kiosks, and pharmacy access for pilgrims.",
};

export default function MedicalFacilityPage() {
  return (
    <ContentPageTemplate
      title="Medical & Emergency Healthcare Services"
      subtitle="Ensuring rapid medical assistance and emergency care for all pilgrims across the temple complex, island trails, and river ghats."
      category="Facility"
      categoryHref="/facility/accommodation"
      keyFacts={[
        { label: "Emergency Helpline", value: "8989998686 / 108", icon: "🚑" },
        { label: "Service Availability", value: "24 Hours x 365 Days", icon: "⏰" },
        { label: "Water Ambulance", value: "Equipped Speed Rescue Boat", icon: "🚤" },
        { label: "Consultation & Meds", value: "Completely Free of Cost", icon: "💊" },
      ]}
      sections={[
        {
          title: "First-Aid Kiosks & Medical Posts",
          content: "Permanent medical aid posts staffed by government medical officers and trained nurses are located at:",
          bullets: [
            "Mandir Complex Post: Located near Sabhamandap entrance with cardiac monitors, oxygen concentrators, and emergency stretchers.",
            "Nagar Ghat & Gomukh Ghat: Stationed near bathing steps to address slips, falls, or dehydration.",
            "Bus Stand Health Center: Community health post with basic diagnostic services and first-aid dressings.",
          ],
        },
        {
          title: "Water & Road Ambulances",
          content:
            "Two 108 road ambulances and one specialized medical rescue speedboat are on constant standby. In critical emergencies, patients are stabilized and transferred promptly to the District Hospital in Khandwa or tertiary facilities in Indore.",
        },
      ]}
      ctaButton={{
        label: "Contact Emergency Control Room",
        href: "/helpline",
      }}
    />
  );
}
