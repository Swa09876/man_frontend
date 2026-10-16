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
                <span>SACRED ORIGIN & PURANIC HISTORY</span>
              </div>
              <h2 className={styles.welcomeHeading}>The Timeless History of Shri Omkareshwar</h2>
              <p className={styles.welcomeLead}>
                Revered for over two millennia as the fourth sacred Jyotirlinga, Shri Omkareshwar presides
                majestically on the sacred island of Mandhata, where Maa Narmada naturally carves the eternal
                syllable &apos;ॐ&apos;. Its sacred history weaves ancient Puranic penance, Jagadguru Adi
                Shankaracharya&apos;s spiritual revival, and regal temple architecture across dynasties.
              </p>

              <div className={styles.welcomeFeatures}>
                <div className={styles.welcomeFeatureItem}>
                  <div className={styles.featureIconWrap}>
                    <span className={styles.featureIcon}>🔱</span>
                  </div>
                  <div className={styles.featureTextWrap}>
                    <div className={styles.featureMeta}>
                      <span className={styles.featureEpoch}>PURANIC ORIGINS • SATYAYUGA</span>
                    </div>
                    <h4>King Mandhata&apos;s Penance &amp; Swayambhu Manifestation</h4>
                    <p>
                      According to the Shiva Purana, King Mandhata performed intense penance on this island. Pleased by his supreme devotion, Bhagwan Shiva appeared and manifested as the self-emerged (Swayambhu) Jyotirlinga.
                    </p>
                  </div>
                </div>

                <div className={styles.welcomeFeatureItem}>
                  <div className={styles.featureIconWrap}>
                    <span className={styles.featureIcon}>🕉️</span>
                  </div>
                  <div className={styles.featureTextWrap}>
                    <div className={styles.featureMeta}>
                      <span className={styles.featureEpoch}>SACRED GEOGRAPHY</span>
                    </div>
                    <h4>Naturally Carved &apos;ॐ&apos; Island &amp; Dual Shrines</h4>
                    <p>
                      Maa Narmada naturally divides around Mandhata island, carving the sacred cosmic sound &apos;Om&apos;. The pilgrimage unites two holy shrines — Shri Omkareshwar and the southern Shri Mamleshwar — into one indivisible Jyotirlinga.
                    </p>
                  </div>
                </div>

                <div className={styles.welcomeFeatureItem}>
                  <div className={styles.featureIconWrap}>
                    <span className={styles.featureIcon}>🪔</span>
                  </div>
                  <div className={styles.featureTextWrap}>
                    <div className={styles.featureMeta}>
                      <span className={styles.featureEpoch}>8TH CENTURY CE • ADVAITA REVIVAL</span>
                    </div>
                    <h4>Jagadguru Adi Shankaracharya&apos;s Guru Diksha</h4>
                    <p>
                      At the sacred Govinda Bhagavatpada Guha cave on this island, Jagadguru Adi Shankara met his Guru and received divine initiation, embarking from here to revive Sanatana Dharma across Bharat.
                    </p>
                  </div>
                </div>

                <div className={styles.welcomeFeatureItem}>
                  <div className={styles.featureIconWrap}>
                    <span className={styles.featureIcon}>🏛️</span>
                  </div>
                  <div className={styles.featureTextWrap}>
                    <div className={styles.featureMeta}>
                      <span className={styles.featureEpoch}>ARCHITECTURAL HERITAGE • 2000+ YEARS</span>
                    </div>
                    <h4>Five-Storeyed Nagara Temple &amp; Holkar Legacy</h4>
                    <p>
                      Enriched by Paramara kings and reconstructed with royal reverence by Maharani Ahilyabai Holkar, the five-tiered stone temple features intricate carvings, celestial sabhamandaps, and golden spires.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.welcomeActions}>
                <Link href="/about/main-temple" className="btn-primary">
                  <span>Explore Full Mandir History</span>
                  <span>→</span>
                </Link>
                <Link href="/about/parikrama" className="btn-secondary">
                  <span>Omkar Parikrama Route</span>
                </Link>
              </div>
            </div>

            <div className={styles.welcomeImageCol}>
              <div className={styles.imageFrameWrapper}>
                <div className={styles.decorativeCornerTL}></div>
                <div className={styles.decorativeCornerBR}></div>
                
                <div className={styles.imagesStack}>
                  {/* Image 1: Ancient Omkareshwar Nagara Temple Architecture */}
                  <div className={styles.imageContainer}>
                    <Image
                      src="/images/omkareshwar-temple-history.jpg"
                      alt="Ancient multi-tiered Shri Omkareshwar Jyotirlinga Temple with Nagara stone architecture"
                      width={700}
                      height={480}
                      className={styles.welcomeImg}
                      priority
                    />
                    <div className={styles.imageTagOverlay}>
                      <span className={styles.imageTagPill}>🏛️ 2000+ YEARS HERITAGE</span>
                    </div>
                    <div className={styles.imageBadge}>
                      <span className={styles.badgeLocation}>Ancient 5-Tiered Nagara Temple</span>
                      <span className={styles.badgeSub}>Shri Omkareshwar Jyotirlinga Sanctum &amp; Spire</span>
                    </div>
                  </div>

                  {/* Image 2: Holy Narmada River Ghats & Mandhata Island */}
                  <div className={styles.imageContainer}>
                    <Image
                      src="/images/omkareshwar-ghat.jpg"
                      alt="Holy Narmada River Ghats and Mandhata Island at Shri Omkareshwar Temple"
                      width={700}
                      height={400}
                      className={styles.welcomeImg}
                    />
                    <div className={styles.imageTagOverlay}>
                      <span className={styles.imageTagPill}>🕉️ SACRED &apos;ॐ&apos; ISLAND</span>
                    </div>
                    <div className={styles.imageBadge}>
                      <span className={styles.badgeLocation}>Mandhata Island • Holy Narmada Ghats</span>
                      <span className={styles.badgeSub}>Sacred Snan Steps &amp; Parikrama Boat Passage</span>
                    </div>
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
            {/* Card 1: Mahashivratri */}
            <div className={styles.eventCard}>
              <div className={styles.eventImageWrap}>
                <Image
                  src="/images/festival-mahashivratri.jpg"
                  alt="Mahashivratri Mahotsav Celebration at Shri Omkareshwar Jyotirlinga"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className={styles.eventImg}
                />
                <div className={styles.eventBadgeOverlay}>
                  <span className={styles.eventTag}>FESTIVAL</span>
                  <span className={styles.eventDate}>MAHASHIVRATRI</span>
                </div>
              </div>
              <div className={styles.eventBody}>
                <h3 className={styles.eventTitle}>Mahashivratri Mahotsav</h3>
                <p className={styles.eventDesc}>
                  Grand 24-hour non-stop darshan, continuous Vedic Rudrabhishek ceremonies, and midnight Bhasma Aarti with lakhs of visiting devotees.
                </p>
                <Link href="/about/festivals" className={styles.eventLink}>
                  <span>Festival Details</span>
                  <span className={styles.eventArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Kartik Purnima */}
            <div className={styles.eventCard}>
              <div className={styles.eventImageWrap}>
                <Image
                  src="/images/festival-kartik-purnima.jpg"
                  alt="Kartik Purnima Deepotsav on sacred River Narmada at Omkareshwar"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className={styles.eventImg}
                />
                <div className={styles.eventBadgeOverlay}>
                  <span className={styles.eventTag}>FESTIVAL</span>
                  <span className={styles.eventDate}>KARTIK PURNIMA</span>
                </div>
              </div>
              <div className={styles.eventBody}>
                <h3 className={styles.eventTitle}>Kartik Purnima &amp; Deepotsav</h3>
                <p className={styles.eventDesc}>
                  Auspicious festival marked by thousands of floating oil lamps on Maa Narmada, special boat parikrama, and grand Annakshetra feasts.
                </p>
                <Link href="/about/festivals" className={styles.eventLink}>
                  <span>Festival Details</span>
                  <span className={styles.eventArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Narmada Jayanti */}
            <div className={styles.eventCard}>
              <div className={styles.eventImageWrap}>
                <Image
                  src="/images/festival-narmada-jayanti.jpg"
                  alt="Maa Narmada Jayanti Mahotsav Chunari Offering at Omkareshwar Ghats"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className={styles.eventImg}
                />
                <div className={styles.eventBadgeOverlay}>
                  <span className={styles.eventTag}>FESTIVAL</span>
                  <span className={styles.eventDate}>NARMADA JAYANTI</span>
                </div>
              </div>
              <div className={styles.eventBody}>
                <h3 className={styles.eventTitle}>Maa Narmada Jayanti Mahotsav</h3>
                <p className={styles.eventDesc}>
                  Annual celebration honoring the holy River Narmada featuring a 500-meter sacred chunari offering and special Maha Jalabhishek.
                </p>
                <Link href="/about/festivals" className={styles.eventLink}>
                  <span>Festival Details</span>
                  <span className={styles.eventArrow}>→</span>
                </Link>
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
