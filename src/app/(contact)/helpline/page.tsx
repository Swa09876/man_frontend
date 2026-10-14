import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "24x7 Helpline & Emergency Contacts - Shri Omkareshwar Mandir Trust",
  description: "Official 24x7 devotee emergency helpline 8989998686, control room, police station, and ambulance directory.",
};

export default function HelplinePage() {
  return (
    <ContentPageTemplate
      title="24x7 Helpline & Emergency Assistance"
      subtitle="Dedicated toll-free and control room hotlines for immediate assistance, emergency health care, lost & found, and booking inquiries."
      category="Contact"
      categoryHref="/contact"
      keyFacts={[
        { label: "Main 24x7 Helpline", value: "8989998686", icon: "📞" },
        { label: "Medical Emergency", value: "108 / 8989998686", icon: "🚑" },
        { label: "Police Assistance", value: "100 / 07280-271222", icon: "🚓" },
        { label: "Disaster / River Rescue", value: "Ghat Control Cell", icon: "🛟" },
      ]}
      sections={[
        {
          title: "Mandir Trust Service Hotlines",
          content: "Use the following direct contact lines for departmental inquiries:",
          table: {
            headers: ["Department / Service", "Contact Number", "Operating Hours & Purpose"],
            rows: [
              ["Mandir Central Control Room", "8989998686", "24 Hours Daily • Central information, queue status, emergency aid"],
              ["VIP Shighra Darshan Cell", "8989998686 (Ext 1)", "06:00 AM - 09:00 PM • Slot confirmation, reprint pass assistance"],
              ["Pujan & Archak Office", "8989998686 (Ext 2)", "06:00 AM - 06:00 PM • Abhishek, Rudrabhishek & E-Aradhana coordination"],
              ["Vishramalaya Accommodations", "8989998686 (Ext 3)", "07:00 AM - 10:00 PM • Room bookings, check-in queries"],
              ["Donations & 80G Tax Certificates", "8989998686 (Ext 4)", "10:00 AM - 05:00 PM • UTR claim verification, 80G receipt queries"],
            ],
          },
        },
        {
          title: "Local Civil & Emergency Services",
          content: "Contact numbers of local administrative and law enforcement authorities in Omkareshwar:",
          table: {
            headers: ["Authority", "Location", "Phone Number"],
            rows: [
              ["Omkareshwar Police Station", "Near Nagar Parishad, Mainland", "07280-271222 / 112"],
              ["Sub-Divisional Magistrate (SDM)", "Administrative Complex, Punasa", "07280-271228"],
              ["Community Health Center (Hospital)", "Mortakka Road, Omkareshwar", "108 / 07280-271234"],
              ["Water Safety & Ghat Divers", "Nagar Ghat Post", "8989998686 (Ghat Cell)"],
            ],
          },
        },
      ]}
      ctaButton={{
        label: "Check Temple Darshan Timetable",
        href: "/admin-info/schedules",
      }}
    />
  );
}
