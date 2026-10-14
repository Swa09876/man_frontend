import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Nanda Deepak (Akhand Jyoti) Seva - Shri Omkareshwar Jyotirlinga",
  description: "Offer pure cow ghee to sustain the eternal flame burning perpetually in the Garbhagriha.",
};

export default function NandaDeepakPage() {
  return (
    <ContentPageTemplate
      title="Nanda Deepak (Akhand Jyot) Seva"
      subtitle="Sponsoring pure Desi cow ghee for the eternal unbroken flame burning uninterruptedly inside the sanctum sanctorum of Bhagwan Omkareshwar."
      category="Donation"
      categoryHref="/donation"
      keyFacts={[
        { label: "Flame Continuity", value: "Perpetual (Akhand)", icon: "✨" },
        { label: "Offering", value: "Pure Desi Cow Ghee (Ghrit)", icon: "🪔" },
        { label: "Spiritual Benefit", value: "Dissolves Spiritual Ignorance", icon: "☀️" },
        { label: "Sponsorship", value: "₹501 / ₹1,100 / ₹3,100 / ₹11,000", icon: "🪙" },
      ]}
      sections={[
        {
          title: "Significance of the Eternal Flame",
          content:
            "The Nanda Deepak is the eternal lamp burning within the inner sanctum. Fire (Agni) is the living witness to all Vedic sacrifices. Supplying pure cow ghee to maintain this holy flame is praised in the Skanda Purana as an act that removes spiritual blindness, clears ancestral debt, and illuminates the path to inner awakening.",
          bullets: [
            "Pure A2 cow desi ghee sourced directly from certified Gaushalas is fed to the brass lamp day and night.",
            "Devotees can sponsor 1 month, 6 months, or 1 year of Akhand Jyot seva in their family Gotra.",
          ],
        },
      ]}
      ctaButton={{
        label: "Offer Nanda Deepak Ghee",
        href: "/donation/pay?category=Nanda+Deepak+(Akhand+Jyot)&amount=1100",
      }}
    />
  );
}
