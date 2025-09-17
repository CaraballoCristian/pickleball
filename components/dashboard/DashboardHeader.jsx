/* ICONS */
import { Settings } from "lucide-react";
/* CONTEXT */
import { useAuth } from "../../context/AuthContext";
/* NAVIGATION */
import { useRouter } from "next/navigation";

const DashboardHeader = () => {
  const router = useRouter();
  const { setIsAuthenticated } = useAuth();
  return (
    <div className="border-b border-accent/10 dark:border-accent-dark/10 backdrop-blur-sm">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 flex-col sm:px-6 lg:px-8 flex items-start justify-between h-16">
        {/* LEFT SIDE */}
        <div className="flex items-center justify-between gap-3  w-full ">
          {/* ICON */}
          <Settings className="h-8 w-8 text-accent dark:text-accent-dark" />
          {/* TEXT CONTAINER */}
          <div>
            {/* TITLE */}
            <h1 className="text-xl md:text-2xl font-bold text-text dark:text-text-dark">
              Dashboard Admin
            </h1>
            {/* SUBTITLE */}
            <p className="text-sm text-text-secondary dark:text-text-dark/90">
              Panel de administración
            </p>
          </div>

          {/* LOGOUT BUTTON */}
          <button
            onClick={() => {
              setIsAuthenticated(false);
              router.push("/auth");
            }}
            className="bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-md ml-auto cursor-pointer"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};
export default DashboardHeader;
