"use client";
/* ICONS */
import { Menu, X } from "lucide-react";
/* LAYOUT */
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
/* HOOKS */
import useScrollToSection from "../../hooks/useScrollToSection";
import { useState } from "react";
/* LIBRARIES */
import { AnimatePresence } from "framer-motion";


const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Clubes Asociados", href: "/clubes" },
  { label: "Noticias", href: "/noticias" },
  { label: "Torneos", href: "/torneos" },
  { label: "Ranking", href: "/ranking" },
  { label: "Contacto", href: "#contacto" },
  { label: "Admin", href: "/dashboard" },
];

const Navigation = ( ) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  return (
    <>
      {/* DESKTOP MENU */}
      <AnimatePresence>
        <DesktopMenu menuItems={menuItems} scrollToSection={scrollToSection} />
      </AnimatePresence>

      {/* MOBILE MENU BUTTON */}
      <button
        className="lg:hidden p-2 relative z-[999] text-text dark:text-text-dark"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            menuItems={menuItems}
            scrollToSection={scrollToSection}
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
