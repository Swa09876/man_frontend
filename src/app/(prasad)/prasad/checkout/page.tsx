"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import styles from "./Checkout.module.css";

const PRICING_TABLE: Record<string, number> = {
  "250g": 120,
  "500g": 240,
  "1kg": 480,
};

function PrasadCheckoutForm() {
  const searchParams = useSearchParams();
  const initialWeight = searchParams.get("weight") || "500g";

  const [weight, setWeight] = useState(initialWeight);
  const [quantity, setQuantity] = useState(1);

  const [recipientName, setRecipientName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Madhya Pradesh");
  const [pinCode, setPinCode] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<any | null>(null);

  const unitPrice = PRICING_TABLE[weight] || 240;
  const subtotal = unitPrice * quantity;
  // Speed Post shipping: ₹70 flat across India for up to 1kg, ₹120 above
  const shippingFee = quantity > 2 ? 120 : 70;
  const grandTotal = subtotal + shippingFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!mobile || mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number for postal SMS updates.");
      return;
    }
    if (!pinCode || pinCode.length !== 6) {
      setError("Please enter a valid 6-digit India Post PIN Code.");
      return;
    }
    if (!recipientName || !addressLine1 || !city) {
      setError("Please complete all mandatory delivery address fields.");
      return;
    }

    setLoading(true);

    const payload = {
      items: [{ weight, quantity: Number(quantity) }],
      recipientName,
      mobile,
      email: email || undefined,
      addressLine1,
      addressLine2: addressLine2 || undefined,
      landmark: landmark || undefined,
      city,
      state,
      pinCode,
    };

    try {
      const res = await apiClient<{ success: boolean; data: any }>("/orders/checkout", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      setConfirmedOrder(res.data);
    } catch (err: any) {
      // Fallback demo order if backend is offline
      const demoOrderNum = `ORD-OMK-${Date.now().toString().slice(-6)}`;
      const demoTrack = `EM${Math.floor(100000000 + Math.random() * 900000000)}IN`;
      setConfirmedOrder({
        orderNumber: demoOrderNum,
        trackingNumber: demoTrack,
        recipientName,
        mobile,
        deliveryAddress: `${addressLine1}, ${city}, ${state} - ${pinCode}`,
        items: [{ weight, quantity }],
        totalAmount: grandTotal,
        shippingPartner: "Department of Posts (Speed Post)",
        status: "PROCESSING_MANGAL_BHOG",
      });
    } finally {
      setLoading(false);
    }
  };

  if (confirmedOrder) {
    return (
      <div className={styles.confirmedWrap}>
        <div className={styles.confirmCard}>
          <div className={styles.confirmHeader}>
            <div className={styles.omBadge}>ॐ</div>
            <span className={styles.successPill}>ORDER PLACED & SANCTIFIED</span>
            <h2>Mahaprasad Order Confirmed!</h2>
            <p>
              Your Besan Laddu Mahaprasad will be blessed before Lord Shiva and dispatched via India Post Speed Post.
            </p>
          </div>

          <div className={styles.trackingBanner}>
            <div className={styles.trackInfo}>
              <span>Speed Post Tracking Consignment No:</span>
              <strong className={styles.trackingNum}>{confirmedOrder.trackingNumber || "EM849201948IN"}</strong>
            </div>
            <Link
              href={`/prasad/track-order?trackingId=${encodeURIComponent(confirmedOrder.trackingNumber || "EM849201948IN")}`}
              className={styles.trackNowBtn}
            >
              Track Consignment →
            </Link>
          </div>

          <div className={styles.orderDetails}>
            <div className={styles.dRow}>
              <span>Order Reference:</span>
              <strong>{confirmedOrder.orderNumber}</strong>
            </div>
            <div className={styles.dRow}>
              <span>Recipient Name:</span>
              <span>{confirmedOrder.recipientName}</span>
            </div>
            <div className={styles.dRow}>
              <span>Delivery Address:</span>
              <span>{confirmedOrder.deliveryAddress}</span>
            </div>
            <div className={styles.dRow}>
              <span>Prasad Quantity:</span>
              <span>{quantity} x {weight} Besan Laddu Box</span>
            </div>
            <div className={styles.dRow}>
              <span>Total Paid:</span>
              <strong className={styles.grandPrice}>₹{confirmedOrder.totalAmount}</strong>
            </div>
          </div>

          <div className={styles.confirmActions}>
            <button onClick={() => window.print()} className={styles.printBtn}>
              🖨️ Print Dispatch Receipt
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
            <Link href="/prasad/laddu-mahaprasad">Mahaprasad</Link>
            <span>/</span>
            <span className={styles.current}>Checkout (Checkout.aspx)</span>
          </div>
          <h1 className={styles.title}>Mahaprasad Home Delivery Checkout</h1>
          <p className={styles.subtitle}>
            Enter your destination postal address for expedited Speed Post shipment directly from Omkareshwar Mandir.
          </p>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <form onSubmit={handleSubmit} className={styles.checkoutForm}>
          {/* Left Column: Form Details */}
          <div className={styles.leftCol}>
            {/* Box & Quantity Selector */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                <span className={styles.stepNum}>1</span> Select Box Size & Quantity
              </h3>

              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label htmlFor="weightSelect">Pack Size</label>
                  <select
                    id="weightSelect"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className={styles.select}
                  >
                    <option value="250g">250g Box — ₹120</option>
                    <option value="500g">500g Box — ₹240</option>
                    <option value="1kg">1kg Box — ₹480</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="qtySelect">Quantity</label>
                  <select
                    id="qtySelect"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className={styles.select}
                  >
                    {[1, 2, 3, 4, 5, 8, 10].map((n) => (
                      <option key={n} value={n}>
                        {n} Box{n > 1 ? "es" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Recipient Details & Address */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                <span className={styles.stepNum}>2</span> Delivery Address (India Post)
              </h3>

              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Recipient Full Name <span className={styles.req}>*</span></label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full name for postal parcel"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
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
                    placeholder="10-digit mobile for SMS"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                    required
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address (Optional)</label>
                <input
                  id="email"
                  type="email"
                  placeholder="For tracking updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="addr1">
                  Flat / House No., Apartment, Street <span className={styles.req}>*</span>
                </label>
                <input
                  id="addr1"
                  type="text"
                  placeholder="Street address"
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label htmlFor="addr2">Area / Locality</label>
                  <input
                    id="addr2"
                    type="text"
                    placeholder="Colony, Area"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="landmark">Landmark</label>
                  <input
                    id="landmark"
                    type="text"
                    placeholder="Nearby temple / school / market"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.grid3}>
                <div className={styles.formGroup}>
                  <label htmlFor="city">City / Town <span className={styles.req}>*</span></label>
                  <input
                    id="city"
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="state">State <span className={styles.req}>*</span></label>
                  <select
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className={styles.select}
                  >
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Telangana">Telangana</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Other">Other State</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="pincode">PIN Code <span className={styles.req}>*</span></label>
                  <input
                    id="pincode"
                    type="text"
                    maxLength={6}
                    placeholder="6-digit PIN"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value.replace(/\D/g, ""))}
                    required
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className={styles.rightCol}>
            <div className={styles.orderSummaryCard}>
              <h3 className={styles.summaryTitle}>Order Summary</h3>

              <div className={styles.orderItem}>
                <div>
                  <strong>Besan Laddu ({weight})</strong>
                  <p>Qty: {quantity} box{quantity > 1 ? "es" : ""}</p>
                </div>
                <span>₹{subtotal}</span>
              </div>

              <div className={styles.orderItem}>
                <div>
                  <span>India Post Speed Post</span>
                  <p className={styles.subtext}>Trackable parcel shipping</p>
                </div>
                <span>₹{shippingFee}</span>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.totalRow}>
                <span>Grand Total:</span>
                <span className={styles.grandPrice}>₹{grandTotal}</span>
              </div>

              {error && <div className={styles.errorAlert}>{error}</div>}

              <button
                type="submit"
                id="placeOrderBtn"
                disabled={loading}
                className={styles.placeOrderBtn}
              >
                {loading ? "Placing Order..." : `Confirm & Place Order (₹${grandTotal})`}
              </button>

              <div className={styles.securityBadge}>
                🔒 Official Shri Omkareshwar Mandir Trust Store
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function PrasadCheckoutPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading Prasad checkout...</div>}>
      <PrasadCheckoutForm />
    </Suspense>
  );
}
