import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Nearby Places of Tourist & Pilgrim Interest - Around Omkareshwar",
  description: "Explore nearby attractions including Maheshwar, Mahakaleshwar Ujjain, Mandu fort, and Indore.",
};

export default function NearbyPlacesPage() {
  return (
    <ContentPageTemplate
      title="Nearby Pilgrimage & Heritage Destinations"
      subtitle="Complete your spiritual circuit of the Narmada and Malwa regions with these renowned historical and sacred places within short driving distance."
      category="About"
      categoryHref="/about/main-temple"
      keyFacts={[
        { label: "Twin Jyotirlinga", value: "Mahakaleshwar Ujjain (135 km)", icon: "🔱" },
        { label: "Holkar Heritage", value: "Maheshwar Fort (65 km)", icon: "🏰" },
        { label: "Historic Citadels", value: "Mandu / Dhar (105 km)", icon: "🏛️" },
        { label: "Commercial Hub", value: "Indore Airport (78 km)", icon: "✈️" },
      ]}
      sections={[
        {
          title: "Prominent Destinations in the Region",
          content: "Plan your extended itinerary from Omkareshwar to these nearby points of interest:",
          table: {
            headers: ["Destination", "Distance & Direction", "Key Attractions & Spiritual Significance"],
            rows: [
              ["Maheshwar", "65 km (West)", "Capital of legendary Queen Ahilyabai Holkar; majestic Narmada river fort, Ahilya Ghat, and famous handwoven Maheshwari sarees."],
              ["Ujjain", "135 km (North)", "Home to Shri Mahakaleshwar Jyotirlinga (Dakshinmukhi), Kal Bhairav temple, Ram Ghat, and sacred Kumbh Mela site."],
              ["Mandu (Mandav)", "105 km (West)", "Ancient Afghan fortress city perched atop the Vindhya plateau; Jahaz Mahal, Hindola Mahal, and Rani Roopmati Pavilion."],
              ["Indore", "78 km (North)", "Fastest transit hub with Devi Ahilyabai Holkar International Airport (IDR), Rajwada Palace, and Chhappan Dukan street food."],
              ["Khandwa", "70 km (South)", "District headquarters, major railway junction connecting Mumbai and Delhi, and memorial of legendary singer Kishore Kumar."],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "View How to Reach Omkareshwar",
        href: "/how-to-reach",
      }}
    />
  );
}
