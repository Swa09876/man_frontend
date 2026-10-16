"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./DevotionalServicesCarousel.module.css";

interface ServiceItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  link: string;
  actionText: string;
  badge?: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "bhasmaarti",
    title: "Bhasmaarti",
    image: "/images/service-aarti.jpg",
    alt: "Mangal Aarti and Bhasmaarti at Shri Omkareshwar Jyotirlinga",
    description:
      "The sacred Aarti of Shri Omkareshwar Jyotirlinga is one of the most unique and powerful rituals dedicated to Lord Shiva. Performed daily at 04:30 AM, it is the first aarti of the day and holds immense spiritual significance.",
    link: "/darshan/daily-darshan",
    actionText: "View Aarti Schedule",
    badge: "Daily 04:30 AM",
  },
  {
    id: "sheeghra-darshan",
    title: "Sheeghra Darshan",
    image: "/images/service-darshan.jpg",
    alt: "Shri Omkareshwar Sheeghra Darshan VIP Pass",
    description:
      "Sheeghra Darshan is a special pass that allows you to visit the Shri Omkareshwar Jyotirlinga quickly. By booking this ticket, you can have darshan without waiting in long queues.",
    link: "/darshan/vishesh-darshan",
    actionText: "Book Darshan Pass",
    badge: "₹300 / Pass",
  },
  {
    id: "donation",
    title: "Donation",
    image: "/images/service-donation.jpg",
    alt: "Temple Daan Patra Donation Box for Shri Omkareshwar Trust",
    description:
      "Offer your humble contribution to Omkareshwar Temple and be a part of preserving this sacred heritage. Your donations help in daily Annakshetra meals, Akhand Deepak, and community services associated with the temple.",
    link: "/donation",
    actionText: "Make a Donation",
    badge: "80G Tax Exemption",
  },
  {
    id: "pujan-abhishek",
    title: "Pujan/Abhishek",
    image: "/images/service-abhishek.jpg",
    alt: "Vedic Jalabhishek and Panchamrit Puja ritual by priests",
    description:
      "Experience the divine ritual of Abhishek at Shri Omkareshwar Jyotirlinga, where devotees can personally offer sacred waters and adornments to Lord Shiva, seeking his blessings for prosperity and spiritual upliftment.",
    link: "/services/abhishek-puja",
    actionText: "Book Puja Online",
    badge: "Vedic Brahmins",
  },
  {
    id: "atithi-niwas",
    title: "Atithi Niwas",
    image: "/images/service-stay.jpg",
    alt: "Shri Omkareshwar Atithi Niwas and Vishramalaya Guest House",
    description:
      "Shri Omkareshwar Mandir Trust operates clean pilgrim guest houses / Atithi Niwas — providing comfortable and affordable accommodation to devotees visiting for the sacred darshan of Shri Omkareshwar Jyotirlinga.",
    link: "/booking/vishramalaya",
    actionText: "Check Availability",
    badge: "Trust Managed",
  },
  {
    id: "laddu-mahaprasad",
    title: "Laddu Mahaprasad",
    image: "/images/service-prasad.jpg",
    alt: "Pure Desi Ghee Besan Laddu Mahaprasad offered to Bhagwan Omkareshwar",
    description:
      "Sanctified pure Besan Laddu Mahaprasad prepared with pure Desi Ghee and offered in the sanctum sanctorum. Safely delivered to your doorstep across India via Speed Post with Mandir Trust seal.",
    link: "/prasad/laddu-mahaprasad",
    actionText: "Order Mahaprasad",
    badge: "Pure Desi Ghee",
  },
];

export const DevotionalServicesCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 320;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.servicesSection} aria-label="Temple Devotional Services">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeDot}></span>
            <span>DEVOTEE SERVICES</span>
          </div>
          <h2 className="section-title">Temple Darshan &amp; Devotional Services</h2>
          <p className="section-subtitle">
            Plan your pilgrimage with authentic services provided directly by Shri Omkareshwar Mandir Trust.
          </p>
        </div>

        {/* Carousel Container */}
        <div className={styles.carouselWrapper}>
          {/* Left Arrow Button */}
          <button
            type="button"
            className={`${styles.navButton} ${styles.prevButton} ${
              !canScrollLeft ? styles.buttonDisabled : ""
            }`}
            onClick={() => handleScroll("left")}
            aria-label="Previous services"
            disabled={!canScrollLeft}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Scrollable Track */}
          <div className={styles.carouselTrack} ref={scrollContainerRef}>
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                {/* 1. Centered Title at Top */}
                <h3 className={styles.cardTitle}>{service.title}</h3>

                {/* 2. Rounded Photo Image */}
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px"
                    className={styles.cardImage}
                  />
                  {service.badge && (
                    <span className={styles.imageBadge}>{service.badge}</span>
                  )}
                </div>

                {/* 3. Description Text */}
                <p className={styles.cardDescription}>{service.description}</p>

                {/* 4. Action Button */}
                <div className={styles.cardActionWrapper}>
                  <Link href={service.link} className={styles.actionLink}>
                    <span>{service.actionText}</span>
                    <span className={styles.actionArrow}>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className={`${styles.navButton} ${styles.nextButton} ${
              !canScrollRight ? styles.buttonDisabled : ""
            }`}
            onClick={() => handleScroll("right")}
            aria-label="Next services"
            disabled={!canScrollRight}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
