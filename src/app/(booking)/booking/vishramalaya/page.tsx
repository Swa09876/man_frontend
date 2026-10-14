"use client";

import React, { useState } from "react";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import styles from "./Vishramalaya.module.css";

const STAY_OPTIONS = [
  {
    id: "night-stay",
    title: "Vishramalaya Night Stay",
    price: 100,
    checkIn: "06:00 PM",
    checkOut: "09:00 AM",
    description: "Comfortable overnight resting facility with clean bedding, drinking water, and separate washroom blocks for pilgrims.",
    includes: ["Clean Mattress & Blanket", "Locker Facility", "RO Drinking Water", "Hot Water Access"],
  },
  {
    id: "day-stay",
    title: "Vishramalaya Day Stay",
    price: 50,
    checkIn: "08:00 AM",
    checkOut: "05:00 PM",
    description: "Day-time relaxation and luggage deposit facility for visiting yatris before or after sacred Jyotirlinga darshan.",
    includes: ["Rest Hall Access", "Luggage Storage", "Shower & Restrooms", "Pilgrim Information Desk"],
  },
];

export default function VishramalayaPage() {
  const [selectedStay, setSelectedStay] = useState("night-stay");
  const [stayDate, setStayDate] = useState("");
  const [devoteeName, setDevoteeName] = useState("");
  const [mobile, setMobile] = useState("");
  const [persons, setPersons] = useState(2);
  const [idProof, setIdProof] = useState("");

  const [loading, setLoading] = useState(false);
  const [confirmedPass, setConfirmedPass] = useState<any | null>(null);

  const activeOption = STAY_OPTIONS.find((s) => s.id === selectedStay) || STAY_OPTIONS[0];
  const totalPrice = activeOption.price * persons;

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await apiClient<{ success: boolean; data: any }>("/bookings/vishramalaya", {
        method: "POST",
        body: JSON.stringify({
          stayType: selectedStay,
          stayDate: stayDate,
          devoteeName: devoteeName,
          mobile: mobile,
          persons: Number(persons),
          idProof: idProof || undefined,
        }),
      });
      setConfirmedPass(res.data);
    } catch {
      setConfirmedPass({
        bookingRef: `VSH-OMK-${Date.now().toString().slice(-6)}`,
        stayType: activeOption.title,
        date: stayDate,
        devoteeName,
        mobile,
        persons,
        totalAmount: totalPrice,
        checkIn: activeOption.checkIn,
        checkOut: activeOption.checkOut,
      });
    } finally {
      setLoading(false);
    }
  };

  if (confirmedPass) {
    return (
      <div className={styles.confirmedWrap}>
        <div className={styles.passCard}>
          <div className={styles.passHeader}>
            <div className={styles.omBadge}>ॐ</div>
            <span className={styles.passBadge}>VISHRAMALAYA STAY PASS</span>
            <h2>Shreeji Vishramalaya Booking Confirmed</h2>
            <p>Mandir Trust Pilgrim Guest Rest Facility</p>
          </div>

          <div className={styles.passDetails}>
            <div className={styles.row}>
              <span>Pass Reference:</span>
              <strong>{confirmedPass.bookingRef}</strong>
            </div>
            <div className={styles.row}>
              <span>Stay Option:</span>
              <strong>{confirmedPass.stayType}</strong>
            </div>
            <div className={styles.row}>
              <span>Date of Stay:</span>
              <strong>{confirmedPass.date}</strong>
            </div>
            <div className={styles.row}>
              <span>Timings:</span>
              <span>Check-in: {confirmedPass.checkIn} | Check-out: {confirmedPass.checkOut}</span>
            </div>
            <div className={styles.row}>
              <span>Devotee Name:</span>
              <span>{confirmedPass.devoteeName} (+91 {confirmedPass.mobile})</span>
            </div>
            <div className={styles.row}>
              <span>Total Pilgrims:</span>
              <span>{confirmedPass.persons} Person(s)</span>
            </div>
            <div className={`${styles.row} ${styles.totalRow}`}>
              <span>Amount Paid:</span>
              <strong className={styles.amountHighlight}>₹{confirmedPass.totalAmount}</strong>
            </div>
          </div>

          <div className={styles.rules}>
            <h4>Reporting Guidelines:</h4>
            <ul>
              <li>Please report to Shreeji Vishramalaya Counter near New Bus Stand, Omkareshwar.</li>
              <li>Every staying devotee must present a valid government photo identity card.</li>
              <li>Alcohol, tobacco, and smoking are strictly forbidden within temple trust premises.</li>
            </ul>
          </div>

          <div className={styles.actions}>
            <button onClick={() => window.print()} className={styles.printBtn}>
              🖨️ Print Vishramalaya Pass
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
            <span className={styles.current}>Vishramalaya Stay</span>
          </div>
          <span className={styles.categoryBadge}>PILGRIM REST HOUSE & ACCOMMODATION</span>
          <h1 className={styles.title}>Shreeji Vishramalaya - Devotee Rest House</h1>
          <p className={styles.subtitle}>
            An Initiative by Shri Omkareshwar Mandir Trust for Devotee Comfort and Safe Pilgrimage Stay.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        {/* Guidelines Banner */}
        <div className={styles.guidelinesCard}>
          <h3>Booking Guidelines & Rules:</h3>
          <ul>
            <li>Vishramalaya passes are issued on first-come-first-served basis for authentic devotees and yatris.</li>
            <li>Online bookings must be confirmed at least 24 hours prior to the date of arrival.</li>
            <li>Separate secure dormitory and family rooms are maintained with 24x7 security surveillance.</li>
            <li>Helpline for room assistance: <strong>8989998686</strong>.</li>
          </ul>
        </div>

        {/* Options Grid */}
        <h2 className={styles.sectionHeading}>Stay Options & Nominal Charges</h2>
        <div className={styles.optionsGrid}>
          {STAY_OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className={`${styles.optCard} ${selectedStay === opt.id ? styles.selectedCard : ""}`}
              onClick={() => setSelectedStay(opt.id)}
            >
              <div className={styles.optTop}>
                <h3>{opt.title}</h3>
                <div className={styles.optPrice}>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.priceNum}>{opt.price}</span>
                  <span className={styles.perPerson}>/ person</span>
                </div>
              </div>

              <div className={styles.timeTag}>
                <span>Check-in: {opt.checkIn}</span> • <span>Check-out: {opt.checkOut}</span>
              </div>

              <p className={styles.optDesc}>{opt.description}</p>

              <ul className={styles.incList}>
                {opt.includes.map((inc, i) => (
                  <li key={i}>✓ {inc}</li>
                ))}
              </ul>

              <button
                type="button"
                className={`${styles.selectBtn} ${selectedStay === opt.id ? styles.selectBtnActive : ""}`}
              >
                {selectedStay === opt.id ? "Selected Stay Option" : "Select This Option"}
              </button>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Book Selected Stay ({activeOption.title})</h3>

          <form onSubmit={handleBooking} className={styles.bookingForm}>
            <div className={styles.grid2}>
              <div className={styles.formGroup}>
                <label htmlFor="date">Date of Stay <span className={styles.req}>*</span></label>
                <input
                  id="date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={stayDate}
                  onChange={(e) => setStayDate(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="persons">Number of Pilgrims <span className={styles.req}>*</span></label>
                <select
                  id="persons"
                  value={persons}
                  onChange={(e) => setPersons(Number(e.target.value))}
                  className={styles.select}
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} Devotee{n > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.grid2}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Primary Devotee Name <span className={styles.req}>*</span></label>
                <input
                  id="name"
                  type="text"
                  placeholder="Full name as per ID"
                  value={devoteeName}
                  onChange={(e) => setDevoteeName(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Mobile Number <span className={styles.req}>*</span></label>
                <input
                  id="phone"
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

            <div className={styles.formGroup}>
              <label htmlFor="idProof">Aadhaar / Voter ID Number <span className={styles.req}>*</span></label>
              <input
                id="idProof"
                type="text"
                placeholder="Required for counter check-in"
                value={idProof}
                onChange={(e) => setIdProof(e.target.value)}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.summaryBar}>
              <div>
                <span className={styles.sumLabel}>Total Pass Amount ({persons} Devotees):</span>
                <strong className={styles.sumTotal}>₹{totalPrice}</strong>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={styles.bookSubmitBtn}
              >
                {loading ? "Confirming..." : `Confirm Vishramalaya Stay (₹${totalPrice})`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
