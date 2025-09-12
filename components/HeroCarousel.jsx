import { useState, useRef } from "react";
/* HOOKS */
import useCarousel from "../hooks/useCarousel";
import useIsDesktop from "../hooks/useIsDesktop";
/* ICONS */
import { ChevronLeft, ChevronRight } from "lucide-react";
/* LIBRARIES */
import { AnimatePresence } from "framer-motion";
/* UI */
import CarouselItem from "./ui/carouselItem";
/* DATA */
import carouselData from "../data/carouselData";

const HeroCarousel = () => {
  const { currentIndex, direction, goToSlide, goToPrevious, goToNext } =
    useCarousel(carouselData);

  const isDesktop = useIsDesktop();
  
  // ESTADO PARA SWIPE EN MOBILE
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const touchRef = useRef(null);

  // SENSIBILIDAD DEL SWIPE
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // RESET touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const baseStyles = isDesktop ? "absolute top-1/2 transform -translate-y-1/2 bg-bg/40 dark:bg-bg-dark/40 backdrop-blur-sm rounded-full p-3 text-bg dark:text-bg-dark transition-all hover:bg-bg hover:text-bg dark:hover:bg-bg-dark/80 dark:hover:text-bg-dark z-20" : "";

  return (
    <section 
      className="relative h-[72vh] overflow-hidden"
      ref={touchRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >

      {/* CAROUSEL CONTENT */}
      <AnimatePresence custom={direction}>
        <CarouselItem
          key={currentIndex}
          item={carouselData[currentIndex]}
          direction={direction}
        />
      </AnimatePresence>

      {/* LEFT ARROW - DESKTOP */}
      {isDesktop && (
        <button
          onClick={goToPrevious}
          className={`${baseStyles} left-4`}
        >
          <ChevronLeft className="h-6 w-6 text-accent dark:text-accent-dark" />
        </button>
      )}

      {/* RIGHT ARROW - DESKTOP */}
      {isDesktop && (
        <button
          onClick={goToNext}
          className={`${baseStyles} right-4`}
        >
          <ChevronRight className="h-6 w-6 text-accent dark:text-accent-dark" />
        </button>
      )}

      {/* PAGINATION DOTS */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-accent dark:bg-accent-dark"
                : "bg-accent/50 dark:bg-accent-dark/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;