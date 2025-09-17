"use client";
/* ICONOS */
import { Eye, EyeOff, Lock, User, Settings } from 'lucide-react';
/* HOOKS */
import { useEffect, useState } from 'react';
/* CONTEXT */
import { useAuth } from '../../context/AuthContext';
/* NAVIGATION */
import { useRouter } from 'next/navigation';

const AdminLogin = () => {
  const [formData, setFormData] = useState({username: '', password: ''})
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();

  /* EVITO FLASH */
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => setLoaded(true), 50);

  // Si ya está autenticado, redirigir al dashboard
 useEffect(() => {
    if (isAuthenticated === true) router.push("/dashboard");
  }, [isAuthenticated, router]);
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error al escribir
    if (error) setError('');
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');

    // Simular validación (puedes cambiar estas credenciales)
    const validCredentials = {
      username: 'admin',
      password: 'admin123'
    };

    // Simular delay de autenticación
    setTimeout(() => {
      if (
        formData.username.toLowerCase() === validCredentials.username &&
        formData.password === validCredentials.password
      ) {
        setIsAuthenticated(true);
        router.push('/dashboard');
      } else {
        setError('Credenciales incorrectas. Usuario: admin, Contraseña: admin123');
      }
      setIsLoading(false);
    }, 1500);
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return loaded && (
    <div className="min-h-screen bg-gradient-to-br from-bg via-bg to-bg dark:from-bg-dark dark:via-bg-dark dark:to-bg-dark flex items-center justify-center px-4">

      {/* Container principal */}
      <div className="relative z-10 w-full max-w-md">

        {/* Card de login */}
        <div className="bg-bg/80 dark:bg-bg-dark/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-accent/10 dark:border-accent-dark/10 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 dark:from-accent-dark/10 dark:via-accent-dark/5 dark:to-accent-dark/10 p-8 text-center border-b border-accent/10 dark:border-accent-dark/10">
            <div className="w-20 h-20 bg-accent dark:bg-accent-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Settings className="h-10 w-10 text-bg dark:text-bg-dark" />
            </div>
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-2">
              Panel Administrativo
            </h2>
            <p className="text-text dark:text-text-dark">
              Ingresa tus credenciales para continuar
            </p>
          </div>

          {/* Formulario */}
          <div className="p-8 bg-bg dark:bg-gray-800">
            <div className="space-y-6">

              {/* Campo Usuario */}
              <div>
                <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">
                  Usuario
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-accent dark:text-accent-dark" />
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Ingresa tu usuario"
                    className="w-full pl-10 pr-4 py-3 border border-accent/20 dark:border-accent-dark/20 rounded-xl bg-bg-secondary/30 dark:bg-bg-secondary-dark/30 text-text dark:text-text-dark placeholder-text-secondary dark:placeholder-text-secondary-dark focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-transparent transition-all outline-none"
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  />
                </div>
              </div>

              {/* Campo Contraseña */}
              <div>
                <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-accent dark:text-accent-dark" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Ingresa tu contraseña"
                    className="w-full pl-10 pr-12 py-3 border border-accent/20 dark:border-accent-dark/20 rounded-xl bg-bg/30 dark:bg-bg-dark/30 text-text dark:text-text-dark placeholder-text-secondary dark:placeholder-text-secondary-dark focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-transparent transition-all outline-none"
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-text dark:text-text-dark hover:text-text dark:hover:text-text-dark transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
 
              {/* Mensaje de error */}
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                  <p className="text-red-600 dark:text-red-400 text-sm text-center">
                    {error}
                  </p>
                </div>
              )}

              {/* Botón de login */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-accent dark:bg-accent-dark text-bg dark:text-bg-dark py-3 px-4 rounded-xl font-semibold hover:bg-accent-secondary dark:hover:bg-accent-secondary-dark focus:ring-4 focus:ring-accent/20 dark:focus:ring-accent-dark/20 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-bg/30 dark:border-bg-dark/30 border-t-bg dark:border-t-bg-dark rounded-full animate-spin"></div>
                    <span>Verificando...</span>
                  </div>
                ) : (
                  'Iniciar Sesión'
                )}
              </button>
            </div>

            {/* Credenciales de demo */}
            <div className="mt-6 pt-6 border-t border-accent/10 dark:border-accent-dark/10">
              <div className="bg-accent/5 dark:bg-accent-dark/5 rounded-xl p-4">
                <h4 className="text-sm font-medium text-text dark:text-text-dark mb-2">
                  📝 Credenciales de demostración:
                </h4>
                <div className="text-xs text-text dark:text-text-dark space-y-1">
                  <p><strong>Usuario:</strong> admin</p>
                  <p><strong>Contraseña:</strong> admin123</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-text dark:text-text-dark text-sm">
            Acceso restringido solo para administradores
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;