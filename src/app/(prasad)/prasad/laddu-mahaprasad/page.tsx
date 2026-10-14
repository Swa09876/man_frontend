import React from "react";
import Link from "next/link";
import styles from "./LadduMahaprasad.module.css";

export const metadata = {
  title: "Shri Omkareshwar Pure Desi Ghee Laddu Mahaprasad - Home Delivery",
  description: "Order sacred pure desi ghee Besan Laddu Mahaprasad blessed at Shri Omkareshwar Jyotirlinga, delivered to your doorstep across India via Speed Post.",
};

const VARIANTS = [
  {
    weight: "250g",
    price: 120,
    servings: "Approx 5-6 Laddus",
    description: "Compact sacred prasad pack ideal for personal puja or family offering.",
    badge: "Trial Pack",
  },
  {
    weight: "500g",
    price: 240,
    servings: "Approx 10-12 Laddus",
    description: "Standard family box packed in food-grade airtight container for freshness.",
    badge: "Most Popular",
    popular: true,
  },
  {
    weight: "1kg",
    price: 480,
    servings: "Approx 20-24 Laddus",
    description: "Festive family offering box ideal for distributing amongst relatives and neighbors.",
    badge: "Best Value",
  },
];

export default function LadduMahaprasadPage() {
  return (
    <div className={styles.container}>
      {/* Banner */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/prasad/laddu-mahaprasad">Mahaprasad</Link>
            <span>/</span>
            <span className={styles.current}>Besan Laddu Mahaprasad</span>
          </div>
          <span className={styles.categoryBadge}>SACRED BHOG & HOME PRASAD DELIVERY</span>
          <h1 className={styles.title}>Shri Omkareshwar Pure Desi Ghee Laddu Mahaprasad</h1>
          <p className={styles.subtitle}>
            Directly from the holy kitchen of Bhagwan Omkareshwar to your home. Prepared with pure cow desi ghee, premium gram flour, and sacred dry fruits.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        {/* Sacred Assurance Badge */}
        <div className={styles.assuranceBar}>
          <div className={styles.assuranceItem}>
            <span className={styles.assuranceIcon}>🌿</span>
            <div>
              <strong>100% Satvik & Pure Desi Ghee</strong>
              <p>No artificial flavors, colors, or preservatives</p>
            </div>
          </div>
          <div className={styles.assuranceItem}>
            <span className={styles.assuranceIcon}>🙏</span>
            <div>
              <strong>Offered at Garbhagriha</strong>
              <p>Consecrated in morning Mangal Bhog</p>
            </div>
          </div>
          <div className={styles.assuranceItem}>
            <span className={styles.assuranceIcon}>📮</span>
            <div>
              <strong>India Post Speed Post</strong>
              <p>Fast dispatch with official postal tracking</p>
            </div>
          </div>
        </div>

        {/* Product Showcase Cards */}
        <div className={styles.productSection}>
          <div className={styles.productShowcase}>
            <div className={styles.imageBox}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.ladduIcon}>🟡</span>
                <span className={styles.omBadge}>ॐ श्री ओंकारेश्वर महाप्रसाद</span>
              </div>
            </div>

            <div className={styles.productDetails}>
              <span className={styles.trustBadge}>Official Temple Prasadalaya</span>
              <h2>Pure Cow Ghee Besan Laddu</h2>
              <p className={styles.longDesc}>
                The holy Besan Laddu Mahaprasad of Shri Omkareshwar is traditionally prepared daily by temple sevadars.
                Each batch is sanctified before Lord Shiva during the Rajbhog ceremony. Through our partnership with
                Department of Posts (India Post), devotees across India can receive this divine prasad at their doorstep.
              </p>

              <div className={styles.shelfLifeNotice}>
                📅 <strong>Shelf Life:</strong> 25-30 days from dispatch when kept in cool, dry storage.
              </div>

              <div className={styles.variantSelection}>
                <h3>Available Package Sizes:</h3>
                <div className={styles.variantGrid}>
                  {VARIANTS.map((v) => (
                    <div
                      key={v.weight}
                      className={`${styles.variantCard} ${v.popular ? styles.popularVariant : ""}`}
                    >
                      {v.badge && <span className={styles.vBadge}>{v.badge}</span>}
                      <h4>{v.weight} Pack</h4>
                      <p className={styles.vServings}>{v.servings}</p>
                      <div className={styles.vPrice}>
                        <span className={styles.currency}>₹</span>
                        <span className={styles.priceNum}>{v.price}</span>
                      </div>
                      <p className={styles.vDesc}>{v.description}</p>

                      <Link
                        href={`/prasad/checkout?weight=${encodeURIComponent(v.weight)}&price=${v.price}`}
                        className={styles.orderNowBtn}
                      >
                        Order {v.weight} Online →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Speed Post & Shipping Policy Summary */}
        <div className={styles.shippingCard}>
          <div className={styles.shippingHeader}>
            <span className={styles.postIcon}>📦</span>
            <div>
              <h3>India Post Speed Post Dispatch Policy</h3>
              <p>Reliable and tracked doorstep delivery to all PIN codes in India</p>
            </div>
          </div>

          <div className={styles.shippingGrid}>
            <div className={styles.shippingCol}>
              <h4>Standard Dispatch Schedule</h4>
              <ul>
                <li>Orders received before 12:00 PM are prepared and packed the same day.</li>
                <li>Boxes are handed over to Omkareshwar Post Office by 4:00 PM daily.</li>
                <li>Speed Post tracking number is sent via SMS within 24 hours of booking.</li>
              </ul>
            </div>

            <div className={styles.shippingCol}>
              <h4>Delivery Timelines</h4>
              <ul>
                <li>Madhya Pradesh & Neighboring States: 2 to 4 working days.</li>
                <li>Rest of India & Metro Cities: 3 to 6 working days.</li>
                <li>Remote & North-Eastern locations: 5 to 8 working days.</li>
              </ul>
            </div>
          </div>

          <div className={styles.trackLinkBox}>
            Already placed an order?{" "}
            <Link href="/prasad/track-order" className={styles.trackLink}>
              Track Your Speed Post Consignment Here →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
