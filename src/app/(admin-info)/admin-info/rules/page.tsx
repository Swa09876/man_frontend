import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Temple Rules, Code of Conduct & Dress Guidelines - Shri Omkareshwar",
  description: "Mandatory devotee code of conduct, dress code, prohibited items, photography restrictions, and security protocols.",
};

export default function RulesPage() {
  return (
    <ContentPageTemplate
      title="Mandir Rules, Code of Conduct & Guidelines"
      subtitle="Ensuring the spiritual sanctity, decorum, and safety of the sanctum sanctorum for all visiting devotees."
      category="Admin"
      categoryHref="/admin-info/administration"
      keyFacts={[
        { label: "Dress Code", value: "Traditional Modest Attire Required", icon: "👘" },
        { label: "Photography", value: "Strictly Prohibited in Sanctum", icon: "📷" },
        { label: "Footwear", value: "Deposit at Free Counter Stalls", icon: "👟" },
        { label: "Baggage", value: "Only Hand Pouches Permitted", icon: "🎒" },
      ]}
      sections={[
        {
          title: "Code of Conduct & Sanctum Etiquette",
          content: "All devotees visiting Shri Omkareshwar Jyotirlinga are requested to observe the following rules:",
          bullets: [
            "Dress Code: Devotees must dress modestly. For inner Garbhagriha Abhishek, men must wear Dhoti-Kurta or clean traditional wear; women must wear Saree or Salwar-Kameez. Western shorts, sleeveless tops, and distressed clothing are not allowed inside the sanctum.",
            "Photography Prohibited: Cameras, video equipment, and smartphone filming inside the Garbhagriha and Sabhamandap are strictly forbidden by temple law.",
            "Prohibited Items: Cigarettes, tobacco, pan masala, matches, lighters, alcoholic beverages, leather belts, and sharp metal objects must not be carried past security checkpoints.",
            "Footwear Counters: Free footwear deposit counters with computerized tokens are available at the entrance of all suspension bridges and ghat approaches.",
            "Puja Samagri: Only pure satvik offerings (Bilvapatra, holy Narmada water, flowers) approved by temple archaks may be offered upon the Shivling.",
          ],
        },
      ]}
      ctaButton={{
        label: "Book Official VIP Darshan Pass",
        href: "/darshan/vishesh-darshan",
      }}
    />
  );
}
