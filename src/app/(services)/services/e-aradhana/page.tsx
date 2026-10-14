import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "E-Aradhana Remote Puja & Prasad Service - Shri Omkareshwar Jyotirlinga",
  description: "Perform sacred Vedic pujas remotely from anywhere in the world with Prasad delivered to your doorstep.",
};

export default function EAradhanaPage() {
  return (
    <ContentPageTemplate
      title="E-Aradhana Online Sankalp Seva"
      subtitle="For devotees across India and around the globe who cannot visit in person. Temple priests perform authentic Vedic rituals with your family Gotra and send blessed Prasad to your home."
      category="Services"
      categoryHref="/services/abhishek-puja"
      keyFacts={[
        { label: "Ritual Mode", value: "Remote Vedic Sankalpam", icon: "🌐" },
        { label: "Prasad Delivery", value: "Via Speed Post / Courier", icon: "📦" },
        { label: "Dakshina", value: "₹501 to ₹5,100", icon: "🪙" },
        { label: "Live Updates", value: "SMS / WhatsApp Video Link", icon: "📱" },
      ]}
      sections={[
        {
          title: "How E-Aradhana Works",
          content:
            "Through E-Aradhana, geographical distance is no barrier to Shiva's grace. On your chosen auspicious day (Birthday, Anniversary, Masik Shivratri, Pradosh), a dedicated Mandir priest announces your Gotra, Nakshatra, and full names before the Jyotirlinga during the sacred morning worship.",
          bullets: [
            "Step 1: Choose your seva and submit family details (names, Gotra, birth star).",
            "Step 2: Priest performs ritual in the Sabhamandap and chants your personal sankalpam.",
            "Step 3: A sacred Prasad Box (Vibhuti, consecrated Bilvapatra, Rudraksha, and dry prasad) is dispatched to your registered address.",
          ],
        },
        {
          title: "Available E-Aradhana Sevas",
          content: "Select from these consecrated remote options:",
          table: {
            headers: ["Seva Option", "Frequency", "Inclusions", "Dakshina (₹)"],
            rows: [
              ["Daily Sankalpam E-Aradhana", "Single Day", "Personal Sankalp + Prasad", "₹501"],
              ["Monthly Masik Shivratri Pujan", "On Shivratri", "Abhishek + Dry Fruits Prasad Box", "₹2,100"],
              ["Annual Birthday / Anniversary Seva", "Scheduled Date", "Special Bilva Archana + Silver Coin", "₹5,100"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Book E-Aradhana Sankalp Now",
        href: "/booking/puja?category=E-Aradhana&service=Daily+Sankalpam+E-Aradhana",
      }}
    />
  );
}
