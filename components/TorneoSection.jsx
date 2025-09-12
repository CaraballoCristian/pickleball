/* UI */
import SectionTitle from "./ui/sectionTitle";
import TorneoFlyer from "./ui/torneoFlayer";
import Button from "./ui/button";
/* LIBRARIES */
import { motion } from "framer-motion";
/* HOOKS */
import useIsDesktop from "../hooks/useIsDesktop";
/* DATA */
import torneosDestacados from "../data/torneosData";
/* NAVIGATION */
import Link from "next/link";

const TorneosSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <section id="torneos" className="py-16 px-4 bg-accent dark:bg-accent-dark">
      {/* CONTAINER */}
      <div className="container mx-auto">
        {/* TITULO */}
        <SectionTitle
          title="Próximos Torneos"
          subtitle="Eventos y competencias oficiales"
          invert={true}
        />

        {/* DATA CONTAINER */}
        <div className="grid md:grid-cols-3 gap-8">
          {torneosDestacados.map((torneo, i) =>

          /* DESKTOP RENDER */
            isDesktop ? (
              <motion.div
                key={i}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <TorneoFlyer torneo={torneo} />
              </motion.div>
            ) : (
              /* MOBILE RENDER */
              <div key={torneo.id} className="w-[85vw] mx-auto">
                <TorneoFlyer torneo={torneo} />
              </div>
            )
          )}
        </div>
      </div>

      <div className="text-center mt-15">
          <Link href="/torneos">
            <Button size="lg" variant="secondary">
              Ver más Torneos
            </Button>
          </Link>
        </div>

    </section>
  );
};

export default TorneosSection;
