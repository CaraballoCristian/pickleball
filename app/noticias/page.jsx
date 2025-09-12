"use client";
/* UI */
import PageTitle from "../../components/ui/pageTitle";
import NoticiaCard from "../../components/ui/noticiaCard";
import NoticiasBigCard from "../../components/ui/noticiasBigCard";
import Button from "../../components/ui/button";
import Cta from "../../components/ui/cta";
import CtaFeedback from "../../components/ui/ctaFeedback";
/* LIBRARIES */
import { motion } from "framer-motion";
import { useState } from "react";
/* DATA */
import noticiasData from "../../data/noticiasData";

const page = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* BUSCO LA NOTICIA DESTACADA, SI NO HAY, DEVUELVO LA ULTIMA */
  const latestNews =
    noticiasData.find((noticia) => noticia.highlighted) ||
    noticiasData[noticiasData.length - 1];

  /* NOTICIAS SECUNDARIAS (NO DESTACADAS) */
  const secondaryNews = noticiasData.filter(
    (noticia) => noticia.id !== latestNews.id
  );

  /* INVIERTO EL ORDEN DE LAS NOTICIAS SECUNDARIAS PARA MOSTRAR LAS MÁS RECIENTES PRIMERO */
  const reversedNews = secondaryNews.reverse();

  /* NOTICIAS VISIBLES SEGUN EL ESTADO */
  const visibleNews = reversedNews.slice(0, visibleCount);

  /* CTA CLICK HANDLER */
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    setTimeout(() => {
      setInputValue("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="px-4 bg-bg dark:bg-bg-dark min-h-screen py-15">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <PageTitle
          title="NOVEDADES"
          subtitle="Mantente al día con las últimas novedades"
        />

        {/* BIG CARD */}
        <NoticiasBigCard noticia={latestNews} />

        {/* ULTIMAS NOTICIAS TITLE*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-text dark:text-text-dark">
            Últimas Noticias
          </h2>
        </motion.div>

        {/* NOTICIAS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...visibleNews].map((noticia, index) => (
            <motion.div
              key={noticia.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NoticiaCard noticia={noticia} />
            </motion.div>
          ))}
        </div>

        {/* CARGAR MAS NOTICIAS */}
        {visibleCount < secondaryNews.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Cargar más noticias
            </button>
          </motion.div>
        )}

        {/* CTA */}
        <Cta
          title="Enterate de las ultimas novedades"
          description="Recibi las ultimas novedades, logros y actividades de la comunidad de Pickleball en tu región."
        >
          <form
            onSubmit={handleSubmit}
            className=" flex justify-between w-full md:w-2/3 lg:w-1/2 mx-auto flex-col sm:flex-row"
          >
            {/* INPUT */}

            {!isSubmitted ? (
              <>
                <input
                  type="email"
                  placeholder="Ingresa tu email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  required
                  className="px-4 py-3 rounded-lg border bg-bg text-text font-semibold border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/80 mr-4 mb-4 sm:mb-0 w-full"
                />

                <Button size="lg" variant="secondary" type="submit">
                  Enterarme!
                </Button>
              </>
            ) : (
              <CtaFeedback
                title="Gracias por Suscribirte!"
              />
            )}
          </form>
        </Cta>
      </div>
    </section>
  );
};

export default page;
