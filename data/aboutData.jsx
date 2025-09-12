/* ICONS */
import { Users, Trophy, Calendar } from "lucide-react";

const aboutData = [
  {
    id: 1,
    title: "Fácil de Aprender",
    subtitle:
      "Perfecto para todas las edades y niveles de habilidad. Las reglas son simples e intuitivas.",
    icon: <Users className="h-8 w-8 text-bg dark:text-bg-dark" />,
  },
  {
    id: 2,
    title: "Competitivo",
    subtitle:
      "Sistema de ranking oficial y torneos regulares para todos los niveles competitivos.",
    icon: <Trophy className="h-8 w-8 text-bg dark:text-bg-dark" />,
  },

  {
    id: 3,
    title: "Social",
    subtitle:
      "Comunidad activa y amigable. Eventos sociales y entrenamientos grupales regulares.",
    icon: <Calendar className="h-8 w-8 text-bg dark:text-bg-dark" />,
  },
];
export default aboutData;
