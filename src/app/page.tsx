import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { TEMPLE_INFO } from "@/lib/constants";

export const metadata = {
  title: "Shri Omkareshwar Jyotirlinga Official Website | Mandhata, Madhya Pradesh",
  description:
    "Official portal of Shri Omkareshwar Jyotirlinga Mandir Trust. Book Shighra Darshan, Vedic Abhishek Puja, Desi Ghee Laddu Mahaprasad, and Annakshetra donation.",
};

export default function HomePage() {
  return (
    <div className={styles.homeWrapper}>
      {/* 1. Hero Section - Immersive Spiritual Landing */}
      <section className={styles.heroSection} aria-label="Shri Omkareshwar Jyotirlinga Hero Banner">
        <div className={styles.heroOverlay}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrowBadge}>
                <span className={styles.badgeOm}>ॐ</span>
                <span className={styles.badgeText}>ONE OF THE SACRED TWELVE JYOTIRLINGAS</span>
              </div>

              <h1 className={styles.heroHeading}>Shri Omkareshwar Jyotirling</h1>

              <p className={styles.heroSubtext}>
                Experience the divine presence of Lord Shiva at the sacred island of Omkareshwar,
                nestled along the holy Narmada River in Madhya Pradesh.
              </p>

              <div className={styles.heroCtaGroup}>
                <Link href="/darshan/vishesh-darshan" className={styles.primaryCtaBtn}>
                  <span>Book Darshan</span>
                  <span className={styles.ctaArrow}>→</span>
                </Link>

                <Link href="#welcome" className={styles.secondaryCtaBtn}>
                  <span>Explore the Temple</span>
                  <span className={styles.ctaIcon}>🏛️</span>
                </Link>
              </div>
            </div>

            <a href="#info-strip" className={styles.scrollIndicator} aria-label="Scroll down to explore temple highlights">
              <span className={styles.scrollText}>Discover More</span>
              <svg className={styles.scrollChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Temple Information Strip */}
      <section id="info-strip" className={styles.infoStripSection} aria-label="Temple Highlights">
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIconWrapper}>
                <span className={styles.infoSymbol}>🔱</span>
              </div>
              <div className={styles.infoText}>
                <h3 className={styles.infoTitle}>Sacred Jyotirlinga</h3>
                <p className={styles.infoDesc}>4th of the 12 Divine Jyotirlingas, enshrined on Mandhata Island</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIconWrapper}>
                <span className={styles.infoSymbol}>🌊</span>
              </div>
              <div className={styles.infoText}>
                <h3 className={styles.infoTitle}>Holy Narmada River</h3>
                <p className={styles.infoDesc}>River Narmada embraces the island forming the sacred 'ॐ' cosmic shape</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIconWrapper}>
                <span className={styles.infoSymbol}>🪔</span>
              </div>
              <div className={styles.infoText}>
                <h3 className={styles.infoTitle}>Temple Darshan</h3>
                <p className={styles.infoDesc}>Daily Mangal, Madhyahna, and Shayan Aarti Darshan schedules</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIconWrapper}>
                <span className={styles.infoSymbol}>🕉️</span>
              </div>
              <div className={styles.infoText}>
                <h3 className={styles.infoTitle}>Spiritual Heritage</h3>
                <p className={styles.infoDesc}>Timeless Shaiva traditions and Puranic sanctity preserved for millennia</p>
              </div>
            </div>
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
              <h2 className={styles.welcomeHeading}>Discover the Divine Abode of Lord Shiva</h2>
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

      {/* 4. Prominent Darshan and Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeDot}></span>
              <span>DEVOTEE SERVICES</span>
            </div>
            <h2 className="section-title">Temple Darshan & Devotional Services</h2>
            <p className="section-subtitle">
              Plan your pilgrimage with authentic services provided directly by Shri Omkareshwar Mandir Trust.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Card 1: Shighra Darshan */}
            <div className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIconBadge}>⚡ Priority</span>
                <span className={styles.cardPrice}>₹300</span>
              </div>
              <h3 className={styles.cardTitle}>Book Shighra Darshan</h3>
              <p className={styles.cardDesc}>
                Fast-track entry pass to Sabhamandap darshan, minimizing queue waiting times for elderly pilgrims and families.
              </p>
              <div className={styles.cardFooter}>
                <Link href="/darshan/vishesh-darshan" className={styles.cardActionBtn}>
                  <span>Book Darshan Pass</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Abhishek Puja */}
            <div className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIconBadge}>🔱 Vedic Rituals</span>
                <span className={styles.cardPrice}>From ₹2,100</span>
              </div>
              <h3 className={styles.cardTitle}>Explore Pooja Services</h3>
              <p className={styles.cardDesc}>
                Authentic Vedic Jalabhishek, Panchamrit, and Laghu Rudrabhishek performed at the Abhishek Sthal by authorized Brahmins.
              </p>
              <div className={styles.cardFooter}>
                <Link href="/services/abhishek-puja" className={styles.cardActionBtn}>
                  <span>View Puja Services</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Laddu Mahaprasad */}
            <div className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIconBadge}>🪔 Desi Ghee Bhog</span>
                <span className={styles.cardPrice}>From ₹120</span>
              </div>
              <h3 className={styles.cardTitle}>Laddu Mahaprasad</h3>
              <p className={styles.cardDesc}>
                Sanctified pure Besan Laddu Mahaprasad made with Desi Ghee. Delivered safely to your doorstep across India via Speed Post.
              </p>
              <div className={styles.cardFooter}>
                <Link href="/prasad/laddu-mahaprasad" className={styles.cardActionBtn}>
                  <span>Order Mahaprasad</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Card 4: Donations & Seva */}
            <div className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIconBadge}>🌸 80G Tax Exemption</span>
                <span className={styles.cardPrice}>Punya Seva</span>
              </div>
              <h3 className={styles.cardTitle}>Make a Donation</h3>
              <p className={styles.cardDesc}>
                Support free daily meals at Omkar Annakshetra, Akhand Nanda Deepak, and Mandir conservation with official 80G tax receipt.
              </p>
              <div className={styles.cardFooter}>
                <Link href="/donation" className={styles.cardActionBtn}>
                  <span>Donate for Holy Cause</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Card 5: Vishramalaya Stay */}
            <div className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIconBadge}>🏛️ Mandir Stay</span>
                <span className={styles.cardPrice}>Advance Booking</span>
              </div>
              <h3 className={styles.cardTitle}>Vishramalaya Facilities</h3>
              <p className={styles.cardDesc}>
                Clean and affordable AC & non-AC rooms and pilgrim guest halls managed by the Trust close to the temple ghats.
              </p>
              <div className={styles.cardFooter}>
                <Link href="/booking/vishramalaya" className={styles.cardActionBtn}>
                  <span>Check Room Availability</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Card 6: E-Aradhana Remote Pujan */}
            <div className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIconBadge}>✨ Remote Pujan</span>
                <span className={styles.cardPrice}>Live Sankalp</span>
              </div>
              <h3 className={styles.cardTitle}>E-Aradhana Online</h3>
              <p className={styles.cardDesc}>
                Unable to visit in person? Personalized Gotra Sankalp Puja conducted by temple priests with sanctified prasad dispatched home.
              </p>
              <div className={styles.cardFooter}>
                <Link href="/services/e-aradhana" className={styles.cardActionBtn}>
                  <span>Book E-Aradhana</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
