"use client";
// STYLES
import "./globals.css";
// FONTS
import { Inter, Archivo } from "next/font/google";
// HOOKS
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// LAYOUT
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// UI
import PageLoader from "../components/ui/PageLoader";
// CONTEXT
import { DarkProvider } from "../context/DarkContext";

/* Primary font setting */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
/* Secondary font setting */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export default function ClientProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Initial Load
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`${archivo.variable} ${inter.variable} antialiased bg-bg dark:bg-bg-dark `}
    >
      <DarkProvider>
        {/* Page Loader */}
        <PageLoader isLoading={isLoading} />
        {!isLoading && (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </DarkProvider>
    </div>
  );
}
