"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Faq.module.css";

const FAQS = [
  {
    category: "Darshan & Booking",
    question: "What are the temple opening hours and daily Darshan timings?",
    answer:
      "The temple opens at 04:30 AM every morning with Mangal Aarti and closes at 09:30 PM post Shayan Aarti. Darshan is open continuously throughout the day except during brief intervals for Madhyanha Bhog (12:20 PM - 01:15 PM) and Sayamkalin Shringar (04:00 PM - 04:30 PM).",
  },
  {
    category: "Darshan & Booking",
    question: "What is Shighra Darshan (VIP Express Entry) and how does it work?",
    answer:
      "Shighra Darshan is a dedicated express queue facility designed to assist devotees, families with senior citizens, and pilgrims with limited time. A nominal fee of ₹300 per devotee is charged, and verified passes can be booked online in 2-hour slots.",
  },
  {
    category: "Darshan & Booking",
    question: "Is there a dress code for entering the Garbhagriha for Abhishek?",
    answer:
      "Yes. Devotees participating in inner sanctum Abhishek worship must follow traditional modest attire. Men should wear clean traditional Dhoti-Kurta or Kurta-Pajama. Women should wear Saree or Salwar-Kameez. Western shorts and sleeveless clothing are not allowed inside the sanctum.",
  },
  {
    category: "Puja & Rituals",
    question: "How can I book an Abhishek or Rudrabhishek ritual?",
    answer:
      "You can book authentic Vedic pujas directly through our portal under Services > Online Puja Booking. Choose your category, select an auspicious date, provide your family Gotra and names for the Sankalpam, and download your confirmed ritual pass.",
  },
  {
    category: "Puja & Rituals",
    question: "What is E-Aradhana and how do I receive Prasad?",
    answer:
      "E-Aradhana allows devotees who cannot physically visit Omkareshwar to have sacred rituals performed in their name. A temple priest chants your family Gotra and sankalp during morning worship, and consecrated Prasad (Vibhuti, Bilvapatra, and dry fruits) is dispatched via Speed Post to your home.",
  },
  {
    category: "Donations & 80G",
    question: "Are donations made to the Mandir Trust eligible for Income Tax exemption?",
    answer:
      "Yes! All donations to Shri Omkareshwar Mandir Trust qualify for 50% Tax Exemption under Section 80G(5)(vi) of the Income Tax Act, 1961 (Unique Registration Number: AAATS3291PF20214). Formal 80G receipts with Form 10BE compliance are generated instantly upon online donation.",
  },
  {
    category: "Donations & 80G",
    question: "I made a direct UPI / NEFT bank transfer. How can I get my 80G receipt?",
    answer:
      "Please visit our Claim 80G Receipt page (/donation/claim-80g), enter your bank UTR transaction reference number, donation date, PAN number, and contact details. Our automated verification system will validate the credit and issue your official tax exemption certificate.",
  },
  {
    category: "Mahaprasad & Shipping",
    question: "How is Laddu Mahaprasad delivered to homes across India?",
    answer:
      "The holy Pure Desi Ghee Besan Laddu Mahaprasad is prepared in the temple Prasadalaya, consecrated before Lord Shiva, packed in food-grade airtight containers, and dispatched daily via India Post Speed Post. Consignment tracking numbers are sent by SMS within 24 hours.",
  },
  {
    category: "Accommodation & Amenities",
    question: "Where can pilgrims stay in Omkareshwar?",
    answer:
      "The Mandir Trust operates Shreeji Vishramalaya near the New Bus Stand offering clean, affordable AC Deluxe rooms, Non-AC family rooms, and daytime resting halls starting at ₹50 to ₹100 per person. Rooms can be booked online or registered at counter.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span className={styles.current}>Frequently Asked Questions</span>
          </div>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Find clear answers to common questions about temple darshan, booking procedures, puja rites, donations, and travel guidelines.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.faqList}>
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqCard} ${openIndex === index ? styles.faqOpen : ""}`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className={styles.questionBtn}
                aria-expanded={openIndex === index}
              >
                <div className={styles.qLeft}>
                  <span className={styles.categoryBadge}>{faq.category}</span>
                  <span className={styles.questionText}>{faq.question}</span>
                </div>
                <span className={styles.toggleIcon}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className={styles.answerBox}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.helpFooter}>
          <h3>Still have questions?</h3>
          <p>Our devotee support helpline is active 24 hours a day, 7 days a week.</p>
          <a href="tel:8989998686" className={styles.callBtn}>
            📞 Call Helpline 8989998686
          </a>
        </div>
      </div>
    </div>
  );
}
