import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Board of Trustees - Shri Omkareshwar Mandir Trust",
  description: "Learn about the Board of Trustees, historical lineage of Rao of Mandhata, and trust constitution.",
};

export default function TrusteesPage() {
  return (
    <ContentPageTemplate
      title="Board of Trustees - Shri Omkareshwar Mandir Trust"
      subtitle="Guiding the preservation of temple heritage and pilgrim service with devotion, historical responsibility, and administrative integrity."
      category="Admin"
      categoryHref="/admin-info/administration"
      keyFacts={[
        { label: "Trust Type", value: "Registered Public Religious Trust", icon: "📜" },
        { label: "Registration Act", value: "M.P. Public Trusts Act, 1951", icon: "⚖️" },
        { label: "Headquarters", value: "Omkareshwar Mandhata, MP", icon: "🏛️" },
        { label: "Official Contact", value: "info@shriomkareshwar.org", icon: "✉️" },
      ]}
      sections={[
        {
          title: "Hereditary Lineage of Mandhata",
          content:
            "The custodianship of Shri Omkareshwar has been maintained across centuries by the royal family of Mandhata (Bhilala Rajputs and Rao of Mandhata). The Managing Trustee, Rao Pushpendra Singh Chauhan, continues the sacred family tradition of conducting the traditional Raj Tilak, royal Monday processions, and ceremonial worship as established during the Parmar and Holkar dynasties.",
        },
        {
          title: "Current Board Members & Official Trustees",
          content: "The Trust Board comprises both government representatives and hereditary community custodians:",
          table: {
            headers: ["Name & Profile", "Designation in Trust", "Official Affiliation"],
            rows: [
              ["Rao Pushpendra Singh Chauhan", "Managing Trustee", "Rao of Mandhata Royal Dynasty"],
              ["District Magistrate & Collector", "Ex-Officio Trustee", "Collectorate, District Khandwa, M.P."],
              ["Sub-Divisional Officer (Civil)", "Chief Executive Officer / Trustee", "SDM Punasa / Omkareshwar Region"],
              ["Chief Municipal Officer (CMO)", "Trustee Member", "Nagar Parishad Omkareshwar"],
              ["Elected Devotee Representatives", "Nominated Members", "Local Merchant & Priest Representatives"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Devotee Grievance & Feedback",
        href: "/feedback",
      }}
    />
  );
}
