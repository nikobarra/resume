# Portfolio Moderno - React/Next.js

## 📋 Descripción

Este proyecto es una modernización de un CV/portfolio estático a una aplicación web moderna construida con **React**, **Next.js 15**, **TypeScript** y **TailwindCSS**. El proyecto migra completamente la información de un JSON estático a componentes React modulares y responsivos, con soporte completo para **internacionalización** (español/inglés).

## 🚀 Tecnologías Utilizadas

-   **Next.js 15** - Framework de React con App Router
-   **React 18** - Biblioteca de interfaz de usuario
-   **TypeScript** - Tipado estático para JavaScript
-   **TailwindCSS** - Framework de CSS utility-first
-   **Framer Motion** - Biblioteca de animaciones
-   **Lucide React** - Iconos modernos
-   **Turbopack** - Bundler rápido de Vite
-   **React Context** - Gestión de estado para internacionalización

## 📁 Estructura del Proyecto

```
portfolio-modern/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navegación moderna con transiciones fluidas
│   │   ├── Header.tsx          # Información personal y contacto
│   │   ├── Perfil.tsx          # Sección de perfil profesional
│   │   ├── Habilidades.tsx     # Skills y tecnologías
│   │   ├── Experiencia.tsx     # Experiencia laboral
│   │   ├── Educacion.tsx       # Formación académica
│   │   ├── Certificaciones.tsx # Certificados con modal interactivo
│   │   ├── Footer.tsx          # Pie de página con información del desarrollo
│   │   └── LanguageSwitch.tsx  # Switch de idioma español/inglés
│   ├── contexts/
│   │   └── LanguageContext.tsx # Contexto para gestión de idiomas
│   ├── hooks/
│   │   └── useTranslations.ts  # Hook personalizado para traducciones
│   ├── utils/
│   │   └── cvHelpers.ts        # Funciones helper para datos del CV
│   ├── types/
│   │   └── cv.ts              # Tipos TypeScript para datos del CV
│   ├── translations/
│   │   ├── es.ts              # Traducciones en español
│   │   └── en.ts              # Traducciones en inglés
│   ├── app/
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página principal
│   ├── cvjson.json            # Datos del CV en español
│   └── cvjson_en.json         # Datos del CV en inglés
├── public/
│   └── img/
│       └── certificates/      # Imágenes de certificados
├── package.json
└── README.md
```

## ✨ Características Principales

### 🌐 Sistema de Internacionalización

-   **Doble Idioma** - Soporte completo para español e inglés
-   **Switch Dinámico** - Cambio de idioma en tiempo real
-   **Datos Separados** - Archivos JSON independientes para cada idioma
-   **Traducciones Completas** - Interfaz y contenido traducidos
-   **Context API** - Gestión centralizada del estado de idioma

### 🎨 Diseño Moderno

-   **Responsive Design** - Adaptable a todos los dispositivos
-   **Dark Theme** - Diseño oscuro elegante
-   **Animaciones Suaves** - Transiciones con Framer Motion
-   **Accesibilidad** - Implementación de ARIA labels y navegación por teclado

### 🧭 Navegación Avanzada

#### Navbar Moderna

-   **Fija en Scroll** - Cambia de transparente a semi-opaca
-   **Scroll Spy** - Detecta automáticamente la sección activa
-   **Navegación Suave** - Scroll automático a secciones
-   **Responsive** - Menú hamburguesa en móvil con panel lateral
-   **Animaciones** - Transiciones fluidas y efectos hover
-   **Indicador Activo** - Línea naranja que se mueve entre secciones

### 🔧 Componentes Modulares

-   **Navbar** - Navegación moderna con switch de idioma
-   **Header** - Información personal con nombre completo y subtítulo
-   **Perfil** - Descripción profesional
-   **Habilidades** - Grid de tecnologías con iconos
-   **Experiencia** - Timeline de experiencia laboral
-   **Educación** - Formación académica
-   **Certificaciones** - Galería con modal interactivo
-   **Footer** - Pie de página con información del desarrollo

### 🎯 Funcionalidades Especiales

#### Modal de Certificaciones

-   **Hover Effect** - Muestra imagen al pasar el mouse
-   **Modal Flotante** - Posicionado cerca del certificado
-   **Animación 3D** - Efecto de "despegue" con Framer Motion
-   **Blur Inicial** - Transición suave de entrada
-   **Texto Animado** - Nombre del certificado con animación
-   **Soporte Multiidioma** - Imágenes mapeadas para ambos idiomas

#### Sistema de Datos

-   **Tipos TypeScript** - Tipado completo para datos del CV
-   **Funciones Helper** - Acceso unificado a datos en ambos idiomas
-   **Validación** - Verificación de estructura de datos
-   **Flexibilidad** - Fácil extensión para nuevos campos

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

El proyecto utiliza archivos JSON separados para cada idioma:

-   **`cvjson.json`** - Datos en español
-   **`cvjson_en.json`** - Datos en inglés

### Estructura de Datos

-   **Información Personal** - Nombre completo, contacto, ubicación
-   **Perfil Profesional** - Descripción y objetivos
-   **Habilidades** - Tecnologías y niveles de experiencia
-   **Experiencia Laboral** - Empresas, roles, fechas, tareas
-   **Educación** - Estudios formales y estado actual
-   **Certificaciones** - Cursos y certificados con imágenes
-   **Habilidades Blandas** - Competencias personales

## 🎨 Personalización

### Modificar Datos

Edita los archivos JSON correspondientes:

-   `src/cvjson.json` para español
-   `src/cvjson_en.json` para inglés

### Cambiar Traducciones

Modifica los archivos de traducción:

-   `src/translations/es.ts` para español
-   `src/translations/en.ts` para inglés

### Cambiar Estilos

-   Los estilos están en TailwindCSS
-   Modifica las clases en los componentes
-   Personaliza colores en `tailwind.config.js`

### Añadir Certificados

1. Coloca la imagen en `public/img/certificates/`
2. Actualiza el mapeo en `Certificaciones.tsx` para ambos idiomas
3. Añade la entrada en ambos archivos JSON

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
-   **SEO** - Meta tags dinámicos según idioma

## 📱 Responsive Design

El proyecto está optimizado para:

-   **Desktop** - 1024px+
-   **Tablet** - 768px - 1023px
-   **Mobile** - 320px - 767px

### Características Responsive

-   **Navbar** - Menú hamburguesa en móvil
-   **Grids** - Adaptación automática de columnas
-   **Tipografía** - Escalado responsivo
-   **Espaciado** - Márgenes y padding adaptativos

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

## 🌐 Características de Internacionalización

### Funcionalidades

-   **Switch de Idioma** - Toggle en la navbar
-   **Datos Dinámicos** - Contenido cambia según idioma
-   **Interfaz Traducida** - Todos los textos se adaptan
-   **Imágenes de Certificados** - Mapeo para ambos idiomas
-   **Persistencia** - Estado del idioma se mantiene

### Estructura de Traducciones

```typescript
// Ejemplo de estructura de traducciones
{
  header: { title: "Nicolás Pelecano", subtitle: "..." },
  perfil: { title: "Perfil", description: "..." },
  habilidades: { title: "Habilidades", ... },
  // ... más secciones
}
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

**Nicolás Matías Barra Pelecano** - [nicolasbarrapelecano@gmail.com](mailto:nicolasbarrapelecano@gmail.com)

## 🙏 Agradecimientos

-   [Next.js](https://nextjs.org/) - Framework de React
-   [TailwindCSS](https://tailwindcss.com/) - Framework de CSS
-   [Framer Motion](https://www.framer.com/motion/) - Animaciones
-   [Lucide](https://lucide.dev/) - Iconos
-   [Vercel](https://vercel.com/) - Plataforma de despliegue

---

⭐ Si este proyecto te ha sido útil, ¡dale una estrella al repositorio!
