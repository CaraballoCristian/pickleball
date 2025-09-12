/* HOOKS */
import useIsDesktop from "../../hooks/useIsDesktop";
/* UI */
import Button from "./button";
/* LIBRARIES */
import { motion } from "framer-motion";
/* NEXT.JS */
import Link from "next/link";
import Image from "next/image";

const CarouselItem = ({ item, direction = 1 }) => {
  const isDesktop = useIsDesktop();
  
  return isDesktop ? (
    /* DESKTOP RENDER */
    <motion.div
      key={item.id}
      custom={direction}
      variants={{
        enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
      }}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="absolute inset-0"
    >
      {/* CONTAINER */}
      <div className="relative h-full bg-gradient-to-r from-gray-900/70 to-gray-900/50">
        {/* IMAGE */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="100vw"
          className="object-cover z-0"
          priority={item.id === 1} // Dar prioridad a la primera imagen
          quality={85}
        />
        {/* CENTER TEXT CONTAINER */}
        <div className="flex items-center justify-center text-text-dark h-full text-center px-4">
          {/* CENTER CARD */}
          <motion.div
            className="max-w-4xl lg:min-w-[600px] bg-black/30 p-8 rounded-lg backdrop-blur-sm"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* TITLE */}
            <h2 className="relative z-10 text-3xl md:text-3xl font-bold mb-4">
              {item.title}
            </h2>
            {/* SUBTITLE */}
            <p className="text-lg md:text-xl mb-4 opacity-90">
              {item.description}
            </p>

            {/* CTA BUTTON */}
            <Link href={item.link}>
              <Button size="lg" className="relative z-10 text-lg px-12 py-3">
                {item.cta}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  ) : (
    /* MOBILE RENDER */
    <motion.div
      key={item.id}
      initial={{ x: direction > 0 ? "100%" : "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: direction > 0 ? "-100%" : "100%" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="absolute inset-0"
    >
      {/* CONTAINER */}
      <div className="relative h-full bg-gradient-to-r from-gray-900/70 to-gray-900/50">
        {/* IMAGE */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="100vw"
          className="object-cover z-0"
          priority={item.id === 1} // Dar prioridad a la primera imagen
          quality={85}
        />
        {/* CENTER CARD CONTAINER */}
        <div className="flex items-center justify-center text-text-dark h-full text-center px-4">
          <div className="max-w-4xl lg:min-w-[600px] bg-black/30 p-8 rounded-lg backdrop-blur-sm">
            {/* TITLE */}
            <h2 className="relative z-10 text-3xl md:text-3xl font-bold mb-4">
              {item.title}
            </h2>
            {/* SUBTITLE */}
            <p className="text-lg md:text-xl mb-4 opacity-90">
              {item.description}
            </p>
            {/* CTA BUTTON */}
            <Button size="lg" className="relative z-10 text-lg px-10 py-4">
              {item.cta}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarouselItem;