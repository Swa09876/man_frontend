"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./FloatingHelp.module.css";
import { TEMPLE_INFO } from "@/lib/constants";

export const FloatingHelp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.helpFloat}>
      {isOpen && (
        <div className={styles.helpOptions}>
          <a href={`tel:${TEMPLE_INFO.helpline}`} className={styles.optionLink}>
            📞 24x7 Helpline: {TEMPLE_INFO.helpline}
          </a>
          <Link
            href="/booking/find-booking"
            className={styles.optionLink}
            onClick={() => setIsOpen(false)}
          >
            🔍 Find Booking
          </Link>
          <Link
            href="/booking/ticket-reprint"
            className={styles.optionLink}
            onClick={() => setIsOpen(false)}
          >
            🖨️ Ticket Reprint
          </Link>
          <Link
            href="/booking/availability"
            className={styles.optionLink}
            onClick={() => setIsOpen(false)}
          >
            🎫 Ticket Availability
          </Link>
          <Link
            href="/feedback"
            className={styles.optionLink}
            onClick={() => setIsOpen(false)}
          >
            💬 Devotee Feedback
          </Link>
        </div>
      )}
      <button
        type="button"
        className={styles.helpBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Temple Support Helpline"
      >
        {isOpen ? "✕" : "Help"}
      </button>
    </div>
  );
};
