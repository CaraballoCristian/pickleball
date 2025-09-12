"use client";
/* HOOKS */
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
/* ICONS */
import { Home, ArrowLeft, MapPin } from "lucide-react";

const Error404Page = () => {
  const [mounted, setMounted] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    // GLITCH EFFECT INTERVAL
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleGoHome = () => {
    router.push("/");
  };

  const handleGoBack = () => {
    router.back();
  };

  if (!mounted) return null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-bg via-bg to-bg-secondary dark:from-bg-dark dark:via-bg-dark dark:to-bg-secondary-dark flex items-center justify-center px-4 overflow-hidden">
      
      {/* CONTAINER */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">

        {/* NUMBER 404 */}
        <div className="relative mb-8">
          <h1
            className={`text-8xl md:text-9xl font-bold bg-gradient-to-r from-accent via-accent-secondary to-accent dark:from-accent-dark dark:via-accent-secondary-dark dark:to-accent-dark bg-clip-text text-transparent transition-all duration-200 ${
              glitch ? "animate-pulse scale-105" : ""
            }`}
          >
            404
          </h1>

          {/* GLITCH EFFECT */}
          <div
            className={`absolute inset-0 text-8xl md:text-9xl font-bold text-red-500 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-200 ${
              glitch ? "opacity-30" : "opacity-0"
            }`}
            style={{
              transform: glitch ? "translate(2px, -2px)" : "translate(0, 0)",
            }}
          >
            404
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-accent dark:text-accent-dark">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wider uppercase">
              Página no encontrada
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark">
            ¡Ups! Te perdiste
          </h2>

          {/* DESCRIPTION */}
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark max-w-md mx-auto leading-relaxed">
            La página que buscas no existe. Pero no te preocupes, podemos
            ayudarte a encontrar el camino de vuelta.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">

          {/* GO HOME */}
          <button
            onClick={handleGoHome}
            className="group flex items-center gap-2 bg-accent dark:bg-accent-dark text-bg dark:text-bg-dark px-6 py-3 rounded-full font-medium transition-all hover:bg-accent-secondary dark:hover:bg-accent-secondary-dark hover:scale-105 hover:shadow-lg"
          >
            <Home className="h-5 w-5 transition-transform group-hover:scale-110" />
            Volver al inicio
          </button>

          {/* GO BACK */}
          <button
            onClick={handleGoBack}
            className="group flex items-center gap-2 bg-bg-secondary/50 dark:bg-bg-secondary-dark/50 text-text dark:text-text-dark px-6 py-3 rounded-full font-medium border border-accent/20 dark:border-accent-dark/20 transition-all hover:bg-bg-secondary dark:hover:bg-bg-secondary-dark hover:border-accent/40 dark:hover:border-accent-dark/40 backdrop-blur-sm"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Volver atrás
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error404Page;
