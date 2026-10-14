"use client";

import React, { useState } from "react";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { DARSHAN_SLOTS } from "@/lib/constants";
import styles from "./darshan-booking.module.css";

interface Attendee {
  fullName: string;
  gender: string;
  age: number;
  idProofNumber: string;
}

export default function DarshanBookingPage() {
  const [bookingDate, setBookingDate] = useState("2026-10-15");
  const [slotName, setSlotName] = useState(DARSHAN_SLOTS[0].name);

  // Primary Devotee
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("Male");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [idProofType, setIdProofType] = useState("AADHAAR");
  const [idProofNumber, setIdProofNumber] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // Additional Attendees
  const [attendees, setAttendees] = useState<Attendee[]>([]);

  // State
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<any | null>(null);

  const totalDevotees = 1 + attendees.length;
  const ratePerPerson = 300;
  const totalAmount = totalDevotees * ratePerPerson;

  const handleAddAttendee = () => {
    if (attendees.length >= 9) {
      alert("A maximum of 10 devotees (1 primary + 9 attendees) can be booked per transaction.");
      return;
    }
    setAttendees([
      ...attendees,
      { fullName: "", gender: "Male", age: 30, idProofNumber: "" },
    ]);
  };

  const handleRemoveAttendee = (index: number) => {
    setAttendees(attendees.filter((_, i) => i !== index));
  };

  const handleUpdateAttendee = (index: number, field: keyof Attendee, value: any) => {
    const updated = [...attendees];
    updated[index] = { ...updated[index], [field]: value };
    setAttendees(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!firstName.trim() || !lastName.trim()) {
      setErrorMsg("Please enter devotee first and last name.");
      return;
    }
    if (!mobile.trim() || mobile.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!idProofNumber.trim()) {
      setErrorMsg("Please enter a valid photo identity proof number.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await apiClient<any>("/bookings/darshan", {
        method: "POST",
        body: JSON.stringify({
          bookingDate,
          slotName,
          firstName,
          lastName,
          gender,
          dateOfBirth: dateOfBirth || undefined,
          idProofType,
          idProofNumber,
          mobile,
          email: email || undefined,
          address: address || undefined,
          attendees,
        }),
      });

      setSuccessData(response);
    } catch (err: any) {
      setErrorMsg(err.message || "Unable to complete booking. Please verify quota availability.");
    } finally {
      setIsLoading(false);
    }
  };

  if (successData) {
    return (
      <div className={styles.pageContainer}>
        <div className="container">
          <div className={styles.successCard}>
            <div className={styles.successHeader}>
              <span className={styles.successIcon}>✓</span>
              <h2>Shighra Darshan Ticket Booked!</h2>
              <p>Har Har Mahadev. Your booking has been registered and verified with the temple trust.</p>
            </div>

            <div className={styles.ticketSummaryBox}>
              <div className={styles.summaryRow}>
                <span>Booking Reference:</span>
                <strong>{successData.bookingReference}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Ticket Number:</span>
                <strong>{successData.ticketNumber}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Darshan Date:</span>
                <strong>{successData.date}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Time Slot:</span>
                <strong>{successData.slotName}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Total Persons:</span>
                <strong>{successData.totalPersons} Devotees</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Total Amount Paid:</span>
                <strong className={styles.paidAmount}>₹{successData.totalAmount}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Gate Entry Status:</span>
                <span className={styles.statusConfirmed}>CONFIRMED (Valid for Gate QR Scan)</span>
              </div>
            </div>

            <div className={styles.qrSimulationBox}>
              <div className={styles.qrCodeGraphic}>
                <span>[GATE ENTRY QR: {successData.ticketNumber}]</span>
              </div>
              <p>Present this QR code and original photo IDs at the Shighra Darshan entry turnstile.</p>
            </div>

            <div className={styles.successActions}>
              <button
                type="button"
                className="btn-primary"
                onClick={() => window.print()}
              >
                🖨️ Print / Download Ticket
              </button>
              <Link href="/" className="btn-secondary">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerBanner}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/darshan/vishesh-darshan">Shighra Darshan</Link>
            <span>/</span>
            <span className={styles.current}>Online Booking Form</span>
          </div>
          <span className={styles.categoryBadge}>CONFIRMED SABHAMANDAP ENTRY</span>
          <h1 className={styles.pageTitle}>Shighra Darshan Online Booking</h1>
          <p className={styles.pageSubtitle}>
            Official portal for reserving priority Darshan slots at Shri Omkareshwar Jyotirlinga.
          </p>
        </div>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit} className={styles.formGrid}>
          {/* Main Booking Form */}
          <div className={styles.formCol}>
            {errorMsg && <div className={styles.alertError}>{errorMsg}</div>}

            {/* Step 1: Date & Time Slot */}
            <div className={styles.cardSection}>
              <h3 className={styles.sectionTitle}>1. Select Date & Slot</h3>
              <div className={styles.rowTwo}>
                <div className={styles.inputGroup}>
                  <label htmlFor="txtProgramDate">Darshan Date *</label>
                  <input
                    id="txtProgramDate"
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="ddlProfessionArea">Time Slot *</label>
                  <select
                    id="ddlProfessionArea"
                    value={slotName}
                    onChange={(e) => setSlotName(e.target.value)}
                    className={styles.select}
                  >
                    {DARSHAN_SLOTS.map((slot) => (
                      <option key={slot.id} value={slot.name}>
                        {slot.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Primary Devotee Details */}
            <div className={styles.cardSection}>
              <h3 className={styles.sectionTitle}>2. Primary Devotee Information</h3>
              <div className={styles.rowTwo}>
                <div className={styles.inputGroup}>
                  <label htmlFor="txtFirstName">First Name *</label>
                  <input
                    id="txtFirstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="txtLastName">Last Name *</label>
                  <input
                    id="txtLastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.rowThree}>
                <div className={styles.inputGroup}>
                  <label htmlFor="ddlGenderMain">Gender *</label>
                  <select
                    id="ddlGenderMain"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className={styles.select}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="txtDOB">Date of Birth</label>
                  <input
                    id="txtDOB"
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="idProofType">ID Proof Type *</label>
                  <select
                    id="idProofType"
                    value={idProofType}
                    onChange={(e) => setIdProofType(e.target.value)}
                    className={styles.select}
                  >
                    <option value="AADHAAR">Aadhaar Card (12 Digits)</option>
                    <option value="PASSPORT">Passport</option>
                    <option value="VOTER_ID">Voter ID</option>
                    <option value="PAN">PAN Card</option>
                  </select>
                </div>
              </div>

              <div className={styles.rowTwo}>
                <div className={styles.inputGroup}>
                  <label htmlFor="txtProfessionDetail">ID Card Number *</label>
                  <input
                    id="txtProfessionDetail"
                    type="text"
                    value={idProofNumber}
                    onChange={(e) => setIdProofNumber(e.target.value)}
                    placeholder="Aadhaar (12 digits) / Passport No"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="txtMobile">Mobile Number *</label>
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
              </div>

              <div className={styles.rowTwo}>
                <div className={styles.inputGroup}>
                  <label htmlFor="txtEmail">Email Address</label>
                  <input
                    id="txtEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="For ticket confirmation email"
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="txtAddress">Residential Address</label>
                  <input
                    id="txtAddress"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="City, State"
                    className={styles.input}
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Additional Family Members / Attendees */}
            <div className={styles.cardSection}>
              <div className={styles.attendeeHeader}>
                <h3 className={styles.sectionTitle}>3. Additional Attendees / Family Members</h3>
                <button
                  type="button"
                  onClick={handleAddAttendee}
                  className={styles.btnAddRow}
                >
                  + Add Devotee
                </button>
              </div>

              {attendees.length === 0 ? (
                <p className={styles.noAttendeesText}>
                  No additional devotees added. Booking for 1 devotee (₹300).
                </p>
              ) : (
                <div className={styles.attendeeTable}>
                  {attendees.map((att, idx) => (
                    <div key={idx} className={styles.attendeeRow}>
                      <span className={styles.attendeeIndex}>#{idx + 2}</span>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={att.fullName}
                        onChange={(e) => handleUpdateAttendee(idx, "fullName", e.target.value)}
                        className={styles.input}
                        required
                      />
                      <select
                        value={att.gender}
                        onChange={(e) => handleUpdateAttendee(idx, "gender", e.target.value)}
                        className={styles.select}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <input
                        type="number"
                        placeholder="Age"
                        min={1}
                        max={120}
                        value={att.age}
                        onChange={(e) => handleUpdateAttendee(idx, "age", parseInt(e.target.value, 10))}
                        className={styles.input}
                        style={{ width: "80px" }}
                        required
                      />
                      <input
                        type="text"
                        placeholder="ID / Aadhaar No"
                        value={att.idProofNumber}
                        onChange={(e) => handleUpdateAttendee(idx, "idProofNumber", e.target.value)}
                        className={styles.input}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveAttendee(idx)}
                        className={styles.btnDeleteRow}
                        aria-label="Remove Attendee"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar / Checkout Summary */}
          <div className={styles.summaryCol}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Booking Summary</h3>

              <div className={styles.feeBreakdown}>
                <div className={styles.feeRow}>
                  <span>Darshan Date:</span>
                  <strong>{bookingDate}</strong>
                </div>
                <div className={styles.feeRow}>
                  <span>Time Slot:</span>
                  <strong>{slotName}</strong>
                </div>
                <div className={styles.feeRow}>
                  <span>Primary Devotee:</span>
                  <span>1 Person</span>
                </div>
                <div className={styles.feeRow}>
                  <span>Additional Attendees:</span>
                  <span>{attendees.length} Persons</span>
                </div>
                <div className={styles.feeRow}>
                  <span>Total Devotees:</span>
                  <strong>{totalDevotees} Persons</strong>
                </div>
                <div className={styles.feeRow}>
                  <span>Rate per Person:</span>
                  <span>₹{ratePerPerson}</span>
                </div>

                <div className={styles.totalRow}>
                  <span>Total Payable:</span>
                  <span className={styles.totalAmount}>₹{totalAmount}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary"
                style={{ width: "100%", marginTop: "20px", padding: "14px" }}
              >
                {isLoading ? "Processing Booking..." : `Confirm & Pay ₹${totalAmount}`}
              </button>

              <div className={styles.termsNotice}>
                🔒 Secure SSL encrypted transaction directly verified by Shri Omkareshwar Mandir Trust.
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
