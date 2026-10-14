"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NAVIGATION_MENUS } from "@/lib/constants";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // Clear hover timer
  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseEnter = (title: string) => {
    clearTimer();
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    clearTimer();
    // 260ms grace period so moving downward onto menu items never closes abruptly
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 260);
  };

  const toggleDropdown = (title: string) => {
    clearTimer();
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        clearTimer();
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      clearTimer();
    };
  }, []);

  const handleLinkNavigation = (href: string) => {
    clearTimer();
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    router.push(href);
  };

  return (
    <div className={styles.headerWrapper} ref={wrapperRef}>
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Brand Logo */}
          <Link href="/" className={styles.brand} onClick={() => setActiveDropdown(null)}>
            <span className={styles.omSymbol}>ॐ</span>
            <div className={styles.brandText}>
              <span className={styles.brandTitle}>Shri Omkareshwar</span>
              <span className={styles.brandSubtitle}>Jyotirling</span>
            </div>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>

          {/* Navigation Menus & Action */}
          <div className={styles.navRightWrapper}>
            <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ""}`}>
              <ul className={styles.navList}>
                {NAVIGATION_MENUS.map((menu) => {
                  const isOpen = activeDropdown === menu.title;
                  return (
                    <li
                      key={menu.title}
                      className={styles.navItem}
                      onMouseEnter={() => handleMouseEnter(menu.title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        className={`${styles.navButton} ${isOpen ? styles.navButtonActive : ""}`}
                        onClick={() => toggleDropdown(menu.title)}
                        aria-expanded={isOpen}
                      >
                        <span>{menu.title}</span>
                        <svg
                          className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ""}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      {isOpen && (
                        <div
                          className={styles.dropdownMenuWrapper}
                          onMouseEnter={clearTimer}
                          onMouseLeave={handleMouseLeave}
                        >
                          <ul className={styles.dropdownMenu}>
                            {menu.items.map((subItem) => (
                              <li key={subItem.href} className={styles.dropdownItem}>
                                <button
                                  type="button"
                                  className={styles.dropdownLink}
                                  onClick={() => handleLinkNavigation(subItem.href)}
                                >
                                  <span className={styles.itemLabel}>{subItem.label}</span>
                                  {subItem.isNew && (
                                    <span className={styles.newBadge}>NEW</span>
                                  )}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Book Darshan Button */}
              <div className={styles.mobileAction}>
                <Link
                  href="/darshan/vishesh-darshan"
                  className={styles.bookDarshanBtn}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Book Darshan</span>
                  <span className={styles.btnArrow}>→</span>
                </Link>
              </div>
            </nav>

            {/* Desktop Highlighted Book Darshan Action */}
            <Link
              href="/darshan/vishesh-darshan"
              className={styles.headerCtaBtn}
              title="Book Shighra Darshan online"
            >
              <span>Book Darshan</span>
              <span className={styles.btnArrow}>→</span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
