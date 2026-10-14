import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Accommodations & Pilgrim Guest Houses - Shri Omkareshwar Jyotirlinga",
  description: "Official Mandir Trust guest houses, Vishramalaya, Dharamshalas, and private hotels available in Omkareshwar.",
};

export default function AccommodationFacilityPage() {
  return (
    <ContentPageTemplate
      title="Accommodation & Stay Facilities"
      subtitle="Comfortable, secure, and subsidized pilgrim lodging options provided by Shri Omkareshwar Mandir Trust and affiliated dharamshalas."
      category="Facility"
      categoryHref="/facility/accommodation"
      keyFacts={[
        { label: "Trust Guest House", value: "Shreeji Vishramalaya", icon: "🏢" },
        { label: "Room Types", value: "AC Deluxe & Non-AC Family", icon: "🛏️" },
        { label: "Dormitory", value: "₹50 - ₹100 per bed/day", icon: "🪙" },
        { label: "Location", value: "Near New Bus Terminal", icon: "📍" },
      ]}
      sections={[
        {
          title: "Trust Pilgrim Guest Houses",
          content: "The Mandir Trust maintains multiple clean, non-profit lodging complexes for visiting yatris:",
          table: {
            headers: ["Guest House Name", "Room Configurations", "Tariff & Amenities"],
            rows: [
              ["Shreeji Vishramalaya (Main)", "AC Double Bed, 4-Bed Family, Common Rest Halls", "₹800 to ₹1,500/night (Solar hot water, clean linen, lift)"],
              ["Mandhata Bhawan", "Non-AC Standard Double & Family Rooms", "₹500 to ₹800/night (Attached washroom, RO water)"],
              ["Day Resting Facility (Day Stay)", "Carpeted Resting Hall with Lockers", "₹50/devotee (Daytime luggage deposit & rest)"],
            ],
          },
        },
        {
          title: "Booking Guidelines & Check-in Rules",
          content:
            "Devotees can book rooms online through our portal or register at the Vishramalaya reception counter upon arrival. Government-issued photo ID is required for all adult guests.",
        },
      ]}
      ctaButton={{
        label: "Book Vishramalaya Stay Online",
        href: "/booking/vishramalaya",
      }}
    />
  );
}
