"use client";

import React, { useState } from "react";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import styles from "./ticket-reprint.module.css";

export default function TicketReprintPage() {
  const [transactionId, setTransactionId] = useState("");
  const [mobile, setMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);
    setBookingData(null);

    try {
      const data = await apiClient<any>("/bookings/ticket-reprint", {
        method: "POST",
        body: JSON.stringify({
          transactionId: transactionId.trim(),
          mobile: mobile.trim(),
        }),
      });
      setBookingData(data);
    } catch (err: any) {
      setErrorMsg(
        err.message || "No verified booking matching this Transaction ID and Mobile Number."
      );
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
            <span className={styles.current}>Ticket Reprint</span>
          </div>
          <span className={styles.categoryBadge}>INSTANT PASS RE-DOWNLOAD</span>
          <h1 className={styles.pageTitle}>Ticket Reprint & Download (टिकट पुनर्प्राप्ति)</h1>
          <p className={styles.pageSubtitle}>
            Retrieve and download your confirmed gate entry Darshan ticket using your Booking Reference or Transaction ID.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.cardWrapper}>
          <form onSubmit={handleSubmit} className={styles.formBox}>
            <div className={styles.inputGroup}>
              <label htmlFor="txtTransactionId">Transaction / Booking ID *</label>
              <input
                id="txtTransactionId"
                type="text"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder="e.g. OMK-DRS-123456-7890 or TXN-..."
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="txtMobile">Registered Mobile Number *</label>
              <input
                id="txtMobile"
                type="tel"
                maxLength={10}
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                placeholder="10-digit mobile number"
                className={styles.input}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary"
              style={{ width: "100%", padding: "12px", marginTop: "12px" }}
            >
              {isLoading ? "Searching Ticket..." : "Search & Reprint Ticket"}
            </button>
          </form>

          {errorMsg && <div className={styles.alertError}>{errorMsg}</div>}

          {bookingData && (
            <div className={styles.ticketCard} id="printableTicket">
              <div className={styles.ticketTopBar}>
                <div>
                  <h3 className={styles.trustTitle}>SHRI OMKARESHWAR MANDIR TRUST</h3>
                  <p className={styles.subText}>Shighra Darshan Entry Pass • Har Har Mahadev</p>
                </div>
                <div className={styles.ticketNoBox}>
                  <span>TICKET NO</span>
                  <strong>{bookingData.ticket?.ticketNumber || "N/A"}</strong>
                </div>
              </div>

              <div className={styles.ticketDetailsGrid}>
                <div className={styles.detailItem}>
                  <span>Booking Reference:</span>
                  <strong>{bookingData.bookingReference}</strong>
                </div>
                <div className={styles.detailItem}>
                  <span>Darshan Date:</span>
                  <strong>{new Date(bookingData.bookingDate).toLocaleDateString()}</strong>
                </div>
                <div className={styles.detailItem}>
                  <span>Assigned Time Slot:</span>
                  <strong>{bookingData.slot?.slotName}</strong>
                </div>
                <div className={styles.detailItem}>
                  <span>Primary Devotee:</span>
                  <strong>{bookingData.devotee?.firstName} {bookingData.devotee?.lastName}</strong>
                </div>
                <div className={styles.detailItem}>
                  <span>Devotee Mobile:</span>
                  <strong>{bookingData.devotee?.mobile}</strong>
                </div>
                <div className={styles.detailItem}>
                  <span>Total Devotees:</span>
                  <strong>{bookingData.totalPerson} Persons</strong>
                </div>
                <div className={styles.detailItem}>
                  <span>Total Paid Tariff:</span>
                  <strong>₹{bookingData.totalAmount}</strong>
                </div>
                <div className={styles.detailItem}>
                  <span>Verification Status:</span>
                  <span className={styles.badgeSuccess}>CONFIRMED</span>
                </div>
              </div>

              {bookingData.attendees && bookingData.attendees.length > 0 && (
                <div className={styles.attendeesList}>
                  <h4>Devotee Names Covered in Pass:</h4>
                  <ul>
                    {bookingData.attendees.map((a: any, i: number) => (
                      <li key={i}>
                        {i + 1}. {a.fullName} ({a.gender}, Age {a.age})
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.qrArea}>
                <div className={styles.qrCodeBox}>
                  <code>[GATE QR CODE: {bookingData.ticket?.ticketNumber}]</code>
                </div>
                <p>Present this ticket at the Shighra Darshan queue turnstile gate.</p>
              </div>

              <div className={styles.ticketActions}>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="btn-primary"
                >
                  🖨️ Print Ticket / Download PDF
                </button>
              </div>
            </div>
          )}

          {/* Helpful Instructions Box when no ticket is loaded yet */}
          {!bookingData && (
            <div className={styles.reprintHelpCard}>
              <h3 className={styles.helpTitle}>How to Retrieve Your Booking Reference</h3>
              <ul className={styles.helpSteps}>
                <li>
                  📲 <strong>SMS Confirmation:</strong> A booking reference code (e.g. <code>OMK-DRS-2026...</code>) was sent to your registered mobile upon successful payment.
                </li>
                <li>
                  📧 <strong>Email Receipt:</strong> If email was provided during checkout, your full PDF e-pass is attached in the confirmation email.
                </li>
                <li>
                  🔍 <strong>Lost Your Reference?</strong> You can search all bookings linked to your phone number on our <Link href="/booking/find-booking">Find Booking Page →</Link>.
                </li>
                <li>
                  📞 <strong>24x7 Mandir Helpline:</strong> For urgent gate assistance, contact the temple control room at <strong>8989998686</strong>.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
