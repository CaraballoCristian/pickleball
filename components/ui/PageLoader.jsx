"use client";
/* HOOKS */
import { useDark } from "../../context/DarkContext";
/* LIBRARIES */
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = ({ isLoading }) => {
  const { isDark } = useDark();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader" // Animate Presence ID
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center bg-bg dark:bg-bg-dark z-[1000]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" flex items-center justify-center animate-spin "
          >
            {isDark ? (
              <img src="/ball-light.svg" alt="loader" className="objet-cover h-30"/>
            ) : (
              <img src="/ball-dark.svg" alt="loader" className="objet-cover h-30"/>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
