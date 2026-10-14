import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Town Information & Pilgrim Guide - Omkareshwar Mandhata",
  description: "Visitor guide, geography, local markets, climate, and practical tips for pilgrims visiting Omkareshwar town.",
};

export default function TownInfoPage() {
  return (
    <ContentPageTemplate
      title="Omkareshwar Mandhata Town Information"
      subtitle="A holy temple town steeped in millennia of spiritual history, situated amidst the Vindhya and Satpura mountain ranges on the banks of Maa Narmada."
      category="About"
      categoryHref="/about/main-temple"
      keyFacts={[
        { label: "District", value: "Khandwa (Nimar Region)", icon: "📍" },
        { label: "State", value: "Madhya Pradesh, India", icon: "🇮🇳" },
        { label: "PIN Code", value: "450535", icon: "📮" },
        { label: "Elevation", value: "196 meters above sea level", icon: "⛰️" },
      ]}
      sections={[
        {
          title: "Geography & Town Layout",
          content:
            "Omkareshwar town is divided into two distinct sections: the mainland bank (south bank of river Narmada) where town markets, hotels, bus terminals, and Mamleshwar temple are situated, and Mandhata Island (north island) which houses the main Shri Omkareshwar Jyotirlinga, Gomukh ghat, and ancient hill shrines. The two sections are connected by modern pedestrian suspension bridges and motorized river ferry boats.",
          bullets: [
            "Local Culture: Rooted in Malwi and Nimari traditions, known for warm hospitality towards yatris.",
            "Handicrafts: Famous for genuine Narmadeshwar stone Shivlings sculpted from river pebbles, brass pooja utensils, and pure cotton gamchhas.",
            "Cuisine: Pure satvik Malwi delicacies including Dal-Bafla-Laddu, Poha-Jalebi, and fresh sugarcane juice.",
          ],
        },
        {
          title: "Best Season to Visit",
          content: "Omkareshwar experiences tropical riverine weather throughout the year:",
          table: {
            headers: ["Season", "Months", "Climate Conditions & Advice"],
            rows: [
              ["Winter (Best)", "October to March", "Pleasant, cool breezes (12°C - 28°C). Ideal for island parikrama and sightseeing."],
              ["Monsoon (Scenic)", "July to September", "River Narmada swells in majesty; holy Shravan festivities and lush green hills."],
              ["Summer (Warm)", "April to June", "Hot (30°C - 42°C). Early morning and late evening temple visits recommended."],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "How to Reach Omkareshwar",
        href: "/how-to-reach",
      }}
    />
  );
}
