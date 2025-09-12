/* ICONS */
import { Trophy } from "lucide-react";

const HeaderLogo = () => {
  return (
    <a href="/" className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
        <Trophy className="h-5 w-5 text-white" />
      </div>
      <h1 className="text-xl font-bold text-text dark:text-text-dark">Pickleball La Plata</h1>
    </a>
  );
};

export default HeaderLogo;
