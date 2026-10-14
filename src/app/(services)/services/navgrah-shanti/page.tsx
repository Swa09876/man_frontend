import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Navgrah Shanti Pujan - Shri Omkareshwar Jyotirlinga",
  description: "Vedic Navgrah Homa and Grah Dosh Nivaran Pujan at Shri Omkareshwar Mandir.",
};

export default function NavgrahShantiPage() {
  return (
    <ContentPageTemplate
      title="Navgrah Shanti Pujan"
      subtitle="Sacred Vedic planetary pacification ritual to mitigate adverse planetary transits and receive the celestial blessings of the 9 Grahas."
      category="Services"
      categoryHref="/services/abhishek-puja"
      keyFacts={[
        { label: "Ritual Duration", value: "2 to 3 Hours", icon: "⏳" },
        { label: "Vedic Priests", value: "2 to 5 Brahmins", icon: "👥" },
        { label: "Seva Dakshina", value: "₹2,500 to ₹5,500", icon: "🪙" },
        { label: "Samidha", value: "9 Sacred Herb Woods", icon: "🌿" },
      ]}
      sections={[
        {
          title: "Significance of Navgrah Shanti",
          content:
            "Lord Shiva is the supreme master (Mahakal) and ruler of time and astronomical planets. When unfavorable dasha, sade sati, or planetary alignments cause mental turbulence, financial stress, or health complications, performing Navgrah Homa at the sanctified banks of Omkareshwar invokes divine harmony.",
          bullets: [
            "Neutralizes adverse malefic effects of Shani, Rahu, Ketu, and Mangal.",
            "Increases mental clarity, family tranquility, professional stability, and spiritual wisdom.",
            "Performed with specific color cloths, sacred grains, and herbal homa samagri prescribed in Atharva Veda.",
          ],
        },
        {
          title: "Navgrah Seva Packages",
          content: "Choose between standard planetary shanti or comprehensive sampoorna anushthan:",
          table: {
            headers: ["Puja Seva", "Vedic Acharyas", "Duration", "Dakshina (₹)"],
            rows: [
              ["Navgrah Homa & Pujan", "2 Brahmins", "2 Hours", "₹2,500"],
              ["Sampoorna Grah Dosh Nivaran & Abhishek", "5 Brahmins", "3.5 Hours", "₹5,500"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Book Navgrah Shanti Puja",
        href: "/booking/puja?category=Navgrah+Shanti&service=Navgrah+Homa+%26+Pujan",
      }}
    />
  );
}
