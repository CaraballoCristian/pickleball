/* ICONS */
import { Mail, Phone, Trophy } from "lucide-react";
/* UI */
import Redes from "../ui/redes";
/* NAVIGATION */
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-12 px-4">
      {/* CONTAINER */}
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">

          {/* COLUMN 1 */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Pickleball La Plata</h3>
            </div>
            <p className="text-gray-400">
              La plataforma oficial del pickleball Platense
            </p>
          </div>
          
          {/* COLUMN 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="grid grid-cols-2 gap-4">

            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/clubes" className="hover:text-white transition-colors">Clubes Asociados</Link></li>
              <li><Link href="/noticias" className="hover:text-white transition-colors">Noticias</Link></li>
              <li><Link href="/torneos" className="hover:text-white transition-colors">Torneos</Link></li>
              <li><Link href="/ranking" className="hover:text-white transition-colors">Ranking</Link></li>
            </ul>
            </div>
          </div>
          
          {/* COLUMN 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@pickleball.com.ar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+54 11 1234-5678</span>
              </div>
            </div>
          </div>
          
          {/* COLUMN 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <p className="text-gray-400 mb-4">
              Mantente conectado con la comunidad
            </p>

            {/* REDES SOCIALES */}
            <Redes />
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Pickleball La Plata. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;