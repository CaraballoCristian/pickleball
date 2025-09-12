"use client";
/* UI */
import HeaderLogo from "../ui/headerLogo";
/* LAYOUT */
import Navigation from "./Navigation";
/* LIBRARIES */
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-bg/60 dark:bg-bg-dark/60 backdrop-blur-md shadow-lg sticky top-0 z-50">
      {/* CONTAINER */}
      <div className="container-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-full w-full flex items-center"
          >
            {/* LOGO */}
            <HeaderLogo />
          </motion.div>

          {/* NAVIGATION */}
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
