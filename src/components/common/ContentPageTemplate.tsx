import React from "react";
import Link from "next/link";
import styles from "./ContentPageTemplate.module.css";

export interface KeyFact {
  label: string;
  value: string;
  icon?: string;
}

export interface ContentSection {
  title: string;
  content: string | React.ReactNode;
  bullets?: string[];
  table?: {
    headers: string[];
    rows: (string | number)[][];
  };
}

export interface ContentPageProps {
  title: string;
  subtitle?: string;
  category: string;
  categoryHref: string;
  keyFacts?: KeyFact[];
  sections: ContentSection[];
  ctaButton?: {
    label: string;
    href: string;
  };
}

export const ContentPageTemplate: React.FC<ContentPageProps> = ({
  title,
  subtitle,
  category,
  categoryHref,
  keyFacts,
  sections,
  ctaButton,
}) => {
  return (
    <div className={styles.container}>
      {/* Header Banner */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href={categoryHref}>{category}</Link>
            <span>/</span>
            <span className={styles.current}>{title}</span>
          </div>
          <span className={styles.categoryBadge}>{category.toUpperCase()} GUIDELINES</span>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.layout}>
          {/* Main Article Body */}
          <main className={styles.mainContent}>
            {/* Key Facts Bar if present */}
            {keyFacts && keyFacts.length > 0 && (
              <div className={styles.factsGrid}>
                {keyFacts.map((fact, idx) => (
                  <div key={idx} className={styles.factCard}>
                    {fact.icon && <span className={styles.factIcon}>{fact.icon}</span>}
                    <div>
                      <span className={styles.factLabel}>{fact.label}</span>
                      <strong className={styles.factValue}>{fact.value}</strong>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Sections */}
            {sections.map((section, idx) => (
              <section key={idx} className={styles.sectionCard}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <div className={styles.sectionBody}>
                  {typeof section.content === "string" ? (
                    <p className={styles.paragraph}>{section.content}</p>
                  ) : (
                    section.content
                  )}

                  {section.bullets && (
                    <ul className={styles.bulletsList}>
                      {section.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className={styles.tableWrap}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            {section.table.headers.map((h, i) => (
                              <th key={i}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Bottom Call to Action if present */}
            {ctaButton && (
              <div className={styles.ctaBox}>
                <div>
                  <h3>Ready to experience divine blessings?</h3>
                  <p>Book your ritual or slot conveniently through the official Trust portal.</p>
                </div>
                <Link href={ctaButton.href} className={styles.ctaBtn}>
                  {ctaButton.label} →
                </Link>
              </div>
            )}
          </main>

          {/* Quick Services Sidebar */}
          <aside className={styles.sidebar}>
            {/* Quick Actions Card */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Official Portal Services</h3>
              <div className={styles.quickLinks}>
                <Link href="/darshan/vishesh-darshan" className={styles.quickLink}>
                  <span>🎟️ Shighra VIP Darshan</span>
                  <span className={styles.arrow}>→</span>
                </Link>
                <Link href="/booking/puja" className={styles.quickLink}>
                  <span>🕉️ Vedic Puja Booking</span>
                  <span className={styles.arrow}>→</span>
                </Link>
                <Link href="/donation" className={styles.quickLink}>
                  <span>🙏 Seva & Annakshetra Daan</span>
                  <span className={styles.arrow}>→</span>
                </Link>
                <Link href="/prasad/laddu-mahaprasad" className={styles.quickLink}>
                  <span>📦 Laddu Mahaprasad Post</span>
                  <span className={styles.arrow}>→</span>
                </Link>
                <Link href="/booking/vishramalaya" className={styles.quickLink}>
                  <span>🏢 Vishramalaya Stay</span>
                  <span className={styles.arrow}>→</span>
                </Link>
                <Link href="/booking/find-booking" className={styles.quickLink}>
                  <span>🔍 Verify Receipt / Ticket</span>
                  <span className={styles.arrow}>→</span>
                </Link>
              </div>
            </div>

            {/* Temple Timetable Widget */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Mandir Darshan Timings</h3>
              <div className={styles.scheduleMini}>
                <div className={styles.schedItem}>
                  <span>Mangal Aarti & Bhog</span>
                  <strong>04:30 AM - 05:00 AM</strong>
                </div>
                <div className={styles.schedItem}>
                  <span>Mangal Darshan & Abhishek</span>
                  <strong>05:00 AM - 12:20 PM</strong>
                </div>
                <div className={styles.schedItem}>
                  <span>Madhyanha Bhog (Closed)</span>
                  <strong>12:20 PM - 01:15 PM</strong>
                </div>
                <div className={styles.schedItem}>
                  <span>Madhyanha Darshan</span>
                  <strong>01:15 PM - 04:00 PM</strong>
                </div>
                <div className={styles.schedItem}>
                  <span>Sayamkalin Shringar</span>
                  <strong>04:00 PM - 04:30 PM</strong>
                </div>
                <div className={styles.schedItem}>
                  <span>Shayan Aarti & Closing</span>
                  <strong>08:30 PM - 09:30 PM</strong>
                </div>
              </div>
            </div>

            {/* 24x7 Helpline Widget */}
            <div className={`${styles.sidebarCard} ${styles.helpCard}`}>
              <div className={styles.helpIcon}>📞</div>
              <h4>24x7 Control Room & Helpline</h4>
              <p>For urgent darshan, wheel chair, or medical assistance:</p>
              <a href="tel:8989998686" className={styles.phoneBtn}>
                Call 8989998686
              </a>
              <span className={styles.tollFreeText}>Mandhata Island Control Room</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
