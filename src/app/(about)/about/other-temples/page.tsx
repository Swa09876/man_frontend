import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Other Temples of Omkareshwar - Mamleshwar, Gauri Somnath & Siddhanath",
  description: "Explore the sacred shrines of Mamleshwar Jyotirlinga, Gauri Somnath, Siddhanath temple, and Rinmukteshwar.",
};

export default function OtherTemplesPage() {
  return (
    <ContentPageTemplate
      title="Ancient & Sacred Temples of Omkareshwar"
      subtitle="Beyond the main sanctum, Mandhata island and the mainland south bank house historic shrines dating from the 10th century Parmar era."
      category="About"
      categoryHref="/about/main-temple"
      keyFacts={[
        { label: "Partner Shrine", value: "Shri Mamleshwar (Amareshwar)", icon: "🛕" },
        { label: "Colossal Lingam", value: "Gauri Somnath (6 Feet Tall)", icon: "🗿" },
        { label: "Architectural Gem", value: "Siddhanath Temple Plateau", icon: "🏛️" },
        { label: "Debt Liberation", value: "Rinmukteshwar Mahadev", icon: "🪙" },
      ]}
      sections={[
        {
          title: "Shri Mamleshwar (Amareshwar) Temple",
          content:
            "Located on the south mainland bank directly opposite Omkareshwar, Mamleshwar is considered an integral twin of the Omkareshwar Jyotirlinga. Puranic tradition states that the Jyotirlinga originally manifested as one and split into two forms — Omkareshwar (on the island) and Mamleshwar (on the mainland). A pilgrimage to Omkareshwar is considered complete only after taking darshan of both shrines.",
          bullets: [
            "Protected national monument with stone-inscribed Mahimna Stotra carvings on its inner sanctum walls.",
            "Priests have performed uninterrupted daily Mahimna Stotra recitations here since the 11th century under Holkar royal patronage.",
          ],
        },
        {
          title: "Prominent Shrines & Historical Monuments",
          content: "Key holy temples to visit during your Omkareshwar parikrama:",
          table: {
            headers: ["Temple Name", "Location", "Key Highlights & Spiritual Significance"],
            rows: [
              ["Gauri Somnath Mandir", "Mandhata Hill summit", "Gigantic 6-foot tall black polished lingam; giant Nandi bull statue."],
              ["Siddhanath Temple", "Island Plateau", "10th-century Parmara architecture; friezes of war elephants and apsaras."],
              ["Rinmukteshwar Temple", "Sangam confluence", "Devotees offer yellow gram dal to liberate themselves from spiritual and karmic debts."],
              ["Kedareshwar Temple", "Mainland Riverbank", "Resembles the architecture of Himalayan Kedarnath; holy river ghat steps."],
              ["24 Avatars Temple", "Mainland Bazaar", "11th-century group of Hindu and Jain shrines featuring ornate spire shikharas."],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Book Heritage Tour of All Temples",
        href: "/services/heritage-walk",
      }}
    />
  );
}
