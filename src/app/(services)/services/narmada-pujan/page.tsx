import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Maa Narmada Pujan & Maha Aarti - Shri Omkareshwar Jyotirlinga",
  description: "Sacred Deepdan, Dugdh Abhishek and Chunari Manorath offering to Mother River Narmada at Omkareshwar.",
};

export default function NarmadaPujanPage() {
  return (
    <ContentPageTemplate
      title="Maa Narmada Pujan & Deepdaan Seva"
      subtitle="Revering the sacred life-giving mother river whose every pebble is worshipped as a naturally formed Narmadeshwar Shivling."
      category="Services"
      categoryHref="/services/abhishek-puja"
      keyFacts={[
        { label: "Ritual Duration", value: "45 Mins to 1.5 Hours", icon: "⏳" },
        { label: "Ideal Timing", value: "Sunset Evening (Sayamkal)", icon: "🌅" },
        { label: "Seva Dakshina", value: "₹1,100 to ₹3,100", icon: "🪙" },
        { label: "Holy Ghat", value: "Nagar Ghat / Gomukh Ghat", icon: "🌊" },
      ]}
      sections={[
        {
          title: "Glory of Maa Narmada (Reva)",
          content:
            "Ancient texts state: 'Ganga snanam, Yamuna panam, Narmada smaranam' — merely meditating on Maa Narmada cleanses accumulated karmas. Flowing around the Omkar-shaped Mandhata hill, the river splits into Narmada and Kaveri, creating the sacred confluence at which this Jyotirlinga presides.",
          bullets: [
            "Devotees perform Dugdhabhishek (milk offering) and float lighted earthern lamps (Deepdaan) onto the gentle waves.",
            "Grand Chunari Manorath: Offering a sacred red silk banner spanning across the sacred river waters.",
            "Daily evening Maha Aarti with large multi-tiered brass lamps at Nagar Ghat.",
          ],
        },
        {
          title: "Seva Packages",
          content: "Available holy offerings to Maa Narmada:",
          table: {
            headers: ["Seva Name", "Inclusions", "Dakshina (₹)"],
            rows: [
              ["Maa Narmada Deepdan & Dugdh Abhishek", "Milk abhishek, 11 clay diyas, flowers, sankalp", "₹1,100"],
              ["Maa Narmada Maha Aarti Seva", "Grand brass lamp aarti, fruit bhog, prasad distribution", "₹3,100"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Book Maa Narmada Seva",
        href: "/booking/puja?category=Narmada+Pujan&service=Maa+Narmada+Deepdan+%26+Dugdh+Abhishek",
      }}
    />
  );
}
