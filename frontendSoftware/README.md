# TechSolutions - Frontend

Frontend moderno para empresa de desarrollo de software y robótica, construido con React, TypeScript y Vite.

## 🎨 Características

- **Diseño Profesional**: Colorimetría azul/blanco moderna y limpia
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Conectado a Backend**: Consume APIs REST para productos y contacto
- **Chatbot Inteligente**: Asistente virtual con contexto empresarial
- **Animaciones Suaves**: Transiciones y efectos profesionales
- **TypeScript**: Código type-safe y mantenible
- **Performance Optimizada**: Carga rápida y UX fluida

## 🚀 Componentes Principales

- **Header**: Navegación fija con scroll suave
- **Hero**: Sección principal con estadísticas y CTAs
- **Servicios**: Grid de servicios con iconos y descripciones
- **Productos**: Catálogo dinámico desde base de datos
- **Contacto**: Formulario funcional conectado al backend
- **Footer**: Enlaces y redes sociales
- **Chatbot**: Asistente virtual flotante con Ollama

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🔧 Configuración

### Backend API
Asegúrate de que el backend esté corriendo en `http://localhost:3000`

### Endpoints utilizados:
- `GET /api/productos` - Lista de productos
- `POST /api/registro` - Envío de formulario de contacto
- `POST /ollama-prompt` - Chatbot con IA

## 🎯 Estructura del Proyecto

```
src/
├── components/       # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Servicios.tsx
│   ├── Productos.tsx
│   ├── Contacto.tsx
│   ├── Footer.tsx
│   └── Chatbot.tsx
├── services/        # Servicios API
│   └── api.ts
├── types/           # Definiciones TypeScript
│   └── index.ts
├── App.tsx          # Componente principal
├── main.tsx         # Punto de entrada
└── index.css        # Estilos globales y variables CSS

```

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Primary Blue**: #0066FF
- **Secondary Purple**: #6B5FFF
- **Navy**: #001F3F
- **Cyan**: #00C7E6
- **White**: #FFFFFF
- **Grays**: Escala de 50-900

### Tipografía
- Fuente: System fonts (San Francisco, Segoe UI, Roboto)
- Tamaños fluidos con `clamp()`

### Espaciado
- Sistema basado en múltiplos de 0.25rem
- Responsive con variables CSS

## 🌐 Base de Datos

El componente Productos consume datos de MySQL:

```sql
CREATE TABLE productos (
  id_producto INTEGER AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  descripcion VARCHAR(300),
  imagen VARCHAR(100),
  estado VARCHAR(1),
  precio DECIMAL(10,2)
);
```

## 🤖 Chatbot

El chatbot utiliza Ollama con el modelo `gemma3` para respuestas contextualizadas sobre:
- Servicios de desarrollo de software
- Robótica e IoT
- Tecnologías y metodologías
- Presupuestos y proyectos

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔥 Scripts Disponibles

- `npm run dev` - Modo desarrollo con hot reload
- `npm run build` - Compilación para producción
- `npm run preview` - Vista previa del build
- `npm run lint` - Análisis de código

## 🎯 Próximas Mejoras

- [ ] Agregar animaciones con Framer Motion
- [ ] Implementar i18n para múltiples idiomas
- [ ] Dark mode
- [ ] Blog integrado
- [ ] Dashboard de administración
- [ ] Tests unitarios y E2E

## 📄 Licencia

Desarrollado por TechSolutions © 2025
