import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "How to Reach Shri Omkareshwar - Flight, Train, Bus & Road Travel Guide",
  description: "Complete transit guide on reaching Omkareshwar Jyotirlinga by air via Indore airport, railway stations, and state highway bus routes.",
};

export default function HowToReachPage() {
  return (
    <ContentPageTemplate
      title="How to Reach Shri Omkareshwar Jyotirlinga"
      subtitle="Complete transit guide covering the closest airports, major railway junctions, state highway bus routes, and local island transit."
      category="Contact"
      categoryHref="/contact"
      keyFacts={[
        { label: "Nearest Airport", value: "Indore (IDR) - 78 km", icon: "✈️" },
        { label: "Major Rail Junction", value: "Khandwa (KNW) - 70 km", icon: "🚆" },
        { label: "Local Rail Station", value: "Omkareshwar Road (OM) - 12 km", icon: "🚉" },
        { label: "Road Highway", value: "SH-27 / Indore-Khandwa Highway", icon: "🛣️" },
      ]}
      sections={[
        {
          title: "By Air (Closest Airport)",
          content:
            "The nearest airport is Devi Ahilyabai Holkar International Airport (IDR) in Indore, located approximately 78 km from Omkareshwar. The airport is directly connected to major metros including Mumbai, Delhi, Bengaluru, Hyderabad, Ahmedabad, and Kolkata.",
          bullets: [
            "Travel Time: Approximately 2 to 2.5 hours via the smooth 4-lane Indore-Ichhapur State Highway.",
            "Prepaid Taxis & Cabs: Available 24x7 outside Indore airport terminal (approx. fare ₹1,800 to ₹2,500).",
            "Bus Link: Regular city transport buses connect Indore airport to Sarwate Bus Stand, from where direct Omkareshwar buses depart every 30 minutes.",
          ],
        },
        {
          title: "By Train (Railway Connectivity)",
          content: "Pilgrims traveling by train have multiple station options depending on origin city:",
          table: {
            headers: ["Railway Station", "Station Code", "Distance & Transit Connectivity"],
            rows: [
              ["Khandwa Junction", "KNW", "70 km south. Major junction on the Mumbai-Delhi and Central Railway mainlines. Frequent state buses and taxis available."],
              ["Indore Junction", "INDB", "80 km north. Major western railway terminal connecting northern and western India. Direct buses depart every 20-30 mins."],
              ["Omkareshwar Road", "OM", "12 km west on the meter-gauge / converted rail line. Local shared autorickshaws and private taxis connect directly to the temple."],
            ],
          },
        },
        {
          title: "By Road & Intercity Bus Services",
          content:
            "Omkareshwar is well connected by state highways with regular MP State Road Transport (MPRTC) and private deluxe sleeper buses operating daily from:",
          bullets: [
            "From Indore: Buses depart Sarwate Bus Stand every 30 minutes from 05:00 AM to 08:30 PM (approx. 2.5 hours journey).",
            "From Ujjain: Direct pilgrimage buses take approx. 3.5 to 4 hours via Indore.",
            "From Bhopal: Direct long-distance buses take approx. 6 hours (260 km).",
          ],
        },
      ]}
      ctaButton={{
        label: "Book Temple Stay / Accommodation",
        href: "/booking/vishramalaya",
      }}
    />
  );
}
