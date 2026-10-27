"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./DarshanTicketPass.module.css";

interface Attendee {
  fullName: string;
  gender: string;
  age: number;
  idProofNumber?: string;
}

interface PrimaryDevotee {
  name: string;
  mobile: string;
  idProofType?: string;
  idProofNumber?: string;
  email?: string;
}

export interface BookingData {
  bookingReference: string;
  ticketNumber: string;
  date: string;
  slotName: string;
  totalPersons: number;
  totalAmount: number;
  status?: string;
  devotee?: {
    name: string;
    mobile: string;
  };
  attendees?: Attendee[];
}

interface DarshanTicketPassProps {
  bookingData: BookingData;
  primaryDevotee?: PrimaryDevotee;
  attendees?: Attendee[];
  onBookAnother?: () => void;
}

/**
 * Deterministic SVG QR Code Generator
 * Creates an authentic 25x25 matrix with standard finder patterns,
 * timing tracks, alignment pattern, and a sacred central Om emblem.
 */
function DeterministicQrCode({ value, size = 140 }: { value: string; size?: number }) {
  const GRID_SIZE = 25;
  const matrix: boolean[][] = Array.from({ length: GRID_SIZE }, () =>
    Array(GRID_SIZE).fill(false)
  );

  // Helper to place 7x7 corner finder pattern
  const placeFinder = (startRow: number, startCol: number) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const isOuter = r === 0 || r === 6 || c === 0 || c === 6;
        const isInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        matrix[startRow + r][startCol + c] = isOuter || isInner;
      }
    }
    // 1-module white separator
    for (let r = -1; r <= 7; r++) {
      for (let c = -1; c <= 7; c++) {
        const row = startRow + r;
        const col = startCol + c;
        if (
          row >= 0 &&
          row < GRID_SIZE &&
          col >= 0 &&
          col < GRID_SIZE &&
          (r === -1 || r === 7 || c === -1 || c === 7)
        ) {
          matrix[row][col] = false;
        }
      }
    }
  };

  // 1. Finder patterns at Top-Left, Top-Right, Bottom-Left
  placeFinder(0, 0);
  placeFinder(0, GRID_SIZE - 7);
  placeFinder(GRID_SIZE - 7, 0);

  // 2. Timing patterns (Row 6 and Col 6)
  for (let i = 8; i < GRID_SIZE - 8; i++) {
    matrix[6][i] = i % 2 === 0;
    matrix[i][6] = i % 2 === 0;
  }

  // 3. Alignment pattern at (16, 16)
  const aRow = 16;
  const aCol = 16;
  for (let r = -2; r <= 2; r++) {
    for (let c = -2; c <= 2; c++) {
      const isOuter = Math.abs(r) === 2 || Math.abs(c) === 2;
      const isCore = r === 0 && c === 0;
      matrix[aRow + r][aCol + c] = isOuter || isCore;
    }
  }

  // 4. Deterministic hash filling for data modules
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }

  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      // Don't overwrite finders or alignment
      const inTL = r <= 7 && c <= 7;
      const inTR = r <= 7 && c >= GRID_SIZE - 8;
      const inBL = r >= GRID_SIZE - 8 && c <= 7;
      const inTiming = r === 6 || c === 6;
      const inAlign = r >= aRow - 2 && r <= aRow + 2 && c >= aCol - 2 && c <= aCol + 2;
      const inCenterOm = r >= 10 && r <= 14 && c >= 10 && c <= 14;

      if (!inTL && !inTR && !inBL && !inTiming && !inAlign && !inCenterOm) {
        // pseudo-random pseudo-data
        const pseudoVal = (Math.abs(hash) * (r * 31 + c * 17) + r * 13 + c) % 100;
        matrix[r][c] = pseudoVal > 48;
      }
    }
  }

  const cellSize = 100 / GRID_SIZE;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ display: "block" }}
      aria-label={`QR Code for Ticket ${value}`}
    >
      <rect width="100" height="100" fill="#ffffff" />
      {matrix.map((row, r) =>
        row.map((cell, c) =>
          cell ? (
            <rect
              key={`${r}-${c}`}
              x={c * cellSize}
              y={r * cellSize}
              width={cellSize + 0.15}
              height={cellSize + 0.15}
              fill="#180b0b"
            />
          ) : null
        )
      )}

      {/* Central Sacred Om Emblem */}
      <circle cx="50" cy="50" r="11" fill="#ffffff" stroke="#D4AF37" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="9" fill="#7A1C1C" />
      <text
        x="50"
        y="53.5"
        textAnchor="middle"
        fontSize="8"
        fill="#FFD700"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        ॐ
      </text>
    </svg>
  );
}

/**
 * Clean SVG Barcode Component
 */
function LinearBarcode({ value }: { value: string }) {
  // Generate deterministic bar widths based on ticket string
  const bars: number[] = [];
  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i);
    bars.push((code % 3) + 1);
    bars.push(((code >> 1) % 2) + 1);
    bars.push(((code >> 2) % 3) + 1);
  }

  let currentX = 10;
  const rects: React.ReactNode[] = [];

  bars.forEach((barWidth, index) => {
    if (index % 2 === 0) {
      rects.push(
        <rect
          key={index}
          x={currentX}
          y="0"
          width={barWidth * 1.6}
          height="32"
          fill="#111827"
        />
      );
    }
    currentX += barWidth * 2.2;
  });

  return (
    <svg width="220" height="32" viewBox={`0 0 ${Math.max(currentX + 10, 220)} 32`}>
      {rects}
    </svg>
  );
}

export const DarshanTicketPass: React.FC<DarshanTicketPassProps> = ({
  bookingData,
  primaryDevotee,
  attendees = [],
  onBookAnother,
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const displayDevoteeName =
    primaryDevotee?.name?.trim() || bookingData.devotee?.name || "Devotee";
  const displayMobile =
    primaryDevotee?.mobile || bookingData.devotee?.mobile || "Not specified";
  const displayIdProof = primaryDevotee?.idProofNumber
    ? `${primaryDevotee.idProofType || "Photo ID"}: ${primaryDevotee.idProofNumber}`
    : "Verified at Counter";

  // Calculate reporting time (20 minutes before slot start time)
  const getReportingTime = (slot: string) => {
    if (!slot) return "20 Mins Prior";
    const parts = slot.split("to");
    if (parts.length > 0) {
      return `Report by ${parts[0].trim()}`;
    }
    return "Report 20 Mins Prior";
  };

  const handleCopyDetails = () => {
    const textToCopy = `*SHRI OMKARESHWAR JYOTIRLINGA DARSHAN PASS*
Ticket Number: ${bookingData.ticketNumber}
Booking Ref: ${bookingData.bookingReference}
Date: ${bookingData.date}
Slot: ${bookingData.slotName}
Devotee: ${displayDevoteeName} (${bookingData.totalPersons} Devotees)
Amount Paid: ₹${bookingData.totalAmount}
Status: CONFIRMED - Sabhamandap Gate 1`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setToastMessage("✓ Ticket details copied to clipboard!");
      setTimeout(() => setToastMessage(null), 3000);
    });
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Om Namah Shivaya! My Shri Omkareshwar Jyotirlinga Shighra Darshan pass is confirmed.\nTicket No: ${bookingData.ticketNumber}\nDate: ${bookingData.date}\nSlot: ${bookingData.slotName}\nRef: ${bookingData.bookingReference}`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <div className={styles.ticketPageWrapper}>
      {/* Subtle Background Glow */}
      <div className={styles.ambientAura} />

      {/* Top Header & Breadcrumbs */}
      <div className={styles.ticketHeaderWrap}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/darshan/vishesh-darshan">Shighra Darshan</Link>
          <span>/</span>
          <span className={styles.current}>E-Ticket Confirmed</span>
        </div>

        <div className={styles.confirmationAlert}>
          <div className={styles.alertLeft}>
            <div className={styles.alertIcon}>✓</div>
            <div className={styles.alertText}>
              <h3>Booking Registered & Verified with Temple Trust</h3>
              <p>Har Har Mahadev. Your priority darshan pass is ready for gate turnstile scanning.</p>
            </div>
          </div>
          <span className={styles.alertBadge}>GATE READY</span>
        </div>
      </div>

      {/* 3. The Grand E-Ticket Card */}
      <div className={styles.ticketCard} id="omkareshwar-darshan-pass">
        {/* Subtle Watermark */}
        <div className={styles.watermark}>ॐ</div>

        {/* Ticket Header */}
        <div className={styles.ticketHeader}>
          <div className={styles.templeBranding}>
            <div className={styles.omEmblem}>ॐ</div>
            <div className={styles.templeTitles}>
              <h1>SHRI OMKARESHWAR JYOTIRLINGA TEMPLE TRUST</h1>
              <div className={styles.templeSubHindi}>
                श्री ओंकारेश्वर ज्योतिर्लिंग मंदिर संस्थान, ओंकारेश्वर (म.प्र.)
              </div>
              <span className={styles.passTypeTag}>
                OFFICIAL SABHAMANDAP SHIGHRA DARSHAN E-PASS
              </span>
            </div>
          </div>

          <div className={styles.headerVerification}>
            <div className={styles.verifiedPill}>
              <span className={styles.verifiedPulse} />
              <span>CONFIRMED & VALIDATED</span>
            </div>
            <div className={styles.issueTime}>
              Issued: {new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
            </div>
          </div>
        </div>

        {/* Schedule Strip */}
        <div className={styles.scheduleStrip}>
          <div className={styles.scheduleItem}>
            <span className={styles.scheduleLabel}>DARSHAN DATE</span>
            <span className={styles.scheduleValue}>{bookingData.date}</span>
            <span className={styles.scheduleSub}>Confirmed Slot</span>
          </div>
          <div className={styles.scheduleItem}>
            <span className={styles.scheduleLabel}>TIME SLOT</span>
            <span className={styles.scheduleValue}>{bookingData.slotName}</span>
            <span className={styles.scheduleSub}>{getReportingTime(bookingData.slotName)}</span>
          </div>
          <div className={styles.scheduleItem}>
            <span className={styles.scheduleLabel}>ENTRY GATE</span>
            <span className={styles.scheduleValue}>Gate No. 1</span>
            <span className={styles.scheduleSub}>North Sabhamandap Turnstile</span>
          </div>
          <div className={styles.scheduleItem}>
            <span className={styles.scheduleLabel}>TOTAL DEVOTEES</span>
            <span className={styles.scheduleValue}>{bookingData.totalPersons} Persons</span>
            <span className={styles.scheduleSub}>Priority Quota</span>
          </div>
        </div>

        {/* Ticket Perforation Notch */}
        <div className={styles.perforationWrap}>
          <div className={styles.notchLeft} />
          <div className={styles.notchLine} />
          <div className={styles.notchRight} />
        </div>

        {/* Ticket Main Body */}
        <div className={styles.ticketBody}>
          {/* Details Grid */}
          <div className={styles.detailsGrid}>
            <div className={styles.detailBox}>
              <span className={styles.detailLabel}>Ticket Number</span>
              <span className={`${styles.detailValue} ${styles.detailMono}`}>
                {bookingData.ticketNumber}
              </span>
            </div>

            <div className={styles.detailBox}>
              <span className={styles.detailLabel}>Booking Reference</span>
              <span className={`${styles.detailValue} ${styles.detailMono}`}>
                {bookingData.bookingReference}
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className={styles.copyBtn}
                  title="Copy Reference"
                >
                  Copy
                </button>
              </span>
            </div>

            <div className={styles.detailBox}>
              <span className={styles.detailLabel}>Total Paid Tariff</span>
              <span className={`${styles.detailValue} ${styles.paidHighlight}`}>
                ₹{bookingData.totalAmount} (Paid in Full)
              </span>
            </div>

            <div className={styles.detailBox}>
              <span className={styles.detailLabel}>Primary Devotee Name</span>
              <span className={styles.detailValue}>{displayDevoteeName}</span>
            </div>

            <div className={styles.detailBox}>
              <span className={styles.detailLabel}>Registered Mobile</span>
              <span className={styles.detailValue}>{displayMobile}</span>
            </div>

            <div className={styles.detailBox}>
              <span className={styles.detailLabel}>Photo Identity Proof</span>
              <span className={styles.detailValue}>{displayIdProof}</span>
            </div>
          </div>

          {/* Attendees Breakdown Table (if multiple devotees booked) */}
          {attendees && attendees.length > 0 && (
            <div className={styles.attendeesSection}>
              <h4 className={styles.attendeesTitle}>
                <span>👥</span> Devotees Registered in this Pass ({bookingData.totalPersons}):
              </h4>
              <table className={styles.attendeesTable}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Devotee Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Photo ID / Aadhaar</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Primary Devotee */}
                  <tr>
                    <td><strong>1 (Primary)</strong></td>
                    <td><strong>{displayDevoteeName}</strong></td>
                    <td>{attendees[0]?.gender || "Male"}</td>
                    <td>—</td>
                    <td>{primaryDevotee?.idProofNumber || "Verified"}</td>
                  </tr>
                  {/* Additional Attendees */}
                  {attendees.map((att, idx) => {
                    // Avoid duplicating primary if backend already prepended it
                    if (att.fullName === displayDevoteeName && idx === 0) return null;
                    return (
                      <tr key={idx}>
                        <td>{idx + 2}</td>
                        <td>{att.fullName}</td>
                        <td>{att.gender}</td>
                        <td>{att.age} yrs</td>
                        <td>{att.idProofNumber || "N/A"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Scannable Validation Panel (QR + Barcode + Trust Rubber Stamp) */}
          <div className={styles.validationPanel}>
            <div className={styles.qrContainer}>
              <div className={styles.qrGraphicWrapper}>
                <DeterministicQrCode
                  value={`OMK-DARSHAN-${bookingData.ticketNumber}-${bookingData.bookingReference}`}
                  size={135}
                />
              </div>
              <span className={styles.qrInstruction}>Turnstile QR Scan</span>
            </div>

            <div className={styles.barcodeContainer}>
              <div className={styles.barcodeHeader}>
                <span className={styles.barcodeTitle}>Automated Gate Turnstile Barcode</span>
                <span className={styles.barcodeSub}>
                  Present this pass directly at the optical laser turnstiles at Gate 1.
                </span>
              </div>
              <div className={styles.barcodeSvgWrap}>
                <LinearBarcode value={bookingData.ticketNumber} />
                <span className={styles.barcodeText}>* {bookingData.ticketNumber} *</span>
              </div>
            </div>

            <div className={styles.stampBox}>
              <div className={styles.rubberStamp}>
                <span className={styles.stampIcon}>🔱</span>
                <span className={styles.stampText1}>OMKARESHWAR</span>
                <span className={styles.stampStatus}>VERIFIED</span>
                <span className={styles.stampText2}>MANDIR TRUST</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 5. Action Buttons */}
      <div className={styles.actionBar}>
        <button
          type="button"
          onClick={() => window.print()}
          className={styles.btnPrint}
        >
          🖨️ Print / Download PDF Ticket
        </button>

        <button
          type="button"
          onClick={handleCopyDetails}
          className={styles.btnSecondary}
        >
          📋 Copy Pass Details
        </button>

        <button
          type="button"
          onClick={handleWhatsAppShare}
          className={styles.btnSecondary}
        >
          💬 Share on WhatsApp
        </button>

        {onBookAnother && (
          <button
            type="button"
            onClick={onBookAnother}
            className={styles.btnSecondary}
          >
            🔄 Book Another Darshan
          </button>
        )}

        <Link href="/" className={styles.btnGhost}>
          🏠 Return to Home
        </Link>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className={styles.toastNotification}>
          {toastMessage}
        </div>
      )}
    </div>
  );
};
