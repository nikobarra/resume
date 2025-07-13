# Portfolio Moderno - React/Next.js

## 📋 Descripción

Este proyecto es una modernización de un CV/portfolio estático a una aplicación web moderna construida con **React**, **Next.js 15**, **TypeScript** y **TailwindCSS**. El proyecto migra completamente la información de un JSON estático a componentes React modulares y responsivos.

## 🚀 Tecnologías Utilizadas

-   **Next.js 15** - Framework de React con App Router
-   **React 18** - Biblioteca de interfaz de usuario
-   **TypeScript** - Tipado estático para JavaScript
-   **TailwindCSS** - Framework de CSS utility-first
-   **Framer Motion** - Biblioteca de animaciones
-   **Lucide React** - Iconos modernos
-   **Turbopack** - Bundler rápido de Vite

## 📁 Estructura del Proyecto

```
portfolio-modern/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navegación principal
│   │   ├── Perfil.tsx          # Información personal
│   │   ├── Habilidades.tsx     # Skills y tecnologías
│   │   ├── Experiencia.tsx     # Experiencia laboral
│   │   ├── Educacion.tsx       # Formación académica
│   │   ├── Certificaciones.tsx # Certificados con modal
│   │   └── Footer.tsx          # Pie de página con información del desarrollo
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx            # Página principal
│   └── cvjson.json             # Datos del CV
├── public/
│   └── img/
│       └── certificates/       # Imágenes de certificados
├── package.json
└── README.md
```

## ✨ Características Principales

### 🎨 Diseño Moderno

-   **Responsive Design** - Adaptable a todos los dispositivos
-   **Dark/Light Mode** - Soporte para temas
-   **Animaciones Suaves** - Transiciones con Framer Motion
-   **Accesibilidad** - Implementación de ARIA labels y navegación por teclado

### 🔧 Componentes Modulares

-   **Header** - Navegación interna con scroll suave
-   **Perfil** - Información personal con foto
-   **Habilidades** - Grid de tecnologías con iconos
-   **Experiencia** - Timeline de experiencia laboral
-   **Educación** - Formación académica
-   **Certificaciones** - Galería con modal interactivo
-   **Footer** - Pie de página con información del desarrollo, año dinámico y enlaces sociales

### 🎯 Funcionalidades Especiales

#### Modal de Certificaciones

-   **Hover Effect** - Muestra imagen al pasar el mouse
-   **Modal Flotante** - Posicionado cerca del certificado
-   **Animación 3D** - Efecto de "despegue" con Framer Motion
-   **Blur Inicial** - Transición suave de entrada
-   **Texto Animado** - Nombre del certificado con animación

## 🛠️ Instalación y Ejecución

### Prerrequisitos

-   Node.js 18+
-   npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone <url-del-repositorio>
cd portfolio-modern
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:3000
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo con Turbopack
npm run build        # Construcción para producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
```

## 📊 Datos del CV

El proyecto utiliza un archivo JSON (`cvjson.json`) que contiene toda la información del CV:

-   **Información Personal** - Nombre, título, contacto
-   **Habilidades** - Tecnologías y niveles de experiencia
-   **Experiencia Laboral** - Empresas, roles, fechas
-   **Educación** - Estudios formales
-   **Certificaciones** - Cursos y certificados con imágenes

## 🎨 Personalización

### Modificar Datos

Edita el archivo `src/cvjson.json` para actualizar tu información personal.

### Cambiar Estilos

-   Los estilos están en TailwindCSS
-   Modifica las clases en los componentes
-   Personaliza colores en `tailwind.config.js`

### Añadir Certificados

1. Coloca la imagen en `public/img/certificates/`
2. Actualiza el mapeo en `Certificaciones.tsx`
3. Añade la entrada en `cvjson.json`

## 🔧 Configuración Avanzada

### Variables de Entorno

Crea un archivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Optimizaciones

-   **Imágenes** - Optimizadas automáticamente por Next.js
-   **Bundle** - Tree-shaking automático
-   **Performance** - Lazy loading de componentes

## 📱 Responsive Design

El proyecto está optimizado para:

-   **Desktop** - 1024px+
-   **Tablet** - 768px - 1023px
-   **Mobile** - 320px - 767px

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
# Subir carpeta .next a Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

\*_Nicolas M. Barra Pelecano_ - [nicolasbarrapelecano@gmail.com](mailto:nicolasbarrapelecano@gmail.com)

## 🙏 Agradecimientos

-   [Next.js](https://nextjs.org/) - Framework de React
-   [TailwindCSS](https://tailwindcss.com/) - Framework de CSS
-   [Framer Motion](https://www.framer.com/motion/) - Animaciones
-   [Lucide](https://lucide.dev/) - Iconos
-   [Vercel](https://vercel.com/) - Plataforma de despliegue

---

⭐ Si este proyecto te ha sido útil, ¡dale una estrella al repositorio!
