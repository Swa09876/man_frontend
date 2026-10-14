import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Holy River Narmada (Reva) - Mythology, Confluence & Ghats",
  description: "Divine origin of River Narmada, its relationship with Lord Shiva, and the sacred sangam at Omkareshwar.",
};

export default function NarmadaPage() {
  return (
    <ContentPageTemplate
      title="Sacred River Narmada (Maa Reva)"
      subtitle="The eternal, holy river born of Lord Shiva's divine sweat and penance, revered as the lifelines of central India and mother of all Narmadeshwar Shivlings."
      category="About"
      categoryHref="/about/main-temple"
      keyFacts={[
        { label: "Origin", value: "Amarkantak, Maikal Hills", icon: "🏔️" },
        { label: "River Length", value: "1,312 km to Arabian Sea", icon: "🌊" },
        { label: "Special Status", value: "Kankad Kankad Shankar", icon: "🪨" },
        { label: "Holy Confluence", value: "Narmada & Kaveri Sangam", icon: "✨" },
      ]}
      sections={[
        {
          title: "Puranic Origin of River Narmada",
          content:
            "According to the Matsya Purana, when Lord Shiva sat in deep meditation atop the Maikal mountains, beads of celestial perspiration flowed from his divine brow, condensing into the pure, joyous river known as 'Narmada' ('Narma' meaning joy, 'Da' meaning giver). Shiva granted her the boon that every pebble and stone rolled smooth within her currents would forever carry his living presence as a holy Shivling.",
          bullets: [
            "Unlike other rivers that require bathing to attain purification, merely seeing or remembering Maa Narmada washes away all sins.",
            "At Omkareshwar, a tributary called Kaveri joins Narmada, creating a sacred Sangam where devotees perform holy snan and ancestral tarpan.",
            "Strict environmental guidelines are enforced by the Mandir Trust to maintain ghat cleanliness and water purity.",
          ],
        },
      ]}
      ctaButton={{
        label: "Book Maa Narmada Pujan Seva",
        href: "/services/narmada-pujan",
      }}
    />
  );
}
