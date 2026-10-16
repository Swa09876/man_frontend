import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { TEMPLE_INFO } from "@/lib/constants";
import { DevotionalServicesCarousel } from "@/components/home/DevotionalServicesCarousel";

export const metadata = {
  title: "Shri Omkareshwar Jyotirlinga Official Website | Mandhata, Madhya Pradesh",
  description:
    "Official portal of Shri Omkareshwar Jyotirlinga Mandir Trust. Book Shighra Darshan, Vedic Abhishek Puja, Desi Ghee Laddu Mahaprasad, and Annakshetra donation.",
};

export default function HomePage() {
  return (
    <div className={styles.homeWrapper}>
      {/* 1. Temple Banner Showcase - Real Photographic Hero View with Name Plaque */}
      <section className={styles.templeShowcaseSection} aria-label="Shri Omkareshwar Jyotirlinga, Omkareshwar">
        <div className={styles.bannerContainer}>
          <div className={styles.bannerImageWrapper}>
            <Image
              src="/images/omkareshwar-main-banner.jpg"
              alt="Shri Omkareshwar Jyotirlinga, Omkareshwar"
              width={1920}
              height={850}
              priority
              className={styles.templeBannerImage}
            />
            {/* Elegant Translucent Name Plaque exactly as indicated by the user's reference screenshot */}
            <div className={styles.templeNamePlaque}>
              <h1 className={styles.plaqueTitle}>
                Shri Omkareshwar Jyotirlinga, Omkareshwar
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Temple Statistics & Daily Live Darshan */}
      <section id="temple-stats" className={styles.statsSection} aria-label="Temple Statistics & Live Darshan">
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>1,50,000+</div>
              <div className={styles.statLabel}>Daily Visitors</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>2000+</div>
              <div className={styles.statLabel}>Years of History</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>5</div>
              <div className={styles.statLabel}>Daily Aartis</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>53</div>
              <div className={styles.statLabel}>Temples in Premises</div>
            </div>
          </div>

          <div className={styles.statsActionWrapper}>
            <Link href="/darshan/live" className={styles.liveDarshanBtn}>
              <span>Daily Live Darshan</span>
              <span className={styles.liveDarshanArrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Welcome to Omkareshwar Section */}
      <section id="welcome" className={styles.welcomeSection}>
        <div className="container">
          <div className={styles.welcomeGrid}>
            <div className={styles.welcomeTextCol}>
              <div className={styles.sectionBadge}>
                <span className={styles.badgeDot}></span>
                <span>SACRED ABODE</span>
              </div>
              <h2 className={styles.welcomeHeading}>Discover the Sacred Home of Lord Shiva</h2>
              <p className={styles.welcomeLead}>
                Located on the sacred island of Mandhata along the Narmada River, Omkareshwar is a
                revered destination for devotees seeking spiritual connection, blessings, and a deeper
                experience of India's sacred heritage.
              </p>

              <div className={styles.welcomeFeatures}>
                <div className={styles.welcomeFeatureItem}>
                  <div className={styles.featureIcon}>🕉️</div>
                  <div>
                    <h4>Island Formed in the Shape of 'ॐ'</h4>
                    <p>Maa Narmada naturally flows around the island carving the eternal Pranava mantra 'Om'.</p>
                  </div>
                </div>

                <div className={styles.welcomeFeatureItem}>
                  <div className={styles.featureIcon}>🔱</div>
                  <div>
                    <h4>Two Sanctuaries, One Jyotirlinga</h4>
                    <p>Visiting both Shri Omkareshwar and the southern Shri Mamleshwar completes the sacred pilgrimage.</p>
                  </div>
                </div>

                <div className={styles.welcomeFeatureItem}>
                  <div className={styles.featureIcon}>🪔</div>
                  <div>
                    <h4>Adi Shankaracharya Cave</h4>
                    <p>Revered site of Govinda Bhagavatpada Guha where Jagadguru Adi Shankara received spiritual Diksha.</p>
                  </div>
                </div>
              </div>

              <div className={styles.welcomeActions}>
                <Link href="/about/main-temple" className="btn-primary">
                  <span>Learn More About Mandir</span>
                  <span>→</span>
                </Link>
                <Link href="/how-to-reach" className="btn-secondary">
                  <span>How to Reach</span>
                </Link>
              </div>
            </div>

            <div className={styles.welcomeImageCol}>
              <div className={styles.imageFrameWrapper}>
                <div className={styles.decorativeCornerTL}></div>
                <div className={styles.decorativeCornerBR}></div>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/omkareshwar-ghat.jpg"
                    alt="Holy Narmada River Ghats at Shri Omkareshwar Temple"
                    width={700}
                    height={460}
                    className={styles.welcomeImg}
                    priority
                  />
                  <div className={styles.imageBadge}>
                    <span className={styles.badgeLocation}>Mandhata Island • Narmada Tat</span>
                    <span className={styles.badgeSub}>Shri Omkareshwar Teerth Kshetra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Prominent Darshan and Services Carousel matching reference design */}
      <DevotionalServicesCarousel />

      {/* 5. Live Darshan & Daily Timetable */}
      <section className={styles.liveSection}>
        <div className="container">
          <div className={styles.liveGrid}>
            {/* Live Video Embed */}
            <div className={styles.videoCol}>
              <div className={styles.videoHeader}>
                <span className={styles.liveIndicator}>🔴 LIVE DARSHAN</span>
                <h3 className={styles.videoTitle}>Live Darshan of Shri Omkareshwar</h3>
              </div>
              <div className={styles.iframeWrapper}>
                <iframe
                  src={TEMPLE_INFO.liveStreamEmbed}
                  title="Shri Omkareshwar Live Darshan"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.iframe}
                ></iframe>
              </div>
              <p className={styles.streamNotice}>
                * Official live streaming broadcast daily during Mandir operational hours.
              </p>
            </div>

            {/* Timetable & Darshan Schedule */}
            <div className={styles.scheduleCol}>
              <div className={styles.sectionBadge}>
                <span className={styles.badgeDot}></span>
                <span>DAILY TIMINGS</span>
              </div>
              <h3 className={styles.scheduleHeading}>Daily Darshan Timetable</h3>
              <div className={styles.scheduleTable}>
                <div className={styles.tableRowHeader}>
                  <span>Session</span>
                  <span>Start</span>
                  <span>End</span>
                </div>
                <div className={styles.tableRow}>
                  <strong>Morning Session (Mangal Darshan)</strong>
                  <span>05:30 AM</span>
                  <span>12:20 PM</span>
                </div>
                <div className={styles.tableRow}>
                  <strong>Afternoon Session (Madhyahna)</strong>
                  <span>01:15 PM</span>
                  <span>04:00 PM</span>
                </div>
                <div className={styles.tableRow}>
                  <strong>Evening Session (Sandhya & Shayan)</strong>
                  <span>04:45 PM</span>
                  <span>08:30 PM</span>
                </div>
              </div>

              <div className={styles.darshanSlotBox}>
                <h4>Sabhamandap Sanctity</h4>
                <p>
                  As per timeless Shaiva traditions, devotees are permitted Sabhamandap darshan. Direct touching of the sacred Jyotirlinga is prohibited to maintain its ancient sanctity.
                </p>
                <Link href="/booking/availability" className={styles.checkSlotBtn}>
                  <span>Check Slot Availability</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Devotional Image Gallery */}
      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeDot}></span>
              <span>SACRED DARSHAN</span>
            </div>
            <h2 className="section-title">Devotional Gallery of Shri Omkareshwar</h2>
            <p className="section-subtitle">
              Visual glimpses of the timeless temple architecture, holy Narmada ghats, and evening Maha Aarti.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {/* Gallery Item 1 */}
            <div className={styles.galleryCard}>
              <div className={styles.galleryImgWrap}>
                <Image
                  src="/images/omkareshwar-ghat.jpg"
                  alt="Holy Narmada River Ghats at Shri Omkareshwar"
                  width={600}
                  height={380}
                  className={styles.galleryImg}
                />
              </div>
              <div className={styles.galleryInfo}>
                <h4>Sacred Narmada Ghats & Snan Steps</h4>
                <p>Pilgrim ghats where devotees take holy bath before entering the sanctum.</p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className={styles.galleryCard}>
              <div className={styles.galleryImgWrap}>
                <Image
                  src="/images/omkareshwar-aarti.jpg"
                  alt="Evening Maha Aarti at Narmada Ghat"
                  width={600}
                  height={380}
                  className={styles.galleryImg}
                />
              </div>
              <div className={styles.galleryInfo}>
                <h4>Evening Narmada Maha Aarti</h4>
                <p>Grand evening aarti with multi-tiered brass deepams and devotional chanting.</p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className={styles.galleryCard}>
              <div className={styles.galleryImgWrap}>
                <Image
                  src="/images/omkareshwar-bridge.jpg"
                  alt="Omkareshwar Jhula Pul suspension bridge"
                  width={600}
                  height={380}
                  className={styles.galleryImg}
                />
              </div>
              <div className={styles.galleryInfo}>
                <h4>Omkareshwar Jhula Pul</h4>
                <p>Iconic pedestrian suspension bridge connecting the mainland to Mandhata island.</p>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className={styles.galleryCard}>
              <div className={styles.galleryImgWrap}>
                <Image
                  src="/images/omkareshwar-temple-stone.jpg"
                  alt="Ancient Nagara stone carvings inside temple"
                  width={600}
                  height={380}
                  className={styles.galleryImg}
                />
              </div>
              <div className={styles.galleryInfo}>
                <h4>Ancient Sabhamandap Architecture</h4>
                <p>Intricate Nagara-style stone pillars and sanctum carvings preserved for centuries.</p>
              </div>
            </div>
          </div>

          <div className={styles.galleryActionRow}>
            <Link href="/media/images" className="btn-secondary">
              <span>View Full Media Gallery</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Upcoming Events or Temple Updates Section */}
      <section className={styles.eventsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeDot}></span>
              <span>ANNUAL FESTIVALS & UPDATES</span>
            </div>
            <h2 className="section-title">Temple Festivals & Announcements</h2>
            <p className="section-subtitle">
              Stay informed with official schedules, parva dates, and Mandir Trust administrative updates.
            </p>
          </div>

          <div className={styles.eventsGrid}>
            <div className={styles.eventCard}>
              <div className={styles.eventDateBadge}>
                <span className={styles.eventMonth}>FESTIVAL</span>
                <span className={styles.eventDay}>MAHASHIVRATRI</span>
              </div>
              <div className={styles.eventBody}>
                <h3>Mahashivratri Mahotsav</h3>
                <p>
                  Grand 24-hour non-stop darshan, continuous Vedic Rudrabhishek ceremonies, and midnight Bhasma Aarti with lakhs of visiting devotees.
                </p>
                <Link href="/about/festivals" className={styles.eventLink}>Festival Details →</Link>
              </div>
            </div>

            <div className={styles.eventCard}>
              <div className={styles.eventDateBadge}>
                <span className={styles.eventMonth}>FESTIVAL</span>
                <span className={styles.eventDay}>KARTIK PURNIMA</span>
              </div>
              <div className={styles.eventBody}>
                <h3>Kartik Purnima & Deepotsav</h3>
                <p>
                  Auspicious festival marked by thousands of floating oil lamps on Maa Narmada, special boat parikrama, and grand Annakshetra feasts.
                </p>
                <Link href="/about/festivals" className={styles.eventLink}>Festival Details →</Link>
              </div>
            </div>

            <div className={styles.eventCard}>
              <div className={styles.eventDateBadge}>
                <span className={styles.eventMonth}>FESTIVAL</span>
                <span className={styles.eventDay}>NARMADA JAYANTI</span>
              </div>
              <div className={styles.eventBody}>
                <h3>Maa Narmada Jayanti Mahotsav</h3>
                <p>
                  Annual celebration honoring the holy River Narmada featuring a 500-meter sacred chunari offering and special Maha Jalabhishek.
                </p>
                <Link href="/about/festivals" className={styles.eventLink}>Festival Details →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Devotional Call-to-Action Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaSymbol}>ॐ नमः शिवाय</div>
            <h2 className={styles.ctaHeading}>Begin Your Sacred Journey</h2>
            <p className={styles.ctaText}>
              Plan your visit to Shri Omkareshwar Jyotirling and discover the spiritual serenity
              of the holy Narmada. Book your darshan slot and accommodation in advance for a hassle-free pilgrimage.
            </p>

            <div className={styles.ctaButtonGroup}>
              <Link href="/darshan/vishesh-darshan" className={styles.ctaBtnPrimary}>
                <span>Book Darshan Pass</span>
                <span>→</span>
              </Link>
              <Link href="/how-to-reach" className={styles.ctaBtnSecondary}>
                <span>Plan Your Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
