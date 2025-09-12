"use client"
import { useState, useEffect } from "react";

export default function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only runs on client side
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 960px)");

    // Initial
    setIsDesktop(mediaQuery.matches);

    // Listener
    const handler = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isDesktop;
}
