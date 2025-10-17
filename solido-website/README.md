# Sólido Business Law - Sitio Web

## 🎯 Descripción del Proyecto

Sitio web corporativo para **Sólido Business Law**, una firma legal innovadora que combina el rigor tradicional del Big Law con la velocidad y precisión del Big Tech. El sitio implementa un diseño "Clean & Minimalista, impulsado por Data" que refleja la fusión entre seriedad legal y innovación tecnológica.

## 🚀 Características Principales

### Diseño y UX/UI
- **Concepto Central**: "Clean & Minimalista, impulsado por Data"
- **Filosofía**: Big Law (seriedad y rigor) + Big Tech (velocidad e innovación)
- **Mobile-First**: Diseño responsivo optimizado para todos los dispositivos
- **Navegación Suave**: Scroll suave entre secciones con offset para header sticky

### Paleta de Colores
- **Principal (Navy Profundo)**: `#10142A` - Fondos oscuros, tipografía principal
- **Acento (Cian Eléctrico)**: `#00CCFF` - CTAs, títulos destacados, elementos tecnológicos
- **Fondo (Blanco Puro)**: `#FFFFFF` - Fondos de contenido, espacios en blanco
- **Neutro (Gris Medio)**: `#A0A0A0` - Tipografía secundaria, líneas divisorias

### Tipografía
- **Serif Elegante**: Playfair Display para títulos (H1, H2)
- **Sans-Serif Moderna**: Inter para cuerpo de texto y UI

## 🛠️ Stack Tecnológico

- **React 18** con TypeScript
- **Material-UI (MUI)** v5+ con tema personalizado
- **Framer Motion** para animaciones suaves
- **React Router DOM** para navegación
- **Design Tokens** para consistencia visual

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   └── Navigation.tsx          # Navegación principal sticky
│   ├── sections/
│   │   ├── Hero.tsx               # Sección principal
│   │   └── Section.tsx            # Componente reutilizable de sección
│   └── ui/
│       └── Card.tsx               # Tarjetas de contenido
├── styles/
│   ├── tokens/
│   │   ├── colors.ts              # Paleta de colores
│   │   ├── typography.ts          # Sistema tipográfico
│   │   └── spacing.ts             # Espaciado y breakpoints
│   └── themes/
│       └── solidoTheme.ts         # Tema personalizado de MUI
├── types/
│   └── index.ts                   # Interfaces TypeScript
├── utils/
│   └── scrollUtils.ts             # Utilidades de scroll y navegación
└── App.tsx                        # Componente principal
```

## 🎨 Secciones del Sitio

1. **HOME**: "Donde Big Law se encuentra con Big Tech"
2. **QUIÉNES SOMOS**: "El derecho, reprogramado"
3. **INNOVACIÓN**: IA, automation, data y precisión
4. **ÁREAS**: 7 áreas de práctica especializadas
5. **TALENTO**: "Humanos brillantes. Tecnología brillante"
6. **CONTACTO**: "El futuro legal está ocurriendo ahora"

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [repository-url]
cd solido-website

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

### Scripts Disponibles
```bash
npm start          # Servidor de desarrollo (puerto 3000)
npm run build      # Build de producción
npm test           # Ejecutar tests
npm run eject      # Ejectar configuración (irreversible)
```

## 📱 Responsive Design

El sitio está optimizado para los siguientes breakpoints:
- **xs**: 0px (móvil)
- **sm**: 600px (tablet pequeña)
- **md**: 900px (tablet)
- **lg**: 1200px (desktop)
- **xl**: 1536px (desktop grande)

## 🎯 SEO y Performance

### SEO Implementado
- Meta tags completos con keywords estratégicas
- Open Graph y Twitter Cards
- Estructura semántica HTML5
- URLs amigables

### Keywords Principales
- LegalTech, Big Law, automatización legal
- IA, inteligencia artificial, derecho corporativo
- M&A, compliance, propiedad intelectual

### Performance
- Lazy loading de imágenes
- Optimización de fuentes (preconnect)
- Animaciones optimizadas con Framer Motion
- Componentes reutilizables para reducir bundle size

## 🔧 Reglas de Desarrollo

### Nomenclatura
- **Variables/Funciones**: camelCase (`miVariable`, `procesarDatos`)
- **Componentes React**: PascalCase (`MiComponente`)
- **Archivos CSS/Clases**: kebab-case (`area-practica.css`, `.card-solido-business`)

### Componentes
- Todo elemento UI usado más de 2 veces debe ser reutilizable
- Mobile-First responsive design
- Design Tokens para consistencia

### Seguridad
- Validación estricta de formularios
- Sanitización de datos de entrada
- Auditoría de dependencias

## 📈 Próximas Mejoras

- [ ] Formulario de contacto funcional
- [ ] Integración con CMS para contenido dinámico
- [ ] Analytics y tracking
- [ ] PWA (Progressive Web App)
- [ ] Tests unitarios y de integración
- [ ] Optimización adicional de Core Web Vitals

## 📞 Contacto

Para consultas sobre el proyecto o desarrollo:
- **Email**: contacto@solidobusinesslaw.com
- **Sitio**: https://solidobusinesslaw.com

---

**Sólido Business Law** - La potencia de Big Law. La velocidad de Big Tech.