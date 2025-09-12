"use client";
/* LIBRARIES */
import { motion } from "framer-motion";
/* UI */
import Redes from "../ui/redes";
import HeaderLogo from "../ui/headerLogo";
import DarkModeSwitcher from "../ui/DarkModeSwitcher";
/* HOOKS */
import { useEffect } from "react";
import { useDark } from "../../context/DarkContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileMenu = ({ menuItems, setIsMenuOpen, isMenuOpen }) => {
  const { toggleDark, dark } = useDark();
  const pathname = usePathname();

  /* CLOSE MENU ON RESIZE */
  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    /* CLEANUP */
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
      {/* BACKDROP BLUR */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className="absolute inset-0 h-screen w-screen bg-black opacity-60 z-40"
      />

      {/* CONTAINER */}
      <motion.div
        className="absolute h-screen w-2/3 top-0 right-0 bg-bg flex flex-col justify-between items-center dark:bg-bg-dark shadow-lg lg:hidden py-25 z-50"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.3,
        }}
      >
        {/* DARK MODE SWITCHER */}
        {
          <div className="absolute h-7 w-7 top-5 left-5 ">
            <DarkModeSwitcher toggleDark={toggleDark} dark={dark} />
          </div>
        }

        {/* LOGO */}
        <HeaderLogo />

        {/* NAV */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          className="w-full flex-grow flex flex-col justify-center"
        >
          <nav className=" flex flex-col p-4 space-y-5 w-full">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  prefetch={true}
                  className={`${
                    isActive ? "text-accent" : "text-text dark:text-text-dark"
                  } transition-colors font-semibold text-center py-2 uppercase w-full mx-auto`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </motion.div>

        {/* SOCIALS */}
        <Redes className="mx-auto" />
      </motion.div>
    </>
  );
};

export default MobileMenu;
