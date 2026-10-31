import React from "react";
import { ContentPageTemplate } from "@/components/common/ContentPageTemplate";

export const metadata = {
  title: "Temple Daily Schedules & Aarti Timetable - Shri Omkareshwar",
  description: "Official opening hours, Mangal Aarti, Rajbhog, Shringar, and Shayan Aarti timetable of Shri Omkareshwar Jyotirlinga.",
};

export default function SchedulesPage() {
  return (
    <ContentPageTemplate
      title="Daily Aarti, Darshan & Temple Schedule"
      subtitle="The sacred daily cycle of worship at Shri Omkareshwar Jyotirlinga, preserved unchanged through centuries of Agamic tradition."
      category="Admin"
      categoryHref="/admin-info/administration"
      keyFacts={[
        { label: "Temple Opening", value: "04:30 AM Every Morning", icon: "🌅" },
        { label: "Darshan Closing", value: "09:30 PM (Post Shayan Aarti)", icon: "🌙" },
        { label: "Daily Aartis", value: "Three Major Aartis Daily", icon: "🔔" },
        { label: "Helpline", value: "Control Room: 8770473325", icon: "📞" },
      ]}
      sections={[
        {
          title: "Complete 24-Hour Timetable",
          content: "Please note that the sanctum doors are briefly closed during Bhog offerings and ornamentation:",
          table: {
            headers: ["Time Window", "Sacred Ritual & Ceremony", "Darshan Availability"],
            rows: [
              ["04:30 AM - 05:00 AM", "Mangal Aarti & Morning Bhog", "Temple Gates Open; Priests Perform Aarti"],
              ["05:00 AM - 12:20 PM", "Mangal Darshan & Abhishek Pujan", "Open for General & VIP Shighra Darshan"],
              ["12:20 PM - 01:15 PM", "Madhyanha Rajbhog Offering", "Sanctum Doors Closed for Lord's Feast"],
              ["01:15 PM - 04:00 PM", "Madhyanha Darshan & General Pujan", "Open for Devotee Darshan"],
              ["04:00 PM - 04:30 PM", "Sayamkalin Shringar & Floral Adornment", "Sanctum Closed for Royal Ornamentation"],
              ["04:30 PM - 08:30 PM", "Evening Darshan & River Aarti", "Open for Darshan (Ghat Aarti at 07:00 PM)"],
              ["08:30 PM - 09:30 PM", "Shayan Aarti & Chaupar Board Offering", "Final Evening Aarti; Temple Closed at 09:30 PM"],
            ],
          },
        },
        {
          title: "Important Notes for Devotees",
          content:
            "During peak festivals (Maha Shivratri and Shravan Somwar), temple opening hours are extended continuously throughout the night. Entry queues may be halted 30 minutes before closing to allow waiting pilgrims inside to complete their darshan.",
        },
      ]}
      ctaButton={{
        label: "Book Shighra Darshan Slot",
        href: "/booking/darshan",
      }}
    />
  );
}
