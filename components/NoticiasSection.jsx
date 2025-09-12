/* UI */
import SectionTitle from "./ui/sectionTitle";
import NoticiaCard from "./ui/noticiaCard";
import Button from "./ui/button";
/* LIBRARIES */
import { motion } from "framer-motion";
/* HOOKS */
import useIsDesktop from "../hooks/useIsDesktop";
/* DATA */
import noticiasData from "../data/noticiasData";
/* NAVIGATION */
import Link from "next/link";


const NoticiasSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <section
      id="noticias"
      className="py-16 px-4 bg-gradient-to-b  to-accent dark:to-accent-dark from-transparent"
    >
      {/* CONTAINER */}
      <div className="container mx-auto">
        {/* TITULO */}
        <SectionTitle
          title="Noticias e Información"
          subtitle="Mantente al día con las últimas novedades"
        />
        {/* DATA CONTAINER */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {noticiasData.map(
            (noticia, i) =>
              i < 4 &&
              (isDesktop ? (
                /* DESKTOP RENDER */
                <motion.div
                  key={noticia.id}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <NoticiaCard key={noticia.id} noticia={noticia} />
                </motion.div>
              ) : (
                /* MOBILE RENDER */
                <div key={noticia.id} className="w-[85vw] mx-auto">
                  <NoticiaCard key={noticia.id} noticia={noticia} />
                </div>
              ))
          )}
        </div>

        <div className="text-center mt-15">
          <Link href="/noticias">
            <Button size="lg" variant="secondary">
              Ver más Noticias
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;
