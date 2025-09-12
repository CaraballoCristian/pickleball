"use client";
/* SECTIONS */
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import ReglamentoSection from "../components/ReglamentoSection";
import ClubesAsociados from "../components/ClubesAsociados";
import NoticiasSection from "../components/NoticiasSection";
import TorneosSection from "../components/TorneoSection";


/* MAIN APP */
const PickleballApp = () => {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <ReglamentoSection />
      <ClubesAsociados />
      <NoticiasSection />
      <TorneosSection />
    </>
  );
};

export default PickleballApp;
