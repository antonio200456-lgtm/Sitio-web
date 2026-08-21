import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // Estado para saber si estamos cargando la sesión guardada
  const [loading, setLoading] = useState(true);

  // 1. Efecto para leer la sesión del localStorage al cargar la app

  // 2. Función Login mejorada: Guarda en estado y en localStorage
  const login = (userData) => {
    const data = JSON.parse(localStorage.getItem("user"));

    localStorage.setItem("id_rol", data.id_rol);
    console.log(data);
    localStorage.setItem(
      "id_user",
      JSON.parse(localStorage.getItem("user")).ID_User
    );

    // userData debe lucir así: { name: 'Juan', role: 'editor' }
    setUser(userData);
    console.log("Usuario logueado:", localStorage.getItem("id_user"));
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);
  // 3. Función Logout: Limpia todo
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    return navigate("/", { replace: true });
  };

  // 4. Lógica maestra de permisos
  const hasRole = (allowedRoles) => {
    if (!user) return false;

    // El ADMIN siempre tiene permiso para todo
    if (user.role === "admin") return true;

    // Si no es admin, buscamos si su rol está en la lista permitida
    return allowedRoles.includes(user.role);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, hasRole, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
