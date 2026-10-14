import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Shayan Aarti Daan - Shri Omkareshwar Jyotirlinga",
  description: "Night worship, chaupar arrangement, and floral bed offering to Lord Shiva and Mata Parvati.",
};

export default function ShayanDaanPage() {
  return (
    <ContentPageTemplate
      title="Shayan Aarti & Bed Offering Daan"
      subtitle="Sponsoring the final divine night ritual of Lord Omkareshwar, including the traditional preparation of the dice board (Chaupar) and bed of blossoms."
      category="Donation"
      categoryHref="/donation"
      keyFacts={[
        { label: "Night Aarti Time", value: "Daily 08:30 PM to 09:30 PM", icon: "🌙" },
        { label: "Significance", value: "Divine Rest & Chaupar Game", icon: "🎲" },
        { label: "Offerings", value: "₹1,100 / ₹2,100 / ₹5,100", icon: "🪙" },
        { label: "Tax Exemption", value: "Section 80G Certified", icon: "🧾" },
      ]}
      sections={[
        {
          title: "The Mystery of the Night Chaupar Game",
          content:
            "A beloved legend of Shri Omkareshwar holds that every night, Lord Shiva and Goddess Parvati come together to play the game of Chaupar (dice) before resting. Every evening during Shayan Aarti, the priests arrange a soft cotton bed adorned with roses and jasmine, place a board of Chaupar with ivory-carved dice, and lock the sanctum. In the morning, the pieces are often found mystically displaced, signifying the Lord's presence.",
          bullets: [
            "Devotees sponsoring this seva receive the special privilege of witnessing the Shayan Aarti and singing the lullaby (Lori) hymns.",
            "Helps devotees achieve restful sleep, peace from insomnia, and marital harmony.",
          ],
        },
      ]}
      ctaButton={{
        label: "Contribute to Shayan Daan",
        href: "/donation/pay?category=Shayan+Aarti+Daan&amount=1100",
      }}
    />
  );
}
