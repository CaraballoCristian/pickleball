"use client";
/* LIBRARIES */
import { motion } from "framer-motion";
/* HOOKS */
import { useDark } from "../../context/DarkContext";
import { usePathname } from "next/navigation";
/* UI */
import DarkModeSwitcher from "../ui/DarkModeSwitcher";

const DesktopMenu = ({ menuItems }) => {
  const pathname = usePathname();

  const { toggleDark, dark } = useDark();

  return (
    <nav className="hidden lg:flex space-x-8 justify-center items-center">
      {menuItems.map((item, i) => {
        const isActive = pathname === item.href;

        return (
          <div key={item.label} className="relative">
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + i * 0.2,
              }}
              href={item.href}
              className={`
                ${
                  isActive
                    ? "text-accent border-b-2 border-accent dark:text-accent-dark dark:border-accent-dark font-semibold "
                    : "text-text dark:text-text-dark "
                } hover:text-accent transition-colors font-medium flex items-center cursor-pointer p-1 text-nowrap
                `}
            >
              {item.label}
            </motion.a>
          </div>
        );
      })}

      {/* DARK MODE SWITCHER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-full w-full flex items-center"
      >
        <DarkModeSwitcher toggleDark={toggleDark} dark={dark} />
      </motion.div>
    </nav>
  );
};

export default DesktopMenu;
