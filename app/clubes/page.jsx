"use client";
/* UI */
import ClubCard from "../../components//ui/clubCard";
import PageTitle from "../../components/ui/pageTitle";
import Button from "../../components/ui/button";
import Cta from "../../components/ui/cta";
/* DATA */
import clubes from "../../data/clubesData";
/* LIBRARIES */
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark my-15">
      {/* HEADER */}
      <PageTitle
        title="CLUBES ASOCIADOS"
        subtitle="Descubrí todos los clubes que forman parte de nuestra red. Encontrá el más cercano a vos y empezá a jugar."
      />

      {/* WRAPPER */}
      <div className="max-w-6xl mx-auto px-4">
        {/* GRID CLUBES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clubes.map((club, index) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ClubCard club={club} />
            </motion.div>
          ))}

          {/* CTA */}
          <Cta
            title="¿Tu club no está en la lista?"
            description="Si tenés un club de pickleball y querés formar parte de nuestra asociación, contactanos para conocer los beneficios de asociarte."
          >
            <Button size="lg" variant="secondary" onClick={() => window.location.href = 'mailto:info@pickleball.com'}>
              Escribinos!
            </Button>
          </Cta>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
