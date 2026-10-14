import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Main Temple of Shri Omkareshwar - History, Architecture & Sanctum",
  description: "Comprehensive history, Nagara architectural style, Garbhagriha layout, and sacred lingam of Shri Omkareshwar Jyotirlinga.",
};

export default function MainTemplePage() {
  return (
    <ContentPageTemplate
      title="The Main Temple of Shri Omkareshwar"
      subtitle="The Fourth Jyotirlinga among the sacred Dvadasa Jyotirlinga shrines of Lord Shiva, presiding majestically on the sacred island of Mandhata."
      category="About"
      categoryHref="/about/main-temple"
      keyFacts={[
        { label: "Jyotirlinga Rank", value: "4th Sacred Jyotirlinga", icon: "🔱" },
        { label: "Temple Style", value: "Nagara Hindu Architecture", icon: "🏛️" },
        { label: "Temple Levels", value: "Five Multi-Tiered Storeys", icon: "🏢" },
        { label: "Sacred Island", value: "Mandhata (Omkar Parvat)", icon: "⛰️" },
      ]}
      sections={[
        {
          title: "Puranic Origin & Historical Glory",
          content:
            "Shri Omkareshwar Jyotirlinga is situated on the Mandhata island (also called Shivpuri) in the Khandwa district of Madhya Pradesh. The island itself is shaped naturally in the sacred Hindu symbol 'ॐ' by the bifurcation of the holy river Narmada into two streams — Narmada and Kaveri. According to the Shiva Purana, King Mandhata performed intense penance here, pleased by which Lord Shiva appeared and manifested as this divine Jyotirlinga.",
          bullets: [
            "Adi Shankaracharya met his guru Govinda Bhagavatpada in a cave on this very island, beginning the revival of Advaita Vedanta philosophy.",
            "The Jyotirlinga is uniquely situated naturally in the bedrock of the sanctum floor, surrounded by continuous consecrated water springs.",
            "The sanctum sanctorum has never had an artificial idol base (Pithika); the Shivalinga is Swayambhu (self-manifested).",
          ],
        },
        {
          title: "Architectural Grandeur Across Five Levels",
          content: "The main temple is an imposing multi-tiered stone complex featuring intricate carvings on pillars, ceilings, and facades across five storeys:",
          table: {
            headers: ["Storey / Level", "Presiding Deity", "Architectural Features"],
            rows: [
              ["Ground Level (Garbhagriha)", "Shri Omkareshwar Jyotirlinga", "Sacred bedrock sanctum, silver umbrella & naivedya peeth"],
              ["First Floor", "Mahakaleshwar Mahadev", "Grand stone pillars with carved dancing Apsaras & Ganas"],
              ["Second Floor", "Siddhanath Mahadev", "Spacious open sabhamandap with panoramic river view"],
              ["Third Floor", "Gupteshwar Mahadev", "Intimate meditation shrine for ascetic seekers"],
              ["Topmost Level", "Dhwaja & Kalash Shikhara", "Gilded gold Kalash and royal orange victory banner"],
            ],
          },
        },
        {
          title: "Daily Temple Rituals & Darshan Guidelines",
          content:
            "Darshan is open every day from 5:00 AM to 9:30 PM, with brief intermissions for the sacred Rajbhog offering (12:20 PM - 1:15 PM) and evening Shringar (4:00 PM - 4:30 PM). Devotees can enter through the free general queue or utilize the Shighra Darshan VIP express path for expedited access during peak pilgrimage festivals.",
        },
      ]}
      ctaButton={{
        label: "Book Shighra Darshan Ticket",
        href: "/darshan/vishesh-darshan",
      }}
    />
  );
}
