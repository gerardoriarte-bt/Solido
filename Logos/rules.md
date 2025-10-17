R.1.1. Variables/Funciones	Usar camelCase (miVariable, procesarDatos).	const legalTechData = ...;
R.1.2. Componentes (React/Otros)	Usar PascalCase (MiComponente).	<LegalTechCard />
R.1.3. Archivos CSS/Clases	Usar kebab-case para archivos y clases.	area-practica.css, .card-solido-business

R.2.1. ReutilizaciónTodo elemento UI (Botones, Tarjetas, Headers de Sección) que se use más de dos veces debe ser un componente reutilizable.Revisar: Evitar código duplicado para mantener la atomicidad.
R.2.2. Diseño Responsivo Todos los componentes deben ser probados y optimizados para los breakpoints estándar (sm, md, lg, xl). Prioridad a Mobile-First.Revisar: La experiencia 'Big Tech' requiere velocidad en cualquier dispositivo.
R.2.3. Uso de TipografíaImplementar las variables de tipografía (H1, H2, P, etc.) definidas en la guía de diseño a través de un sistema de Design Tokens o variables CSS/JS.Revisar: Asegurar la consistencia de fuente y tamaño en toda la aplicación.

R.3.1. Bloques de Código: Usar comentarios de bloque claro para explicar la lógica compleja o el propósito de un archivo/componente.
R.3.2. Funciones: Toda función pública debe tener un JSDoc (o similar) que describa sus parámetros, lo que retorna, y su propósito.
R.3.3. Tareas Pendientes: Usar el formato TODO: para marcar tareas inconclusas en el código.

S.1.1. Manejo de Formularios: Implementar validación estricta de formularios tanto en el lado del cliente (UX/UI inmediata) como en el lado del servidor/API (seguridad).	Prevenir inyección de datos maliciosos (XSS, SQL Injection, etc.) en el formulario de contacto.
S.1.2. Sanitización: Todos los datos de entrada del usuario (ej. nombre, correo) deben ser sanitizados y validados antes de su procesamiento o almacenamiento.	Minimizar el riesgo de ataques basados en contenido.
S.1.3. Uso de Dependencias: Todas las librerías/paquetes deben ser auditados (ej. con npm audit) antes de la integración.	Evitar vulnerabilidades conocidas en dependencias de terceros.

S.2.1. Optimización de Imágenes: Todas las imágenes deben estar optimizadas (comprimidas, en formatos modernos como WebP) y cargadas con atributos loading="lazy" (excepto el Hero).	LCP (Largest Contentful Paint): Debe ser lo más bajo posible para reflejar "velocidad".
S.2.2. Meta Tags: Todas las páginas deben tener sus meta tags de SEO, OG y Twitter card completos. Priorizar: Título, Descripción y H1 deben reflejar las keywords estratégicas (LegalTech, Big Law, Automation).	Core Web Vitals: Mantener métricas en verde (rápido y estable).
S.2.3. Accesibilidad (A11Y): Implementar atributos alt en imágenes y usar ARIA roles en componentes interactivos para cumplir con el estándar AA.	
A11Y Score: Mantener sobre el 95% en auditorías de Lighthouse.
F.1. Ramificación (Branching): Usar el modelo Git Flow o Trunk-Based Development. Regla estricta: No pushear directamente a la rama main/production.
F.2. Commits: Los mensajes de commit deben ser claros y seguir un formato consistente (ej. feat:, fix:, refactor:).
F.3. Revisión de Código	Todo Pull Request (PR) debe ser revisado y aprobado por al menos un desarrollador secundario antes de fusionarse.
F.4. Despliegue	El despliegue a producción debe realizarse solo desde una rama de release o main estable, después de pasar todas las pruebas de QA.

