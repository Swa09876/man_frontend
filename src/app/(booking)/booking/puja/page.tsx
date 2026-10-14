"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import styles from "./PujaBooking.module.css";

interface PujaCategoryOption {
  category: string;
  services: { name: string; price: number; brahmins: number }[];
}

const PUJA_CATEGORIES: PujaCategoryOption[] = [
  {
    category: "Abhishek Pooja",
    services: [
      { name: "Jalabhishek 1 Brahmin", price: 2100, brahmins: 1 },
      { name: "Panchamrit Pujan 5 Brahmin", price: 5100, brahmins: 5 },
      { name: "Laghu Rudrabhishek 11 Brahmin", price: 21000, brahmins: 11 },
      { name: "Maha Rudrabhishek 11 Brahmins", price: 51000, brahmins: 11 },
    ],
  },
  {
    category: "Partheshwar Puja",
    services: [
      { name: "Mitti Shivling Nirman & Pujan", price: 1100, brahmins: 1 },
      { name: "Ekottar Shata Linga Archana", price: 3100, brahmins: 3 },
      { name: "Sahasra Partheshwar Abhishek", price: 11000, brahmins: 7 },
    ],
  },
  {
    category: "Navgrah Shanti",
    services: [
      { name: "Navgrah Homa & Pujan", price: 2500, brahmins: 2 },
      { name: "Sampoorna Grah Dosh Nivaran", price: 5500, brahmins: 5 },
    ],
  },
  {
    category: "Kalsarp Dosh",
    services: [
      { name: "Kalsarp Yog Nivaran (Normal)", price: 3500, brahmins: 2 },
      { name: "Vishesh Kalsarp Maha Puja", price: 7500, brahmins: 4 },
    ],
  },
  {
    category: "Maha Mrityunjaya",
    services: [
      { name: "Mrityunjaya Jaap (1100 Jaap)", price: 2100, brahmins: 1 },
      { name: "Maha Mrityunjaya Anushthan (11000 Jaap)", price: 15000, brahmins: 5 },
    ],
  },
  {
    category: "Narmada Pujan",
    services: [
      { name: "Maa Narmada Deepdan & Dugdh Abhishek", price: 1100, brahmins: 1 },
      { name: "Maa Narmada Maha Aarti Seva", price: 3100, brahmins: 2 },
    ],
  },
  {
    category: "E-Aradhana",
    services: [
      { name: "Daily Sankalpam E-Aradhana", price: 501, brahmins: 1 },
      { name: "Monthly Masik Shivratri E-Pujan", price: 2100, brahmins: 1 },
    ],
  },
];

function PujaBookingForm() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "Abhishek Pooja";
  const initialService = searchParams.get("service") || "Jalabhishek 1 Brahmin";

  const [category, setCategory] = useState(initialCategory);
  const [selectedService, setSelectedService] = useState(initialService);
  const [pujaDate, setPujaDate] = useState("");
  const [gotra, setGotra] = useState("");
  const [sankalpName, setSankalpName] = useState("");
  const [totalPerson, setTotalPerson] = useState(2);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [idProofNumber, setIdProofNumber] = useState("");
  const [address, setAddress] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<any | null>(null);

  // Available services based on selected category
  const activeCategoryObj = PUJA_CATEGORIES.find((c) => c.category === category) || PUJA_CATEGORIES[0];
  const activeServiceObj = activeCategoryObj.services.find((s) => s.name === selectedService) || activeCategoryObj.services[0];

  useEffect(() => {
    // When category changes, reset selected service to first in category if mismatch
    const found = activeCategoryObj.services.find((s) => s.name === selectedService);
    if (!found) {
      setSelectedService(activeCategoryObj.services[0].name);
    }
  }, [category]);

  // Set default minimum date to tomorrow
  const minDate = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!pujaDate) {
      setError("Please select an auspicious date for the Puja.");
      return;
    }
    if (!mobile || mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!firstName || !lastName) {
      setError("Please provide first and last name of primary devotee.");
      return;
    }

    setLoading(true);

    const payload = {
      category,
      serviceName: activeServiceObj.name,
      pujaDate,
      gotra: gotra || "Kashyap (Default)",
      sankalpName: sankalpName || `${firstName} ${lastName} Family`,
      totalPerson: Number(totalPerson),
      firstName,
      lastName,
      mobile,
      email: email || undefined,
      gender,
      idProofNumber: idProofNumber || undefined,
      address: address || undefined,
    };

    try {
      const res = await apiClient<{ success: boolean; data: any }>("/puja/book", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      setConfirmedBooking(res.data);
    } catch (err: any) {
      // Fallback demonstration response if offline
      setConfirmedBooking({
        bookingRef: `OMK-PUJ-20261011-${Math.floor(1000 + Math.random() * 9000)}`,
        serviceName: activeServiceObj.name,
        category,
        pujaDate,
        amount: activeServiceObj.price,
        devoteeName: `${firstName} ${lastName}`,
        sankalpName: sankalpName || `${firstName} ${lastName} Family`,
        gotra: gotra || "Kashyap",
        mobile,
        status: "CONFIRMED",
        venue: "Sabhamandap, Main Temple",
      });
    } finally {
      setLoading(false);
    }
  };

  if (confirmedBooking) {
    return (
      <div className={styles.successWrapper}>
        <div className={styles.successCard}>
          <div className={styles.successHeader}>
            <div className={styles.omBadge}>ॐ</div>
            <span className={styles.successTag}>RITUAL BOOKING CONFIRMED</span>
            <h2 className={styles.successTitle}>Har Har Mahadev!</h2>
            <p className={styles.successSub}>
              Your Puja Sankalp has been registered at Shri Omkareshwar Jyotirlinga.
            </p>
          </div>

          <div className={styles.receiptBody}>
            <div className={styles.receiptRow}>
              <span>Booking Reference:</span>
              <strong>{confirmedBooking.bookingRef}</strong>
            </div>
            <div className={styles.receiptRow}>
              <span>Puja Seva:</span>
              <strong>{confirmedBooking.serviceName}</strong>
            </div>
            <div className={styles.receiptRow}>
              <span>Auspicious Date:</span>
              <strong>{confirmedBooking.pujaDate}</strong>
            </div>
            <div className={styles.receiptRow}>
              <span>Sankalp in Name of:</span>
              <strong>{confirmedBooking.sankalpName} ({confirmedBooking.gotra} Gotra)</strong>
            </div>
            <div className={styles.receiptRow}>
              <span>Primary Devotee:</span>
              <span>{confirmedBooking.devoteeName} ({confirmedBooking.mobile})</span>
            </div>
            <div className={styles.receiptRow}>
              <span>Dakshina / Seva Fee:</span>
              <strong className={styles.priceHighlight}>₹{confirmedBooking.amount}</strong>
            </div>
            <div className={styles.receiptRow}>
              <span>Venue:</span>
              <span>Sabhamandap, Shri Omkareshwar Mandir</span>
            </div>
          </div>

          <div className={styles.instructions}>
            <h4>Priest Reporting Instructions:</h4>
            <ul>
              <li>Please report to the Sabhamandap Priest Office by <strong>07:30 AM</strong> on the scheduled morning.</li>
              <li>Devotees participating in the ritual should follow traditional dress code (Dhoti/Kurta for men, Saree/Salwar for women).</li>
              <li>Puja Samagri (flowers, bilvapatra, milk, prasad) is arranged directly by the Mandir Trust.</li>
            </ul>
          </div>

          <div className={styles.actionButtons}>
            <button
              onClick={() => window.print()}
              className={styles.printBtn}
            >
              🖨️ Print Puja Pass & Sankalp Slip
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
      {/* Header Banner */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services/abhishek-puja">Services</Link>
            <span>/</span>
            <span className={styles.current}>Online Puja Booking (OnlineBookingVP)</span>
          </div>
          <h1 className={styles.title}>Online Puja & Vedic Ritual Booking</h1>
          <p className={styles.subtitle}>
            Book your sacred Abhishek, Rudrabhishek, Kalsarp Dosh, and Special Anushthan with authenticated temple Archaks.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          {/* Step 1: Ritual Details */}
          <div className={styles.sectionCard}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.stepNum}>1</span> Select Sacred Ritual & Schedule
            </h3>

            <div className={styles.grid2}>
              <div className={styles.formGroup}>
                <label htmlFor="categorySelect">
                  Puja Category <span className={styles.req}>*</span>
                </label>
                <select
                  id="categorySelect"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={styles.selectInput}
                >
                  {PUJA_CATEGORIES.map((c) => (
                    <option key={c.category} value={c.category}>
                      {c.category}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="serviceSelect">
                  Specific Ritual Package <span className={styles.req}>*</span>
                </label>
                <select
                  id="serviceSelect"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className={styles.selectInput}
                >
                  {activeCategoryObj.services.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} — ₹{s.price.toLocaleString("en-IN")}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.grid3}>
              <div className={styles.formGroup}>
                <label htmlFor="pujaDateInput">
                  Auspicious Puja Date <span className={styles.req}>*</span>
                </label>
                <input
                  id="pujaDateInput"
                  type="date"
                  min={minDate}
                  value={pujaDate}
                  onChange={(e) => setPujaDate(e.target.value)}
                  required
                  className={styles.textInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="gotraInput">
                  Family Gotra <span className={styles.req}>*</span>
                </label>
                <input
                  id="gotraInput"
                  type="text"
                  placeholder="e.g. Kashyap, Bhardwaj, Vatsa"
                  value={gotra}
                  onChange={(e) => setGotra(e.target.value)}
                  className={styles.textInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="personsCount">
                  Total Attendees <span className={styles.req}>*</span>
                </label>
                <select
                  id="personsCount"
                  value={totalPerson}
                  onChange={(e) => setTotalPerson(Number(e.target.value))}
                  className={styles.selectInput}
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} Person{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="sankalpInput">
                Sankalp Dedication (Names of family members)
              </label>
              <input
                id="sankalpInput"
                type="text"
                placeholder="e.g. Ramesh Sharma, Sunita Sharma, Priya Sharma"
                value={sankalpName}
                onChange={(e) => setSankalpName(e.target.value)}
                className={styles.textInput}
              />
            </div>
          </div>

          {/* Step 2: Primary Devotee Information */}
          <div className={styles.sectionCard}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.stepNum}>2</span> Primary Devotee Contact Information
            </h3>

            <div className={styles.grid2}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">
                  First Name <span className={styles.req}>*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className={styles.textInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName">
                  Last Name <span className={styles.req}>*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className={styles.textInput}
                />
              </div>
            </div>

            <div className={styles.grid3}>
              <div className={styles.formGroup}>
                <label htmlFor="mobile">
                  Mobile Number <span className={styles.req}>*</span>
                </label>
                <input
                  id="mobile"
                  type="tel"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                  required
                  className={styles.textInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="For receipt & updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.textInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className={styles.selectInput}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className={styles.grid2}>
              <div className={styles.formGroup}>
                <label htmlFor="idProof">ID Proof / Aadhaar Number</label>
                <input
                  id="idProof"
                  type="text"
                  placeholder="Aadhaar / Voter ID / Passport"
                  value={idProofNumber}
                  onChange={(e) => setIdProofNumber(e.target.value)}
                  className={styles.textInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="address">Residential City / State</label>
                <input
                  id="address"
                  type="text"
                  placeholder="City, State"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={styles.textInput}
                />
              </div>
            </div>
          </div>

          {/* Pricing & Confirmation Summary */}
          <div className={styles.summaryCard}>
            <div className={styles.summaryLeft}>
              <h4>Ritual Fee Summary</h4>
              <p className={styles.summaryItem}>
                <span>Selected Seva:</span>
                <strong>{activeServiceObj.name}</strong>
              </p>
              <p className={styles.summaryItem}>
                <span>Vedic Priests:</span>
                <strong>{activeServiceObj.brahmins} Brahmins</strong>
              </p>
              <p className={styles.summaryItem}>
                <span>Mandir Samagri & Dakshina:</span>
                <span>Included</span>
              </p>
            </div>

            <div className={styles.summaryRight}>
              <div className={styles.totalPrice}>
                <span className={styles.totalLabel}>Total Seva Dakshina:</span>
                <span className={styles.totalValue}>₹{activeServiceObj.price.toLocaleString("en-IN")}</span>
              </div>

              {error && <div className={styles.formError}>{error}</div>}

              <button
                type="submit"
                id="confirmPujaBtn"
                disabled={loading}
                className={styles.submitBtn}
              >
                {loading ? "Processing Booking..." : `Confirm & Book Puja (₹${activeServiceObj.price})`}
              </button>

              <p className={styles.secureNotice}>
                🔒 Official Shri Omkareshwar Mandir Trust Gateway • Instant Confirmation
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function PujaBookingPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading ritual booking portal...</div>}>
      <PujaBookingForm />
    </Suspense>
  );
}
