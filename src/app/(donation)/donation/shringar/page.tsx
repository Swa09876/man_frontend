import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Shringar Daan Seva - Shri Omkareshwar Jyotirlinga",
  description: "Contribute towards daily floral decoration and Sandhya Shringar of Lord Omkareshwar.",
};

export default function ShringarDonationPage() {
  return (
    <ContentPageTemplate
      title="Shringar & Pushpa Daan Seva"
      subtitle="Sponsor the divine adornment of Lord Omkareshwar with fresh fragrant flowers, chandan, bilva leaves, and royal evening ornaments."
      category="Donation"
      categoryHref="/donation"
      keyFacts={[
        { label: "Timing", value: "Daily 04:00 PM to 04:30 PM", icon: "⏰" },
        { label: "Tax Exemption", value: "50% Under Section 80G", icon: "🧾" },
        { label: "Seva Offerings", value: "₹1,100 / ₹2,100 / ₹5,100", icon: "🪙" },
        { label: "Prasad", value: "Blessed Pushpa & Vibhuti", icon: "🌺" },
      ]}
      sections={[
        {
          title: "The Divine Grace of Shiva Shringar",
          content:
            "Every evening from 4:00 PM to 4:30 PM, the Garbhagriha is closed briefly for the elaborate Sayamkalin Shringar. The sanctum priests decorate the Jyotirlinga with thousands of fresh Bilvapatra leaves, lotus garlands, marigolds, and silver crowns. Sponsoring this seva brings boundless joy, prosperity, and peace to the devotee's household.",
          bullets: [
            "Samanya Shringar (₹1,100): Fresh floral garlands and sacred chandan paste offering.",
            "Vishesh Shringar (₹2,100): Full altar adornment with seasonal blooms and special bilva archana.",
            "Maha Parv Shringar (₹5,100): Grand festival decoration on Somwar, Pradosh, or Shivratri.",
          ],
        },
      ]}
      ctaButton={{
        label: "Contribute Shringar Seva Online",
        href: "/donation/pay?category=Shringar+%26+Pushpa+Seva&amount=1100",
      }}
    />
  );
}
