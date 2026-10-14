import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Vehicle Parking Facilities & Shuttle Services - Omkareshwar",
  description: "Organized public parking lots, electronic surveillance, tariffs, and free electric battery shuttle points.",
};

export default function ParkingFacilityPage() {
  return (
    <ContentPageTemplate
      title="Organized Parking & Transit Facilities"
      subtitle="Safe, spacious, and CCTV-monitored vehicle parking lots situated on mainland approaches, integrated with electric feeder shuttles."
      category="Facility"
      categoryHref="/facility/accommodation"
      keyFacts={[
        { label: "Main Parking Area", value: "New Bus Stand & Mortakka Road", icon: "🅿️" },
        { label: "Surveillance", value: "24x7 High-Definition CCTV", icon: "📹" },
        { label: "Shuttle Feeder", value: "E-Rickshaws & Trust Buses", icon: "🛺" },
        { label: "Two-Wheeler / Car", value: "Nominal Automated Token Tariffs", icon: "🪙" },
      ]}
      sections={[
        {
          title: "Designated Parking Zones",
          content: "To maintain pedestrian safety on Mandhata island, all private vehicles must be parked in designated lots on the mainland:",
          table: {
            headers: ["Parking Zone", "Vehicle Capacity", "Distance to Ghat / Bridge", "Tariff"],
            rows: [
              ["Zone A (Near Bus Stand)", "500 Buses, 1,200 Cars", "800m (Free E-Rickshaw Link)", "Cars: ₹50 / Buses: ₹100"],
              ["Zone B (Mortakka Approach)", "800 Light Motor Vehicles", "1.2 km (Shuttle Bus Link)", "Cars: ₹40 / 2-Wheelers: ₹20"],
              ["Zone C (Two-Wheeler Stand)", "3,000 Motorcycles & Scooters", "300m from Suspension Bridge", "Two-Wheelers: ₹20/day"],
            ],
          },
        },
        {
          title: "Electric Shuttle Feeder Service",
          content:
            "Clean and quiet battery-operated e-rickshaws and trust mini-vans operate round the clock between Zone A parking and the entry point of Mamleshwar Setu suspension bridge, prioritizing senior citizens and differently-abled devotees.",
        },
      ]}
      ctaButton={{
        label: "View How to Reach Directions",
        href: "/how-to-reach",
      }}
    />
  );
}
