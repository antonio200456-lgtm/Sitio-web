# Librerías y Dependencias del Proyecto Vite

## 📋 Resumen General
Este proyecto es una aplicación React con Vite como herramienta de build. Utiliza Material-UI (MUI) para componentes de UI y react-router-dom para enrutamiento.

---

## 🔧 Dependencias Principales

### **React Ecosystem**
| Librería | Versión | Descripción |
|----------|---------|------------|
| `react` | ^19.1.1 | Framework principal para la UI basada en componentes |
| `react-dom` | ^19.1.1 | Renderizado de componentes React en el DOM del navegador |
| `react-router-dom` | ^7.9.5 | Enrutamiento y navegación entre páginas |

### **Material-UI (MUI)**
| Librería | Versión | Descripción |
|----------|---------|------------|
| `@mui/material` | ^7.3.5 | Componentes UI prediseñados (botones, inputs, dialogs, etc.) |
| `@emotion/react` | ^11.14.0 | Motor CSS-in-JS utilizado por MUI (estilos dinámicos) |
| `@emotion/styled` | ^11.14.1 | Componentes estilizados con Emotion (extensión de MUI) |

### **Utilidades**
| Librería | Versión | Descripción |
|----------|---------|------------|
| `jwt-decode` | ^4.0.0 | Decodifica tokens JWT sin verificación (para obtener datos de autenticación) |
| `react-modal` | ^3.16.3 | Componente de modal/diálogo accesible |
| `sonner` | ^2.0.7 | Notificaciones tipo Toast (alertas no bloqueantes) |

---

## 🛠️ Dependencias de Desarrollo

### **Vite & Build Tools**
| Librería | Versión | Descripción |
|----------|---------|------------|
| `vite` | ^7.2.2 | Herramienta de build moderna y rápida (reemplaza webpack) |
| `@vitejs/plugin-react` | ^5.1.0 | Plugin de Vite para soportar JSX y Fast Refresh de React |

### **ESLint & Linting**
| Librería | Versión | Descripción |
|----------|---------|------------|
| `eslint` | ^9.36.0 | Herramienta para análisis estático y estilo de código |
| `@eslint/js` | ^9.36.0 | Configuración recomendada de ESLint |
| `eslint-plugin-react-hooks` | ^5.2.0 | Plugin para validar reglas de Hooks en React |
| `eslint-plugin-react-refresh` | ^0.4.22 | Plugin para validar uso de Fast Refresh en React |
| `globals` | ^16.4.0 | Proporciona definiciones de variables globales (para ESLint) |

### **TypeScript (Tipos)**
| Librería | Versión | Descripción |
|----------|---------|------------|
| `@types/react` | ^19.1.16 | Definiciones de tipos TypeScript para React |
| `@types/react-dom` | ^19.1.9 | Definiciones de tipos TypeScript para react-dom |

---

## 📊 Estadísticas

- **Dependencias Principales:** 7 librerías
- **Dependencias de Desarrollo:** 11 librerías
- **Total:** 18 dependencias

---

## 🚀 Scripts Disponibles

```bash
npm run dev        # Inicia el servidor de desarrollo (Vite con HMR)
npm run build      # Construye la aplicación para producción
npm run lint       # Ejecuta ESLint para revisar el código
npm run preview    # Previsualiza la build de producción localmente
```

---

## 📝 Notas Importantes

1. **Vite:** Proporciona Hot Module Replacement (HMR) para desarrollo rápido sin recargar la página.
2. **MUI + Emotion:** Juntos permiten crear interfaces modernas y responsivas con temas personalizables.
3. **jwt-decode:** Se usa para leer el token JWT guardado en `localStorage` sin necesidad de backend para decodificarlo.
4. **ESLint:** Ayuda a mantener la calidad del código y detectar posibles errores.
5. **React 19:** Última versión con mejoras de rendimiento y nuevas características (use, action, etc.).

---

## 🔗 Enlaces Útiles

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)
- [React Router Documentation](https://reactrouter.com/)
- [ESLint Documentation](https://eslint.org/)
- [Sonner Toast Documentation](https://sonner.emilkowal.sk/)

