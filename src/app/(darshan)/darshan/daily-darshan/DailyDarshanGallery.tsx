"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./DailyDarshan.module.css";

export interface DarshanItem {
  id: string;
  category: "all" | "morning" | "midday" | "evening" | "night";
  prahar: string;
  session: string;
  time: string;
  period: string;
  badge: string;
  description: string;
  rituals: string[];
  mantra: string;
  image: string;
  alt: string;
}

interface DailyDarshanGalleryProps {
  currentDate: string;
  items: DarshanItem[];
}

export function DailyDarshanGallery({ currentDate, items }: DailyDarshanGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<DarshanItem>(items[0]);
  const [activeModalItem, setActiveModalItem] = useState<DarshanItem | null>(null);
  const [viewMode, setViewMode] = useState<"spotlight" | "grid">("spotlight");
  const [copied, setCopied] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalItem(null);
      }
    };
    if (activeModalItem) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeModalItem]);

  const handleShare = (item: DarshanItem) => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title: `Shri Omkareshwar Daily Darshan - ${item.session}`,
          text: `Take sacred darshan of ${item.session} (${item.time}) at Shri Omkareshwar Jyotirlinga today.`,
          url: window.location.href,
        })
        .catch(() => {});
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      {/* 1. Date & Live Darshan Banner */}
      <div className={styles.dateBanner}>
        <div className={styles.bannerLeft}>
          <div className={styles.calendarIconBox}>
            <span className={styles.calendarIcon}>🗓️</span>
          </div>
          <div>
            <div className={styles.bannerDateLabel}>TODAY&apos;S SANCTUM DARSHAN</div>
            <strong className={styles.bannerDateVal}>{currentDate}</strong>
          </div>
        </div>

        <div className={styles.bannerCenter}>
          <span className={styles.tithiBadge}>
            <span className={styles.omSymbol}>ॐ</span> Ashwin Shukla Ekadashi • Vikram Samvat 2083
          </span>
        </div>

        <div className={styles.bannerRight}>
          <Link href="/darshan/live" className={styles.liveBroadcastBtn}>
            <span className={styles.livePulseDot}></span>
            <span>Watch Live 24x7 Broadcast</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* 2. View Mode Toggle */}
      <div className={styles.toolbar}>
        <div className={styles.sectionHeadingWrap}>
          <span className={styles.praharSub}>DAIVIK CHRONOLOGY</span>
          <h2 className={styles.sectionHeadingTitle}>The Four Sacred Prahars of Worship</h2>
        </div>

        <div className={styles.viewToggleGroup}>
          <button
            type="button"
            className={`${styles.toggleBtn} ${viewMode === "spotlight" ? styles.toggleBtnActive : ""}`}
            onClick={() => setViewMode("spotlight")}
          >
            🌟 Spotlight View
          </button>
          <button
            type="button"
            className={`${styles.toggleBtn} ${viewMode === "grid" ? styles.toggleBtnActive : ""}`}
            onClick={() => setViewMode("grid")}
          >
            📑 All 4 Prahars Grid
          </button>
        </div>
      </div>

      {/* 3A. SPOTLIGHT VIEW (Cinematic Showcase + 4-Thumbnail Selector) */}
      {viewMode === "spotlight" && (
        <div className={styles.spotlightContainer}>
          {/* Main Cinematic Showcase */}
          <div className={styles.spotlightShowcase}>
            <div
              className={styles.spotlightMediaCol}
              onClick={() => setActiveModalItem(selectedItem)}
              role="button"
              tabIndex={0}
              aria-label={`View full resolution darshan for ${selectedItem.session}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveModalItem(selectedItem);
                }
              }}
            >
              <div className={styles.spotlightImageContainer}>
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className={styles.spotlightImg}
                  priority
                />
                <div className={styles.decorativeCornerTL}></div>
                <div className={styles.decorativeCornerBR}></div>

                {/* Overlays */}
                <div className={styles.spotlightOverlayTop}>
                  <span className={styles.spotlightPraharBadge}>
                    <span className={styles.pulseDot}></span>
                    {selectedItem.prahar}
                  </span>
                  <button
                    type="button"
                    className={styles.spotlightZoomBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalItem(selectedItem);
                    }}
                  >
                    🔍 View Fullscreen
                  </button>
                </div>

                <div className={styles.spotlightOverlayBottom}>
                  <span className={styles.sanctumStamp}>
                    📍 Garbhagriha Sanctum • Mandhata Island, Omkareshwar
                  </span>
                </div>
              </div>
            </div>

            {/* Showcase Details Column */}
            <div className={styles.spotlightInfoCol}>
              <div className={styles.spotlightMetaBar}>
                <span className={styles.spotlightTime}>🕒 {selectedItem.time}</span>
                <span className={styles.metaDot}>•</span>
                <span className={styles.spotlightPeriod}>{selectedItem.period}</span>
              </div>

              <h2 className={styles.spotlightTitle}>{selectedItem.session}</h2>

              {selectedItem.mantra && (
                <div className={styles.mantraBox}>
                  <span className={styles.mantraText}>{selectedItem.mantra}</span>
                </div>
              )}

              <p className={styles.spotlightDesc}>{selectedItem.description}</p>

              <div className={styles.ritualSection}>
                <span className={styles.ritualLabel}>Sacred Shringar Elements:</span>
                <div className={styles.ritualBadges}>
                  {selectedItem.rituals.map((r, i) => (
                    <span key={i} className={styles.ritualBadge}>
                      ✦ {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.spotlightActions}>
                <Link href="/booking/puja" className={styles.spotlightPrimaryBtn}>
                  <span>Book Seva Pass</span>
                  <span>→</span>
                </Link>
                <Link href="/prasad/laddu-mahaprasad" className={styles.spotlightSecondaryBtn}>
                  <span>Order Mahaprasad</span>
                </Link>
                <button
                  type="button"
                  className={styles.spotlightIconBtn}
                  title="Share Sacred Darshan"
                  onClick={() => handleShare(selectedItem)}
                >
                  {copied ? "✓ Copied" : "🔗 Share"}
                </button>
              </div>
            </div>
          </div>

          {/* 4-Thumbnails Chronology Selector Strip */}
          <div className={styles.selectorStrip}>
            <div className={styles.selectorHeader}>
              <span className={styles.selectorSubtitle}>SELECT SACRED AARTI TO VIEW</span>
            </div>

            <div className={styles.selectorGrid}>
              {items.map((item) => {
                const isSelected = item.id === selectedItem.id;
                return (
                  <div
                    key={item.id}
                    className={`${styles.selectorCard} ${isSelected ? styles.selectorCardActive : ""}`}
                    onClick={() => setSelectedItem(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedItem(item);
                      }
                    }}
                  >
                    <div className={styles.selectorThumbWrap}>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 280px"
                        className={styles.selectorThumbImg}
                      />
                      <span className={styles.thumbTimeTag}>{item.time}</span>
                      {isSelected && <span className={styles.activeCheckPill}>✓ Active</span>}
                    </div>

                    <div className={styles.selectorCardBody}>
                      <span className={styles.selectorPraharLabel}>{item.prahar}</span>
                      <h4 className={styles.selectorSessionTitle}>{item.session}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 3B. FOUR-CARD GRID VIEW */}
      {viewMode === "grid" && (
        <div className={styles.darshanGrid}>
          {items.map((pic) => (
            <div key={pic.id} className={styles.darshanCard}>
              <div
                className={styles.imageWrapper}
                onClick={() => setActiveModalItem(pic)}
                role="button"
                tabIndex={0}
                aria-label={`View fullscreen darshan for ${pic.session}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveModalItem(pic);
                  }
                }}
              >
                <Image
                  src={pic.image}
                  alt={pic.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  className={styles.cardImage}
                />

                <div className={styles.overlayTop}>
                  <span className={styles.holyTag}>
                    <span className={styles.holyDot}></span>
                    {pic.badge}
                  </span>
                  <button
                    type="button"
                    className={styles.zoomButton}
                    title="Click to view fullscreen photo"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalItem(pic);
                    }}
                  >
                    🔍 Zoom
                  </button>
                </div>

                <div className={styles.overlayBottom}>
                  <span className={styles.sanctumTag}>🕒 {pic.time}</span>
                </div>
              </div>

              <div className={styles.cardInfo}>
                <div className={styles.timeTag}>
                  <span className={styles.clockIcon}>🔱</span>
                  <span>{pic.prahar}</span>
                  <span className={styles.timeDivider}>•</span>
                  <span className={styles.timePeriod}>{pic.period}</span>
                </div>

                <h3 className={styles.cardTitle}>{pic.session}</h3>
                <p className={styles.cardDesc}>{pic.description}</p>

                <div className={styles.ritualChips}>
                  {pic.rituals.slice(0, 3).map((r, i) => (
                    <span key={i} className={styles.ritualChip}>
                      ✦ {r}
                    </span>
                  ))}
                </div>

                <div className={styles.cardActions}>
                  <Link href="/booking/puja" className={styles.bookPujaBtn}>
                    <span>Book Seva</span>
                    <span>→</span>
                  </Link>
                  <Link href="/prasad/laddu-mahaprasad" className={styles.prasadBtn}>
                    <span>Prasad</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Sacred Ritual Schedule & Devotee Guidelines */}
      <div className={styles.detailsSection}>
        <div className={styles.scheduleCol}>
          <div className={styles.detailsBadge}>
            <span>TEMPLE TRADITION</span>
          </div>
          <h2 className={styles.detailsHeading}>Daily Aarti Timetable &amp; Sanctum State</h2>
          <p className={styles.detailsText}>
            Every day, Lord Omkareshwar is adorned across four sacred time windows. Devotees may witness
            the ceremonies from the Sabhamandap hall.
          </p>

          <div className={styles.scheduleTableWrap}>
            <table className={styles.scheduleTable}>
              <thead>
                <tr>
                  <th>Ceremony</th>
                  <th>Timings</th>
                  <th>Deity Shringar</th>
                  <th>Devotee Access</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Mangal Aarti &amp; Abhishek</strong>
                  </td>
                  <td>05:00 AM – 06:00 AM</td>
                  <td>Panchamrit Snan, Sacred Bhasma &amp; Bilvapatra</td>
                  <td>General &amp; VIP Lines</td>
                </tr>
                <tr>
                  <td>
                    <strong>Madhyanha Rajbhog</strong>
                  </td>
                  <td>12:20 PM – 01:15 PM</td>
                  <td>Yellow Chandan, Golden Mukut &amp; Satvik Bhog</td>
                  <td>Open Sabhamandap</td>
                </tr>
                <tr>
                  <td>
                    <strong>Sayamkalin Royal Shringar</strong>
                  </td>
                  <td>04:30 PM – 05:30 PM</td>
                  <td>Silver Chatra, Red Hibiscus &amp; Lotus Malas</td>
                  <td>Grand Evening Aarti</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shayan Aarti &amp; Chaupar</strong>
                  </td>
                  <td>08:30 PM – 09:30 PM</td>
                  <td>Jasmine Floral Bed &amp; Silver Chaupar Board</td>
                  <td>Final Darshan Before Closing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.guidelinesCol}>
          <div className={styles.guidelinesCard}>
            <h3 className={styles.guidelinesTitle}>🕉️ Sanctum Etiquette for Devotees</h3>
            <ul className={styles.guidelinesList}>
              <li>
                <strong>Traditional Attire:</strong> Dhoti-Kurta for men and Sarees or Salwar suits for
                women are encouraged in the inner Sabhamandap.
              </li>
              <li>
                <strong>Holy Water Snan:</strong> Pilgrims usually take holy bath in Maa Narmada at
                Omkareshwar Ghats before entering for morning darshan.
              </li>
              <li>
                <strong>Mobile Photography:</strong> Photography inside the inner Garbhagriha is
                strictly restricted to preserve ancient sanctity.
              </li>
              <li>
                <strong>Elderly &amp; Divyangjan:</strong> Dedicated ramps and priority queue access are
                operational at Gate No. 2.
              </li>
            </ul>

            <div className={styles.helplineNotice}>
              <span>Need Assistance? Mandir Trust Helpline: </span>
              <strong>07280-271228 / 1800-233-1228</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Fullscreen Lightbox Modal */}
      {activeModalItem && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setActiveModalItem(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={styles.modalImageWrapper}>
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.alt}
                fill
                sizes="100vw"
                className={styles.modalImage}
              />
              <div className={styles.modalBadgeOverlay}>
                <span className={styles.modalTimeTag}>🕒 {activeModalItem.time}</span>
                <span className={styles.modalHolyTag}>{activeModalItem.badge}</span>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalHeaderRow}>
                <div>
                  <h3 className={styles.modalTitle}>{activeModalItem.session}</h3>
                  <p className={styles.modalSubtitle}>
                    Shri Omkareshwar Jyotirlinga Sanctum • Official Daily Shringar
                  </p>
                </div>
                <div className={styles.modalActions}>
                  <a
                    href={activeModalItem.image}
                    download={`Omkareshwar-${activeModalItem.id}.jpg`}
                    className={styles.downloadBtn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    ⬇️ Download Full Resolution
                  </a>
                  <button
                    type="button"
                    className={styles.shareBtn}
                    onClick={() => handleShare(activeModalItem)}
                  >
                    {copied ? "✓ Link Copied!" : "🔗 Share Darshan"}
                  </button>
                </div>
              </div>

              <p className={styles.modalDesc}>{activeModalItem.description}</p>

              <div className={styles.modalRituals}>
                <strong>Sacred Shringar Elements:</strong>
                <div className={styles.modalChips}>
                  {activeModalItem.rituals.map((r, i) => (
                    <span key={i} className={styles.modalChip}>
                      ✦ {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
