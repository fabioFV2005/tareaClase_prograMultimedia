# TechSolutions - Proyecto Completo

Sistema web profesional para empresa de desarrollo de software y robótica.

## 🏗️ Estructura del Proyecto

```
reactExpress/
├── backend/              # API REST con Node.js + Express
│   ├── index.js         # Servidor principal con endpoints y chatbot
│   ├── registro.js      # Código legacy de registro
│   ├── bd.sql          # Script de base de datos
│   └── package.json
│
├── frontendSoftware/    # 🆕 Frontend moderno React + TypeScript
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── services/    # APIs
│   │   ├── types/       # TypeScript types
│   │   └── index.css    # Sistema de diseño
│   ├── package.json
│   └── README.md        # Documentación detallada
│
├── frontend/            # Frontend antiguo (deprecado)
│
└── INICIAR.ps1          # Script de inicio automático
```

## 🚀 Inicio Rápido

### Opción 1: Script Automático (Recomendado)
```powershell
.\INICIAR.ps1
```

### Opción 2: Manual

**Terminal 1 - Backend:**
```bash
cd backend
npm install
node index.js
```

**Terminal 2 - Frontend:**
```bash
cd frontendSoftware
npm install
npm run dev
```

## 📋 Requisitos Previos

1. **Node.js** v18 o superior
2. **MySQL** 5.7 o superior
3. **Ollama** (opcional, para chatbot con IA)

### Configuración de Base de Datos

```bash
# 1. Crear base de datos
mysql -u root -p
CREATE DATABASE dbventas;
USE dbventas;

# 2. Importar tablas
source backend/bd.sql;

# 3. (Opcional) Insertar datos de prueba
INSERT INTO productos (nombre, descripcion, precio, estado, imagen) VALUES
('Sistema ERP Empresarial', 'Software de gestión empresarial completo', 15000.00, '1', ''),
('Robot Colaborativo', 'Brazo robótico para automatización industrial', 45000.00, '1', ''),
('Plataforma IoT', 'Sistema de monitoreo con sensores inteligentes', 8500.00, '1', ''),
('App Móvil Multiplataforma', 'Desarrollo en React Native', 12000.00, '1', ''),
('Sistema de Visión Artificial', 'Inspección automatizada con IA', 25000.00, '1', '');
```

## 🎨 Características del Nuevo Frontend

✨ **Diseño Profesional**
- Colorimetría azul/blanco moderna
- Animaciones suaves y elegantes
- Totalmente responsive
- Sin apariencia de IA generativa

🔌 **Conectividad**
- Productos dinámicos desde MySQL
- Formulario de contacto funcional
- Chatbot inteligente con Ollama

⚡ **Tecnologías**
- React 18 + TypeScript
- Vite para desarrollo rápido
- CSS moderno con variables
- Axios para peticiones HTTP

## 🤖 Configurar Chatbot (Opcional)

```bash
# 1. Instalar Ollama
# Descargar desde: https://ollama.ai

# 2. Descargar modelo
ollama pull gemma3

# 3. Verificar
ollama list
```

El chatbot funcionará automáticamente cuando Ollama esté corriendo.

## 🌐 URLs del Sistema

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **Ollama**: http://localhost:11434 (si está instalado)

## 📡 Endpoints API

```
GET  /api/productos          # Listar productos
POST /api/registro           # Guardar contacto
POST /ollama-prompt          # Chatbot IA
```

## 🎯 Secciones de la Web

1. **Hero**: Presentación principal con estadísticas
2. **Servicios**: 6 servicios principales con detalles
3. **Productos**: Catálogo dinámico desde BD
4. **Contacto**: Formulario funcional
5. **Chatbot**: Asistente virtual flotante

## 🔧 Configuración Backend

Editar `backend/index.js` si necesitas cambiar:
- Puerto (default: 3000)
- Credenciales MySQL
- Modelo de Ollama
- CORS settings

## 🎨 Personalización Frontend

Variables CSS en `frontendSoftware/src/index.css`:
```css
:root {
  --primary-blue: #0066FF;
  --secondary-purple: #6B5FFF;
  /* ... más variables */
}
```

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari 14+
- ✅ Móviles iOS y Android

## 🐛 Solución de Problemas

**Puerto 3000 ocupado:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Error de CORS:**
Verifica que el backend tenga `cors()` habilitado

**Productos no se cargan:**
- Verifica que MySQL esté corriendo
- Revisa credenciales en `backend/index.js`
- Comprueba que existan productos con `estado='1'`

**Chatbot no responde:**
- Instala Ollama
- Ejecuta `ollama pull gemma3`
- Inicia Ollama en segundo plano

## 📚 Documentación Adicional

Ver `frontendSoftware/README.md` para más detalles del frontend.

## 👥 Desarrollo

```bash
# Desarrollo frontend
cd frontendSoftware
npm run dev

# Build producción
npm run build

# Preview producción
npm run preview
```

## 📄 Licencia

Proyecto desarrollado por TechSolutions © 2025

---

**¿Necesitas ayuda?** Contacta a: contacto@techsolutions.com
