/* UI */
import AboutCard from "./ui/aboutCard";
import SectionTitle from "./ui/sectionTitle";
/* LIBRARIES */
import { motion } from "framer-motion";
/* HOOKS */
import useIsDesktop from "@/hooks/useIsDesktop";
/* DATA */
import aboutData from "../data/aboutData";

const AboutSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <section
      id="about"
      className="relative py-16 px-4 bg-gradient-to-b dark:to-accent-dark to-accent from-transparent"
    >
      {/* CONTAINER */}
      <div className="container mx-auto">
        {/* TITULO */}
        <SectionTitle
          title="¿Qué es Pickleball?"
          subtitle="El deporte que combina lo mejor del tenis, bádminton y ping-pong"
        />

        {/* DATA CONTAINER */}
        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.map((item, i) =>
            /* DESKTOP RENDER */
            isDesktop ? (
              <motion.div
                key={item.id}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {/* CARD */}
                <AboutCard
                  title={item.title}
                  subtitle={item.subtitle}
                  icon={item.icon}
                />
              </motion.div>
            ) : (

              /* MOBILE RENDER */
              <div key={item.id} className="w-[85vw] mx-auto">
                {/* CARD */}
                <AboutCard
                  title={item.title}
                  subtitle={item.subtitle}
                  icon={item.icon}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
