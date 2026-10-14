import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Dining & Food Facilities - Omkar Prasadalaya, Annakshetra & Local Eateries",
  description: "Guide to food, clean drinking water, subsidized temple meals, and hygienic eateries at Shri Omkareshwar.",
};

export default function DiningFacilityPage() {
  return (
    <ContentPageTemplate
      title="Dining, Mahaprasad & Food Facilities"
      subtitle="Ensuring pure satvik sustenance, clean RO drinking water kiosks, and hygienic eateries for all visiting pilgrims."
      category="Facility"
      categoryHref="/facility/accommodation"
      keyFacts={[
        { label: "Free / Subsidized", value: "Omkar Prasadalaya & Annakshetra", icon: "🍲" },
        { label: "Bhojan Thali", value: "Subsidized at ₹30 per coupon", icon: "🪙" },
        { label: "Drinking Water", value: "Free Chilled RO Water Kiosks", icon: "💧" },
        { label: "Local Specialty", value: "Pure Desi Ghee Dal Bafla", icon: "🍛" },
      ]}
      sections={[
        {
          title: "Temple Trust Dining Facilities",
          content: "The Mandir Trust operates two major community dining setups:",
          table: {
            headers: ["Facility Name", "Meal Type & Menu", "Timings & Access"],
            rows: [
              ["Omkar Prasadalaya", "Full Satvik Thali (Chapatis, Dal, Subzi, Rice, Sweet Prasad)", "Lunch: 11:30 AM - 03:30 PM | Dinner: 07:00 PM - 09:30 PM (₹30 coupon)"],
              ["Sadhu & Yatri Annakshetra", "Hot Moong Dal Khichdi & Buttermilk Prasad", "Continuous throughout the day (Free / ₹10 coupon for general yatris)"],
              ["RO Water Filtration Stations", "Cold Filtered UV/RO Drinking Water", "18 automated water dispensers across Mandhata Island trails and ghats"],
            ],
          },
        },
        {
          title: "Local Food Culture & Recommended Specialties",
          content:
            "Omkareshwar is renowned for pure vegetarian traditional Malwi cuisine. Popular culinary specialties available in the town markets include piping hot Poha-Jalebi in the morning, authentic Dal-Bafla-Laddu cooked in pure cow ghee, and sweet fresh rabdi.",
        },
      ]}
      ctaButton={{
        label: "Book Prasadalaya Meal Coupon",
        href: "/booking/prasadalaya",
      }}
    />
  );
}
