/* HOOKS */
import useIsDesktop from "../hooks/useIsDesktop";
/* UI */
import Button from "./ui/button";
import ClubCard from "./ui/clubCard";
import SectionTitle from "./ui/sectionTitle";
/* LIBRARIES */
import { motion } from "framer-motion";
/* DATA */
import clubesData from "../data/clubesData";
/* NAVIGATION */
import Link from "next/link";

const ClubesAsociados = () => {
  const isDesktop = useIsDesktop();

  return (
    <section id="clubes" className="relative z-10 py-16 px-4">
      {/* CONTAINER */}
      <div className="container mx-auto text-center">
        {/* TITULO */}
        <SectionTitle
          title="Clubes Asociados"
          subtitle="Encuentra el club más cercano a ti"
        />
        {/* DATA CONTAINER */}
        <div className=" mx-auto grid md:grid-cols-2 gap-8   md:max-w-[1024px]">
          {clubesData.map(
            (club, i) =>
              i < 4 &&
              (isDesktop ? (
                /* DESKTOP RENDER */
                <motion.div
                  key={i}
                  initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.2,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <ClubCard key={club.id} club={club} />
                </motion.div>
              ) : (
                /* MOBILE RENDER */
                <div key={i} className="w-[85vw] mx-auto">
                  <ClubCard key={club.id} club={club} />
                </div>
              ))
          )}
        </div>

        {/* BUTTON VER MAS */}
        <Link href="/clubes">
          <Button className="mt-15 " size="lg">
            Ver más clubes
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ClubesAsociados;
