import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Temple Administration & Governance - Shri Omkareshwar Jyotirlinga",
  description: "Administrative structure, key executive officers, and trust governance of Shri Omkareshwar Mandir Trust.",
};

export default function AdministrationPage() {
  return (
    <ContentPageTemplate
      title="Shri Omkareshwar Mandir Administration"
      subtitle="Administrative body governing the temple operations, devotee welfare, security, asset preservation, and religious traditions under the Madhya Pradesh Public Trusts Act."
      category="Admin"
      categoryHref="/admin-info/administration"
      keyFacts={[
        { label: "Governing Body", value: "Shri Omkareshwar Mandir Trust", icon: "🏛️" },
        { label: "Head Office", value: "Mandhata Island, Omkareshwar", icon: "📍" },
        { label: "Control Room", value: "24x7 Helpline: 8989998686", icon: "📞" },
        { label: "Jurisdiction", value: "District Administration Khandwa", icon: "⚖️" },
      ]}
      sections={[
        {
          title: "Executive Officers & Key Functionaries",
          content: "The administration of the temple is overseen by administrative officers and hereditary trustees:",
          table: {
            headers: ["Designation", "Officer Name", "Role & Portfolio"],
            rows: [
              ["Managing Trustee", "Rao Pushpendra Singh Chauhan", "Hereditary Managing Trustee, Rao of Mandhata, presiding over traditional rites and ceremonies."],
              ["President / Trustee", "District Collector & Magistrate, Khandwa (IAS)", "Executive head responsible for law & order, government coordination, and public infrastructure."],
              ["Administrator / CEO", "Sub-Divisional Magistrate (SDM), Punasa", "Day-to-day operations, queue management, staff coordination, and project execution."],
              ["Superintendent of Police", "SP, District Khandwa (IPS)", "Security apparatus, biometric gate surveillance, and ghat safety force deployment."],
              ["Chief Executive Priest", "Head Archak, Sabhamandap", "Vedic ritual fidelity, Panchang calculation, and priest scheduling."],
            ],
          },
        },
        {
          title: "Administrative Objectives & Public Accountability",
          content:
            "The Mandir Trust functions with complete financial and administrative transparency. Accounts are audited annually by certified Chartered Accountants and submitted to the Registrar of Public Trusts. All online and offline donations are catalogued with automated computerized receipts and Section 80G tax exemptions.",
        },
      ]}
      ctaButton={{
        label: "Contact Mandir Control Room",
        href: "/contact",
      }}
    />
  );
}
