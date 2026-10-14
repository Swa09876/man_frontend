import type { Metadata } from "next";
import { Poppins, Cinzel } from "next/font/google";
import "@/styles/theme.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingHelp } from "@/components/layout/FloatingHelp";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const cinzel = Cinzel({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Home - Shri Omkareshwar Jyotirlinga Official Website",
  description:
    "Official website of Shri Omkareshwar Jyotirlinga Mandir Trust, Madhya Pradesh, India. Book Shighra Darshan, Abhishek Pujan, E-Aradhana, Laddu Mahaprasad, and Seva donations.",
  keywords: [
    "Omkareshwar",
    "Shri Omkareshwar Jyotirlinga",
    "Darshan Booking",
    "Abhishek Puja",
    "Mahaprasad",
    "Mandir Trust",
    "Narmada",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${cinzel.variable}`}>
      <body>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 350px)" }}>{children}</main>
        <Footer />
        <FloatingHelp />
      </body>
    </html>
  );
}
