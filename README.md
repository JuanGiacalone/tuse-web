# TUSE - Sistema de Seguridad Inteligente para Trabajadores

## 📋 Descripción

TUSE es una landing page moderna y optimizada para un botón de emergencia inteligente diseñado específicamente para choferes de plataformas (Uber, DiDi, Cabify) y repartidores (PedidosYa, Rappi, Glovo). El sistema permite enviar alertas de emergencia instantáneas con ubicación GPS precisa a contactos de confianza por solo $5 USD/mes.

## ✨ Características Principales

### 🎯 Producto
- **Botón de Emergencia Inteligente** con conexión Bluetooth
- **Alerta GPS en tiempo real** a contactos de confianza
- **Activación discreta** sin necesidad de desbloquear el celular
- **Batería de larga duración** (6-8 meses)
- **App móvil** para iOS y Android
- **Soporte 24/7** incluido

### 🎨 Diseño
- **Diseño moderno y único** con gradientes y efectos visuales
- **Paleta de colores corporativa**: Rojo (#DC2626), Negro (#0A0A0A), Dorado (#C9A962), Gris, Blanco
- **100% Responsive** - Optimizado para móvil y desktop
- **Animaciones suaves** con Framer Motion
- **UX optimizada** para conversión

### 🚀 Optimización SEO
- **Meta tags completos** (title, description, keywords)
- **Open Graph** y Twitter Cards
- **Structured Data** (Schema.org) para Product, Organization y FAQPage
- **Headers optimizados** (H1, H2, H3) con keywords estratégicas
- **Sitemap** y robots.txt incluidos
- **Keywords objetivo**: botón de emergencia, seguridad choferes, seguridad delivery, uber, didi, cabify, pedidosya, rappi

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Framework principal
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos modernos
- **React Router DOM** - Navegación

### UI Components
- **Radix UI** - Componentes accesibles (shadcn/ui)
- **Custom Components** - Button, Card, Badge, etc.

### Plataforma
- **Base44** - Backend as a Service
- **Build automatizado** - Deploy instantáneo

## 📁 Estructura del Proyecto

```
tuse-landing/
├── components/
│   ├── landing/
│   │   ├── HeroSection.jsx          # Sección principal con CTA
│   │   ├── ProblemSection.jsx       # Problema que resuelve TUSE
│   │   ├── BenefitsSection.jsx      # Beneficios del producto
│   │   ├── HowItWorksSection.jsx    # Cómo funciona paso a paso
│   │   ├── TestimonialsSection.jsx  # Testimonios de usuarios
│   │   ├── FAQSection.jsx           # Preguntas frecuentes (12 FAQs)
│   │   ├── PricingSection.jsx       # Precios y oferta
│   │   ├── FooterSection.jsx        # Footer con contacto
│   │   └── WhatsAppButton.jsx       # Botón flotante de WhatsApp
│   ├── ui/                          # Componentes UI base (shadcn)
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── badge.jsx
│   │   └── ...
│   └── SEOHead.jsx                  # Componente SEO centralizado
├── pages/
│   └── Home.jsx                     # Página principal
└── README.md                        # Este archivo
```

## 🎨 Paleta de Colores

```css
--primary-red: #DC2626      /* Rojo principal */
--primary-gold: #C9A962     /* Dorado/oro */
--gold-light: #E8C868       /* Dorado claro */
--background: #0A0A0A       /* Negro fondo */
--surface: #1F1F1F          /* Gris oscuro */
--surface-light: #2A2A2A    /* Gris medio */
--white: #FFFFFF            /* Blanco */
```

## 📱 Secciones de la Landing Page

### 1. **Hero Section**
- Headline principal optimizado para SEO
- Precio destacado ($5/mes)
- 2 CTAs principales:
  - "Quiero mi TUSE por $5/mes" (WhatsApp)
  - "Ver cómo funciona" (WhatsApp)
- Badges de características clave
- Efectos visuales con orbes y gradientes

### 2. **Problem Section**
- Contexto del problema de seguridad
- 5 problemas comunes de trabajadores
- Target audience claramente definido
- Mensaje de urgencia

### 3. **Benefits Section**
- 5 beneficios principales del producto
- Cada beneficio con icono, título y descripción
- Colores diferenciados por categoría
- Hover effects interactivos

### 4. **How It Works Section**
- 4 pasos simples explicados
- Numeración visual clara
- Iconos representativos
- Línea conectora entre pasos

### 5. **Testimonials Section**
- 2 testimonios auténticos
- Rating con estrellas
- Información del usuario (nombre, profesión)
- Diseño de tarjetas con foto

### 6. **FAQ Section**
- 12 preguntas frecuentes
- Acordeón interactivo (expand/collapse)
- Animaciones suaves con Framer Motion
- CTA para contactar por WhatsApp
- Optimizado con Structured Data para rich snippets

### 7. **Pricing Section**
- Precio único: $5 USD/mes
- Lista de features incluidas
- Oferta de lanzamiento limitada
- Urgencia con mensaje de aumento de precio
- 2 CTAs: Registro inmediato y Demo

### 8. **Footer**
- Logo de TUSE
- Tagline principal
- Botón de contacto WhatsApp
- Copyright y protección de marca

### 9. **WhatsApp Floating Button**
- Botón fijo en la esquina inferior derecha
- Icono de WhatsApp animado
- Pulse animation para llamar la atención
- Link directo con mensaje predefinido

## 🔍 SEO - Optimizaciones Implementadas

### Meta Tags
```html
<title>TUSE - Botón de Emergencia para Choferes y Repartidores | Seguridad Laboral $5/mes</title>
<meta name="description" content="Protección inteligente para choferes de Uber, DiDi, Cabify y repartidores de PedidosYa, Rappi. Botón de pánico con GPS y alerta instantánea. Solo $5 USD/mes.">
<meta name="keywords" content="botón de emergencia, seguridad para choferes, seguridad delivery, uber seguridad...">
```

### Open Graph (Redes Sociales)
- og:title
- og:description
- og:image (logo TUSE)
- og:type (website)
- og:locale (es_AR)

### Structured Data (Schema.org)
1. **Product Schema**: Información del producto con precio y rating
2. **Organization Schema**: Datos de la empresa
3. **FAQ Schema**: Preguntas frecuentes para rich snippets

### Headers Jerárquicos
- **H1**: "Botón de Emergencia para Choferes y Repartidores - Protegé tu vida con un solo botón"
- **H2**: Títulos principales con keywords ("Alerta de Emergencia GPS", "Seguridad para Trabajadores", etc.)
- **H3**: Subtítulos en secciones específicas

### Keywords Principales
- botón de emergencia
- seguridad para choferes
- seguridad delivery
- uber seguridad / didi protección / cabify
- pedidosya repartidor / rappi seguridad
- botón de pánico GPS
- alerta emergencia
- seguridad laboral Argentina
- dispositivo seguridad personal


### Funcionalidad
- [ ] Sistema de registro de usuarios
- [ ] Dashboard de usuario
- [ ] Integración de pagos con Stripe/MercadoPago
- [ ] Panel de administración
- [ ] Sistema de tracking de alertas

### Marketing
- [ ] Blog para contenido SEO
- [ ] Landing pages específicas por plataforma (Uber, DiDi, etc.)
- [ ] Programa de referidos
- [ ] Testimonios en video
- [ ] Case studies

### Técnico
- [ ] A/B testing de CTAs
- [ ] Pixel de Facebook y Google Ads
- [ ] Google Analytics 4
- [ ] Hotjar para heatmaps
- [ ] Chat en vivo (Intercom, Drift)

## 📝 Notas de Desarrollo

### Convención de Nombres
- **Componentes**: PascalCase (ej: `HeroSection.jsx`)
- **Funciones**: camelCase
- **Constantes**: UPPER_SNAKE_CASE
- **Archivos CSS**: lowercase con guiones

### Buenas Prácticas
- Todos los componentes son funcionales con hooks
- Uso de `motion` de Framer Motion para animaciones
- Componentes pequeños y reutilizables
- Props tipadas con PropTypes o TypeScript (futuro)
- Responsive-first approach

### Performance
- Lazy loading de imágenes
- Animaciones optimizadas con Framer Motion
- CSS utility-first con Tailwind (bundle optimizado)
- Componentes separados para mejor code-splitting

## 🤝 Contribuciones

Este proyecto es mantenido por el equipo de TUSE. Para sugerencias o mejoras:
1. Contactar al equipo de desarrollo
2. Documentar claramente el cambio propuesto
3. Seguir las convenciones de código existentes

## 📄 Licencia

© 2025-2026 TUSE. Todos los derechos reservados.

---

**Desarrollado con ❤️ para la seguridad de trabajadores en Argentina**


✅ Optimizaciones Realizadas:
1. Meta Tags y SEO Técnico

    Title optimizado con keywords principales
    Meta description con llamado a acción
    Keywords relevantes para el mercado argentino
    Open Graph tags para redes sociales
    Twitter Cards configuradas
    Canonical URLs
    Robots meta tags

2. Headers Optimizados (H1, H2, H3)

    H1: Incluye keywords principales "Botón de Emergencia para Choferes y Repartidores"
    H2s: Optimizados con términos como "Seguridad para Trabajadores", "Alerta de Emergencia GPS", "Botón de Pánico"
    Jerarquía semántica correcta en todas las secciones

3. Structured Data (Schema.org)

    Product schema con precio y ratings
    Organization schema
    FAQ schema con preguntas clave
    Ayuda a aparecer en rich snippets de Google

4. Keywords Objetivo en Español

    botón de emergencia
    seguridad para choferes / delivery
    uber seguridad / didi / cabify
    pedidosya / rappi repartidor
    botón de pánico GPS
    alerta emergencia
    seguridad laboral Argentina
    dispositivo seguridad personal

5. Componente SEOHead Reutilizable


bun run tailwindcss -i ./src/index.css -o ./src/output.css --watch
