"use client";
import { createContext, useContext, useState, useEffect } from "react";

const DarkContext = createContext();

export const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => setDark((prev) => !prev);

  useEffect(() => {
    if (typeof window !== "undefined") {
      
      // Reads Local Storage
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme) {
        // StoredTheme === "dark" returns a boolean
        setDark(storedTheme === "dark");
      } else {
        
        // Reads Preferred
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setDark(mediaQuery.matches);

        // Sets when it changes
        const handleChange = (e) => setDark(e.matches);
        mediaQuery.addEventListener("change", handleChange);

        // Cleanup
        return () => mediaQuery.removeEventListener("change", handleChange);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Save user preference
      localStorage.setItem("theme", dark ? "dark" : "light");

      // Apply or remove "dark" class to <html>
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [dark]);

  return (
    <DarkContext.Provider value={{ dark, toggleDark }}>
      {children}
    </DarkContext.Provider>
  );
};

export const useDark = () => useContext(DarkContext);
