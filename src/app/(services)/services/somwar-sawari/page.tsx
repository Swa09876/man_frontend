import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Somwar Sawari Palki Seva - Shri Omkareshwar Jyotirlinga",
  description: "Traditional Monday Royal Palki procession and boat ride of Bhagwan Omkareshwar through Mandhata town.",
};

export default function SomwarSawariPage() {
  return (
    <ContentPageTemplate
      title="Somwar Sawari Palki Procession"
      subtitle="The magnificent weekly royal journey of Lord Omkareshwar in a golden and silver palanquin through the streets of Mandhata and sacred river boat ride."
      category="Services"
      categoryHref="/services/abhishek-puja"
      keyFacts={[
        { label: "Day of Seva", value: "Every Monday Evening", icon: "🗓️" },
        { label: "Departure Timing", value: "04:30 PM from Mandir", icon: "⏰" },
        { label: "Palki Seva Dakshina", value: "₹11,000", icon: "🪙" },
        { label: "Route", value: "Town Streets & River Narmada", icon: "⛵" },
      ]}
      sections={[
        {
          title: "The Royal Tradition of Bhagwan's Sawari",
          content:
            "Every Monday, the silver idol (Chandi Swaroop) of Bhagwan Omkareshwar is adorned in regal attire and placed in a consecrated Palki. Accompanied by temple drums (Damru), shehnai, conch blasts, and hundreds of dancing devotees, the Lord steps out of the sanctum to inspect his subjects and give darshan to all residents.",
          bullets: [
            "Devotees who sponsor the Palki Seva receive the rare privilege of carrying the palanquin alongside temple archaks.",
            "The procession reaches Koti Teerth Ghat, where the Lord boards a decorated royal boat (Nauka Vihar) across Maa Narmada to meet Mamleshwar.",
            "Grand Aarti is performed on the river waters at sunset amidst fireworks and devotional chanting.",
          ],
        },
        {
          title: "Devotee Participation Privileges",
          content: "Sponsorship of the Somwar Sawari includes:",
          bullets: [
            "Participation of 4 family members in the inner procession circle.",
            "Special Garbhagriha Abhishek prior to Palki departure.",
            "Exclusive Maha Prasad and consecrated Angavastram from the Lord's silver idol.",
          ],
        },
      ]}
      ctaButton={{
        label: "Book Somwar Sawari Palki Seva",
        href: "/booking/puja?category=Somwar+Sawari&service=Somwar+Sawari+Palki+Seva",
      }}
    />
  );
}
