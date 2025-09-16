"use client";
/* ICONS */
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
/* NAVIGATION */
import { useRouter, useParams, notFound } from "next/navigation";
/* UI */
import Share from "../../../components/ui/share";
/* DATA */
import noticiasData from "../../../data/noticiasData";

const NewsDetailPage = () => {
  const router = useRouter();

  /* GET NEW BASED ON SLUG */
  const { slug } = useParams();
  const noticia = noticiasData.find((item) => item.slug === slug);

  /* HANDLE 404 */
  if (!noticia) notFound();

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Función para calcular tiempo de lectura estimado
  const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.split(" ").length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min de lectura`;
  };

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark md:my-15">
      {/* BACK BUTTON */}
      <div className="bg-bg/20 dark:bg-bg-dark/20 border-b border-accent/10 dark:border-accent-dark/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={router.back}
            className="flex items-center gap-2 py-4 text-text dark:text-text-dark hover:text-text dark:hover:text-text-dark transition-colors group cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>Volver a noticias</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 dark:bg-gray-800">
        {/* HEADER */}
        <header className="mb-8">
          {/* CATEGORY */}
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark">
              <Tag className="h-3 w-3" />
              {noticia.category}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text dark:text-text-dark mb-6 leading-tight">
            {noticia.title}
          </h1>

          {/* METADATA */}
          <div className="flex flex-wrap items-center gap-6 text-text dark:text-text-dark text-sm">
            {/* DATE */}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(noticia.date)}</span>
            </div>
            {/* READ TIME */}
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{calculateReadTime(noticia.body)}</span>
            </div>
          </div>

          {/* EXCERPT */}
          <p className="text-lg md:text-xl text-text dark:text-text-dark mt-6 leading-relaxed">
            {noticia.excerpt}
          </p>
        </header>

        {/* IMAGE */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={noticia.image || "/placeholder.png"} // Necesitamos un placeholder por si no hay imagen
              alt={noticia.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>

        {/* ARTICLE CONTENT */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-justify">
          <div className="text-text dark:text-text-dark leading-relaxed">

            {/* Renderizar el body como texto plano con saltos de línea // los saltos de linea deberian traerse del textarea */}
            {noticia.body.split("\n").map((paragraph, index) =>
              paragraph.trim() ? (
                <p
                  key={index}
                  className="mb-6 text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ) : (
                <div key={index} className="mb-4"></div>
              )
            )}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-12 pt-8 border-t border-accent/10 dark:border-accent-dark/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-text dark:text-text-dark text-sm">
              Publicado el {formatDate(noticia.date)}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-text dark:text-text-dark text-sm">
                Compartir:
              </span>

              {/* SHARE LINKS */}
              <Share
                url={typeof window !== "undefined" ? window.location.href : ""}
              />
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default NewsDetailPage;
