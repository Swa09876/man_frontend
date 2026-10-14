"use client";

import React, { useState } from "react";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { DARSHAN_SLOTS } from "@/lib/constants";
import styles from "./availability.module.css";

export default function TicketAvailabilityPage() {
  const [date, setDate] = useState("2026-10-15");
  const [slotName, setSlotName] = useState(DARSHAN_SLOTS[0].name);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const data = await apiClient<any>("/bookings/availability", {
        params: { date, slotName },
      });
      setResult(data);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to fetch availability. Please retry.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerBanner}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/booking/darshan">Booking</Link>
            <span>/</span>
            <span className={styles.current}>Ticket Availability</span>
          </div>
          <span className={styles.categoryBadge}>REAL-TIME QUOTA CHECK</span>
          <h1 className={styles.pageTitle}>Ticket Slot Availability (टिकट उपलब्धता)</h1>
          <p className={styles.pageSubtitle}>
            Check real-time Shighra Darshan pass availability for your preferred date and session.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.cardWrapper}>
          <form onSubmit={handleCheck} className={styles.searchForm}>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="txtProgramDate">Select Date *</label>
                <input
                  id="txtProgramDate"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="ddlSlotName">Select Time Slot *</label>
                <select
                  id="ddlSlotName"
                  value={slotName}
                  onChange={(e) => setSlotName(e.target.value)}
                  className={styles.select}
                >
                  {DARSHAN_SLOTS.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.btnCol}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary"
                  style={{ width: "100%", height: "44px" }}
                >
                  {isLoading ? "Checking..." : "Check Availability"}
                </button>
              </div>
            </div>
          </form>

          {errorMsg && <div className={styles.errorAlert}>{errorMsg}</div>}

          {result && (
            <div className={styles.resultBox}>
              <div className={styles.resultHeader}>
                <h3>Availability for {result.date}</h3>
                <span className={result.isAvailable ? styles.badgeAvailable : styles.badgeFull}>
                  {result.isAvailable ? "TICKETS AVAILABLE" : "SLOT FULL"}
                </span>
              </div>

              <div className={styles.quotaGrid}>
                <div className={styles.quotaItem}>
                  <span>Time Slot</span>
                  <strong>{result.slotName}</strong>
                </div>
                <div className={styles.quotaItem}>
                  <span>Total Daily Quota</span>
                  <strong>{result.totalQuota} Tickets</strong>
                </div>
                <div className={styles.quotaItem}>
                  <span>Already Booked</span>
                  <strong>{result.bookedCount} Tickets</strong>
                </div>
                <div className={styles.quotaItem}>
                  <span>Remaining Available</span>
                  <strong className={styles.availableNumber}>{result.availableCount} Tickets</strong>
                </div>
              </div>

              {result.isAvailable ? (
                <div className={styles.actionPrompt}>
                  <p>Slots are filling rapidly. Complete your online booking now.</p>
                  <Link href="/booking/darshan" className="btn-primary">
                    Proceed to Book ({result.slotName})
                  </Link>
                </div>
              ) : (
                <div className={styles.actionPrompt}>
                  <p>This slot is fully reserved. Please choose another time slot or date.</p>
                </div>
              )}
            </div>
          )}

          {/* Daily Slot Timings & Capacity Guide */}
          <div className={styles.scheduleGuideCard}>
            <h3 className={styles.guideTitle}>Daily Shighra Darshan Schedule & Capacity</h3>
            <div className={styles.slotCardsGrid}>
              <div className={styles.slotInfoCard}>
                <span className={styles.slotBadge}>Batch 1</span>
                <h4>07:00 AM – 09:00 AM</h4>
                <p>Morning Mangal Darshan & Abhishek session. Quota: 250 Devotees.</p>
              </div>
              <div className={styles.slotInfoCard}>
                <span className={styles.slotBadge}>Batch 2</span>
                <h4>10:00 AM – 12:00 PM</h4>
                <p>Rajbhog Aarti & Sabhamandap darshan. Quota: 300 Devotees.</p>
              </div>
              <div className={styles.slotInfoCard}>
                <span className={styles.slotBadge}>Batch 3</span>
                <h4>02:00 PM – 04:00 PM</h4>
                <p>Afternoon peaceful darshan session. Quota: 250 Devotees.</p>
              </div>
              <div className={styles.slotInfoCard}>
                <span className={styles.slotBadge}>Batch 4</span>
                <h4>06:00 PM – 08:00 PM</h4>
                <p>Sayamkalin Shringar & Evening Aarti darshan. Quota: 300 Devotees.</p>
              </div>
            </div>

            <div className={styles.guideNotice}>
              ℹ️ <strong>Devotee Advisory:</strong> Online quota opens 30 days in advance. Devotees without online passes may acquire on-spot passes at the physical counter subject to daily availability limits.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
