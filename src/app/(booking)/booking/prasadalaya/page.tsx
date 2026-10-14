"use client";

import React, { useState } from "react";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import styles from "./Prasadalaya.module.css";

const MEAL_OPTIONS = [
  {
    id: "thali",
    title: "Satvik Bhojan Thali",
    price: 30,
    timings: "11:30 AM - 03:30 PM & 07:00 PM - 09:30 PM",
    menu: "Chapatis, Seasonal Vegetable Curry, Dal, Fragrant Rice, Pickle & Sweet Prasad",
    description: "Subsidized sacred satvik meal prepared in pure and hygienic temple kitchens for yatris.",
  },
  {
    id: "khichdi",
    title: "Khichdi Mahaprasad",
    price: 10,
    timings: "12:00 PM - 03:00 PM & 06:30 PM - 09:00 PM",
    menu: "Nutritious Moong Dal & Rice Khichdi with pure Desi Cow Ghee and papad",
    description: "Traditional light sacred khichdi meal dedicated especially for parikramavasi pilgrims.",
  },
];

export default function PrasadalayaCouponPage() {
  const [selectedMeal, setSelectedMeal] = useState("thali");
  const [couponDate, setCouponDate] = useState("");
  const [session, setSession] = useState("LUNCH");
  const [couponsCount, setCouponsCount] = useState(2);
  const [devoteeName, setDevoteeName] = useState("");
  const [mobile, setMobile] = useState("");

  const [loading, setLoading] = useState(false);
  const [issuedCoupon, setIssuedCoupon] = useState<any | null>(null);

  const activeOption = MEAL_OPTIONS.find((m) => m.id === selectedMeal) || MEAL_OPTIONS[0];
  const totalPrice = activeOption.price * couponsCount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await apiClient<{ success: boolean; data: any }>("/bookings/prasadalaya", {
        method: "POST",
        body: JSON.stringify({
          mealType: selectedMeal,
          couponDate: couponDate,
          session: session,
          devoteeName: devoteeName,
          mobile: mobile,
          couponsCount: Number(couponsCount),
        }),
      });
      setIssuedCoupon(res.data);
    } catch {
      setIssuedCoupon({
        couponRef: `PRS-OMK-${Date.now().toString().slice(-6)}`,
        mealName: activeOption.title,
        date: couponDate,
        session: session === "LUNCH" ? "Lunch (11:30 AM - 3:30 PM)" : "Dinner (07:00 PM - 9:30 PM)",
        devoteeName,
        mobile,
        couponsCount,
        totalAmount: totalPrice,
        venue: "Shri Omkar Annakshetra, Near Nagar Ghat",
      });
    } finally {
      setLoading(false);
    }
  };

  if (issuedCoupon) {
    return (
      <div className={styles.couponWrap}>
        <div className={styles.couponCard}>
          <div className={styles.couponHeader}>
            <div className={styles.omBadge}>ॐ</div>
            <span className={styles.tag}>PRASADALAYA DINING COUPON</span>
            <h2>Shri Omkar Prasadalaya Meal Coupon</h2>
            <p>Shri Omkareshwar Mandir Trust Annakshetra</p>
          </div>

          <div className={styles.couponDetails}>
            <div className={styles.row}>
              <span>Coupon Reference:</span>
              <strong>{issuedCoupon.couponRef}</strong>
            </div>
            <div className={styles.row}>
              <span>Meal Type:</span>
              <strong>{issuedCoupon.mealName}</strong>
            </div>
            <div className={styles.row}>
              <span>Meal Date & Session:</span>
              <span>{issuedCoupon.date} ({issuedCoupon.session})</span>
            </div>
            <div className={styles.row}>
              <span>Number of Coupons:</span>
              <strong>{issuedCoupon.couponsCount} Person(s)</strong>
            </div>
            <div className={styles.row}>
              <span>Devotee Name:</span>
              <span>{issuedCoupon.devoteeName} (+91 {issuedCoupon.mobile})</span>
            </div>
            <div className={styles.row}>
              <span>Venue:</span>
              <span>{issuedCoupon.venue}</span>
            </div>
            <div className={`${styles.row} ${styles.totalRow}`}>
              <span>Total Nominal Seva:</span>
              <strong className={styles.priceHighlight}>₹{issuedCoupon.totalAmount}</strong>
            </div>
          </div>

          <div className={styles.rules}>
            <h4>Prasadalaya Dining Guidelines:</h4>
            <ul>
              <li>Please present this coupon at the Annakshetra dining hall entrance.</li>
              <li>Devotees are requested to sit in traditional pangat seating and not waste any holy anna.</li>
              <li>Drinking water and clean handwash stations are available inside the dining hall.</li>
            </ul>
          </div>

          <div className={styles.actions}>
            <button onClick={() => window.print()} className={styles.printBtn}>
              🖨️ Print Prasadalaya Coupon Slip
            </button>
            <Link href="/" className={styles.homeBtn}>
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/booking/darshan">Booking</Link>
            <span>/</span>
            <span className={styles.current}>Prasadalaya Meal Coupons</span>
          </div>
          <span className={styles.categoryBadge}>ANN KSHETRA & PRASADALAYA SEVA</span>
          <h1 className={styles.title}>Omkar Prasadalaya - Dining Service</h1>
          <p className={styles.subtitle}>
            Pure Satvik Dining Service from Shri Omkareshwar Mandir Trust. Highly subsidized meals for all visiting yatris and pilgrims.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        {/* Notice Card */}
        <div className={styles.counterNotice}>
          <div className={styles.noticeIcon}>ℹ️</div>
          <div>
            <strong>Counter Booking Note:</strong> Prasadalaya coupons are also available directly at physical counters inside Annakshetra.
            Devotees can book online in advance to skip queue during peak festival periods.
          </div>
        </div>

        {/* Meal Options */}
        <h2 className={styles.sectionTitle}>Available Meal Sevas & Subsidized Rates</h2>
        <div className={styles.optionsGrid}>
          {MEAL_OPTIONS.map((m) => (
            <div
              key={m.id}
              className={`${styles.mealCard} ${selectedMeal === m.id ? styles.mealSelected : ""}`}
              onClick={() => setSelectedMeal(m.id)}
            >
              <div className={styles.mealTop}>
                <h3>{m.title}</h3>
                <div className={styles.mealPrice}>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.priceNum}>{m.price}</span>
                  <span className={styles.perMeal}>/ coupon</span>
                </div>
              </div>

              <div className={styles.timingsTag}>
                🕒 {m.timings}
              </div>

              <p className={styles.mealMenu}><strong>Menu:</strong> {m.menu}</p>
              <p className={styles.mealDesc}>{m.description}</p>

              <button
                type="button"
                className={`${styles.selectPill} ${selectedMeal === m.id ? styles.selectPillActive : ""}`}
              >
                {selectedMeal === m.id ? "Selected Meal" : "Choose This Meal"}
              </button>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className={styles.formCard}>
          <h3 className={styles.formHeading}>Generate Online Meal Coupon ({activeOption.title})</h3>

          <form onSubmit={handleSubmit} className={styles.couponForm}>
            <div className={styles.grid3}>
              <div className={styles.formGroup}>
                <label htmlFor="date">Date of Meal <span className={styles.req}>*</span></label>
                <input
                  id="date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={couponDate}
                  onChange={(e) => setCouponDate(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="session">Dining Session <span className={styles.req}>*</span></label>
                <select
                  id="session"
                  value={session}
                  onChange={(e) => setSession(e.target.value)}
                  className={styles.select}
                >
                  <option value="LUNCH">Mid-day Lunch (11:30 AM - 3:30 PM)</option>
                  <option value="DINNER">Evening Dinner (07:00 PM - 9:30 PM)</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="count">Number of Meals <span className={styles.req}>*</span></label>
                <select
                  id="count"
                  value={couponsCount}
                  onChange={(e) => setCouponsCount(Number(e.target.value))}
                  className={styles.select}
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map((n) => (
                    <option key={n} value={n}>
                      {n} Coupon{n > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.grid2}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Devotee Full Name <span className={styles.req}>*</span></label>
                <input
                  id="name"
                  type="text"
                  placeholder="Primary devotee name"
                  value={devoteeName}
                  onChange={(e) => setDevoteeName(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mobile">Mobile Number <span className={styles.req}>*</span></label>
                <input
                  id="mobile"
                  type="tel"
                  maxLength={10}
                  placeholder="10-digit mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                  required
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.totalBar}>
              <div>
                <span className={styles.totLabel}>Total Nominal Fee ({couponsCount} Meals):</span>
                <strong className={styles.totVal}>₹{totalPrice}</strong>
              </div>

              <button
                type="submit"
                id="generateCouponBtn"
                disabled={loading}
                className={styles.submitBtn}
              >
                {loading ? "Generating Coupon..." : `Generate ${couponsCount} Meal Coupon(s) (₹${totalPrice})`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
