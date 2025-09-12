/* UI */
import SectionTitle from "./ui/sectionTitle";
import Button from "./ui/button";
/* ICONS */
import { Download } from "lucide-react";

const ReglamentoSection = () => {
  
  // FUNCION PARA DESCARGAR EL PDF
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/reglamento-pickleball-2025.pdf";
    link.download = "reglamento-pickleball-2025.pdf";
    link.click();
  };

  return (
    <section className="py-16 px-4 bg-accent dark:bg-accent-dark">

      {/* CONTAINER */}
      <div className="container mx-auto text-center">

        {/* TITULO */}
        <SectionTitle
          title="Reglamento Oficial"
          subtitle="Descarga el documento completo con todas las reglas y normativas actualizadas del pickleball."
          invert={true}
        />

        {/* BOTON DE DESCARGA */}
        <Button onClick={handleDownload} size="lg" variant="secondary">
          <Download className="mr-2 h-5 w-5" />
          Descargar PDF
        </Button>
      </div>
    </section>
  );
};

export default ReglamentoSection;
