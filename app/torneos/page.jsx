"use client";
/* HOOKS */
import React, { useState } from "react";
/* ICONS */
import { Trophy } from "lucide-react";
/* UI */
import TorneoCard from "../../components/ui/torneoCard";
import PageTitle from "../../components/ui/pageTitle";
import Button from "../../components/ui/button";
import Cta from "../../components/ui/cta";
import CtaFeedback from "../../components/ui/ctaFeedback";
/* LIBRARIES */
import { motion } from "framer-motion";
/* DATA */
import { torneosProximos, torneosPasados } from "../../data/torneosData";

const page = () => {
  const [activeTab, setActiveTab] = useState("PROXIMOS");
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* CTA CLICK HANDLER */
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    setTimeout(() => {
      setInputValue("");
      setIsSubmitted(false);
    }, 3000);
  };
  
  /* DEPENDIENDO DE LA PESTAÑA ACTIVA, MUESTRO LOS TORNEOS CORRESPONDIENTES */
  const torneosActuales =
    activeTab === "PROXIMOS" ? torneosProximos : torneosPasados;

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark my-15">
      {/* HEADER */}
      <PageTitle
        title="TORNEOS"
        subtitle="Mantente al día con todos nuestros eventos competitivos"
      />

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 ">
        {/* TABS */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 dark:border-gray-500 border-2 border-gray-300 rounded-lg p-1 shadow-sm space-x-3">
            {/* PROXIMOS BUTTON */}
            <button
              onClick={() => setActiveTab("PROXIMOS")}
              className={`px-8 py-3 rounded-md font-semibold transition-all cursor-pointer ${
                activeTab === "PROXIMOS"
                  ? "bg-accent text-white shadow-sm"
                  : "text-text hover:text-black dark:text-text-dark dark:hover:text-white"
              }`}
            >
              PRÓXIMOS
            </button>

            {/* PASADOS BUTTON */}
            <button
              onClick={() => setActiveTab("PASADOS")}
              className={`px-8 py-3 rounded-md font-semibold transition-all cursor-pointer ${
                activeTab === "PASADOS"
                  ? "bg-accent text-white shadow-sm"
                  : "text-text hover:text-black dark:text-text-dark dark:hover:text-white"
              }`}
            >
              PASADOS
            </button>
          </div>
        </div>

        {/* LISTADO DE TORNEOS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-bg dark:bg-bg-dark dark:border-gray-500 border-2 border-gray-300 rounded-lg p-6 shadow-sm"
        >
          <div className="space-y-0">
            {/* RENDER */}
            {torneosActuales.map((torneo, index) => (
              <motion.div
                key={torneo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <TorneoCard torneo={torneo} />
                {index < torneosActuales.length - 1 && (
                  <div className="  my-4"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CUANDO NO HAY TORNEOS */}
          {torneosActuales.length === 0 && (
            <div className="text-center py-12">
              <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No hay torneos {activeTab.toLowerCase()} disponibles
              </p>
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <Cta
          title="¿Te gustaria enterarte de los proximos torneos?"
          description="Dejanos tu email y te mantendremos informado sobre los próximos eventos."
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
    </div>
  );
};

export default page;
