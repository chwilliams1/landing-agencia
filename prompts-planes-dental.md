# ═══════════════════════════════════════════════════════════════
# PROMPTS PARA CLAUDE CODE — SITIOS WEB DENTALES POR PLAN
# ═══════════════════════════════════════════════════════════════
#
# Estos prompts tienen placeholders marcados con {{VARIABLE}}
# que se llenan automáticamente con el formulario de intake.
#
# Placeholders disponibles:
# {{NOMBRE_CLINICA}} — Nombre del consultorio
# {{NOMBRE_DOCTOR}} — Nombre completo del doctor/a
# {{ESPECIALIDAD}} — Especialidad principal
# {{WHATSAPP}} — Número de WhatsApp (solo dígitos)
# {{EMAIL}} — Email de contacto
# {{DIRECCION}} — Dirección completa
# {{REDES_SOCIALES}} — Links de Instagram, Facebook, etc.
# {{SERVICIOS}} — Lista de tratamientos ofrecidos
# {{SERVICIO_ESTRELLA}} — Tratamiento destacado
# {{PUBLICO}} — Público objetivo
# {{FORMAS_PAGO}} — Métodos de pago aceptados
# {{ESTILO_VISUAL}} — Estilo elegido (minimalista, premium, cálido, etc.)
# {{PALETA_COLORES}} — Paleta completa con códigos hex
# {{LOGO}} — Estado del logo (tiene, no tiene, quiere renovar)
# {{SLOGAN}} — Frase o slogan
# {{HORARIO}} — Horario de atención detallado
# {{EXPERIENCIA}} — Años de experiencia
# {{BIO}} — Biografía del doctor
# {{TESTIMONIOS}} — Testimonios de pacientes
# {{FOTOS}} — Tipo de fotos disponibles
# {{ANTES_DESPUES}} — Si tiene fotos antes/después
# {{REFERENCIA}} — URL de referencia visual
# {{NOTAS}} — Notas adicionales del cliente
# ═══════════════════════════════════════════════════════════════


---


# ╔═══════════════════════════════════════════════════════════╗
# ║              PLAN ESENCIAL — $20 USD/MES                  ║
# ║              Landing page de 1 página                     ║
# ╚═══════════════════════════════════════════════════════════╝

Crea un sitio web profesional de UNA sola página (landing page) para la clínica dental "{{NOMBRE_CLINICA}}". El sitio debe ser moderno, rápido, responsive mobile-first, y estar 100% enfocado en que el paciente tome contacto por WhatsApp o llamada telefónica.

---

## DATOS DEL CLIENTE

- Clínica: {{NOMBRE_CLINICA}}
- Doctor/a: {{NOMBRE_DOCTOR}}
- Especialidad: {{ESPECIALIDAD}}
- WhatsApp: {{WHATSAPP}}
- Email: {{EMAIL}}
- Dirección: {{DIRECCION}}
- Redes sociales: {{REDES_SOCIALES}}
- Experiencia: {{EXPERIENCIA}}
- Biografía: {{BIO}}
- Logo: {{LOGO}}
- Slogan: {{SLOGAN}}

## DISEÑO VISUAL

- Estilo: {{ESTILO_VISUAL}}
- Paleta de colores: {{PALETA_COLORES}}
- Referencia visual: {{REFERENCIA}}
- Notas del cliente: {{NOTAS}}

IMPORTANTE: Usa los códigos hex EXACTOS de la paleta proporcionada. El color principal se usa para headers, botones y acentos. El secundario para fondos de secciones alternas. El acento para CTAs y elementos destacados. El fondo para el background general. El color de texto para la tipografía.

## ESTRUCTURA — 6 SECCIONES EN 1 PÁGINA

### 1. HERO (primera vista)
- Fondo: imagen de stock de consultorio dental moderno con overlay del color principal al 85% de opacidad
- Logo de la clínica (si tiene) o el nombre en tipografía serif elegante
- Título principal: "{{NOMBRE_CLINICA}}" en grande
- Subtítulo: {{SLOGAN}} o generar uno apropiado si no tiene
- Especialidad visible: "{{ESPECIALIDAD}}"
- 2 botones CTA lado a lado:
  - 💬 "Agendar por WhatsApp" → enlace a https://wa.me/{{WHATSAPP}}?text=Hola,%20quiero%20agendar%20una%20cita%20en%20{{NOMBRE_CLINICA}}
  - 📞 "Llamar ahora" → enlace tel:+{{WHATSAPP}}
- Indicador de scroll animado (flecha o chevron bouncing)

### 2. TRATAMIENTOS
- Título de sección: "Nuestros Tratamientos" o "¿Qué hacemos por tu sonrisa?"
- Grid de cards (2 columnas desktop, 1 móvil) con los tratamientos: {{SERVICIOS}}
- Cada card lleva:
  - Emoji o ícono SVG representativo del tratamiento
  - Nombre del tratamiento en bold
  - Descripción de 1-2 líneas (generar texto profesional para cada uno)
  - Si hay servicio estrella ({{SERVICIO_ESTRELLA}}), esa card lleva badge "⭐ Destacado" y estilo visual diferenciado (borde accent, fondo accent-light)
- CTA al final de la sección: "¿Necesitas alguno de estos tratamientos? → Escríbenos por WhatsApp"

### 3. SOBRE EL DOCTOR
- Layout: foto placeholder a un lado (usar div gris con ícono de cámara y texto "Foto del Dr./Dra.") + texto al otro lado
- Nombre: "{{NOMBRE_DOCTOR}}"
- Especialidad: {{ESPECIALIDAD}}
- Experiencia: {{EXPERIENCIA}}
- Biografía: {{BIO}} (si está vacío, generar una bio profesional de 3-4 líneas basándose en la especialidad y experiencia)
- Elementos de confianza:
  - 🎓 Universidad / Formación
  - ⏱️ {{EXPERIENCIA}} de experiencia
  - 🦷 Especialista en {{ESPECIALIDAD}}

### 4. HORARIO DE ATENCIÓN
- Diseño tipo tarjeta centrada con fondo del color secundario
- Tabla visual de horarios: {{HORARIO}}
- Cada día en una fila con día a la izquierda y hora a la derecha
- "Cerrado" en color rojo/danger
- Debajo del horario: dirección completa + mini enlace a Google Maps

### 5. CÓMO LLEGAR (MAPA)
- Título: "Encuéntranos" o "¿Cómo llegar?"
- Google Maps embebido (iframe) con la dirección: {{DIRECCION}}
  - Usar: `<iframe src="https://maps.google.com/maps?q={{DIRECCION_ENCODED}}&output=embed" ...>`
- Debajo del mapa: dirección en texto + botón "Abrir en Google Maps"

### 6. CONTACTO / FOOTER
- Fondo oscuro (color principal oscuro o negro suave)
- Título: "¿Listo para tu nueva sonrisa?" o "Agenda tu cita hoy"
- Datos de contacto:
  - 📞 Teléfono/WhatsApp: {{WHATSAPP}}
  - 📧 Email: {{EMAIL}}
  - 📍 Dirección: {{DIRECCION}}
  - 🕐 Horario resumido
- Redes sociales: {{REDES_SOCIALES}} (iconos clickeables)
- Formas de pago: {{FORMAS_PAGO}} (íconos pequeños: 💵💳🏦 etc.)
- Copyright: © 2026 {{NOMBRE_CLINICA}}. Todos los derechos reservados.

## ELEMENTOS FLOTANTES (siempre visibles)

### Botón WhatsApp flotante
- Posición: fixed, bottom-right (bottom: 24px, right: 24px)
- Ícono de WhatsApp verde (#25D366) con sombra
- Tamaño: 56px circular
- Animación: pulse suave cada 3 segundos
- Link: https://wa.me/{{WHATSAPP}}?text=Hola,%20quiero%20agendar%20una%20cita
- En hover muestra tooltip: "Escríbenos por WhatsApp"

### Botón Llamar (solo móvil)
- Visible solo en pantallas < 768px
- Barra fija en la parte inferior con 2 botones:
  - "📞 Llamar" → tel:+{{WHATSAPP}}
  - "💬 WhatsApp" → wa.me link
- Fondo del color principal, texto blanco

## REQUISITOS TÉCNICOS

1. HTML semántico: header, nav, main, section, footer
2. Mobile-first: diseñar primero para 375px, luego escalar
3. Tipografía: importar de Google Fonts una serif elegante para títulos + sans-serif limpia para body (basarse en el estilo visual elegido)
4. CSS custom properties con la paleta exacta del cliente
5. Meta tags completos: title, description, viewport, charset, Open Graph (og:title, og:description, og:image, og:url), Twitter Card
6. Favicon: generar con emoji 🦷 o usar el color principal
7. SEO básico: un solo H1, H2 por sección, alt en todas las imágenes, meta description con "{{NOMBRE_CLINICA}} - {{ESPECIALIDAD}} en {{CIUDAD}}. Agenda tu cita hoy."
8. Schema markup JSON-LD tipo "Dentist" + "LocalBusiness":
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Dentist",
     "name": "{{NOMBRE_CLINICA}}",
     "address": { "@type": "PostalAddress", "streetAddress": "{{DIRECCION}}" },
     "telephone": "+{{WHATSAPP}}",
     "openingHours": "{{HORARIO_SCHEMA}}"
   }
   ```
9. Lazy loading en todas las imágenes
10. Animaciones suaves al scroll: fade-in + slide-up usando IntersectionObserver (no librerías externas)
11. Scroll suave entre secciones con navegación por anchor
12. Certificado SSL (https)
13. Un solo archivo HTML con CSS y JS inline (para facilitar deploy)
14. Performance: menos de 3 segundos de carga, código minificado

## CONTENIDO Y TONO

- Lenguaje: español, profesional pero cercano y cálido
- Objetivo: eliminar el miedo al dentista, transmitir confianza
- Enfoque: beneficios para el paciente, no solo listar servicios
- CTAs: directos y claros ("Agenda tu cita", "Escríbenos", "Llámanos")
- Público objetivo: {{PUBLICO}}
- Adaptar el tono al público (si es infantil → más amigable; si es premium → más sofisticado)


---


# ╔═══════════════════════════════════════════════════════════╗
# ║            PLAN PROFESIONAL — $35 USD/MES                 ║
# ║            Sitio multipágina (hasta 7 páginas)            ║
# ╚═══════════════════════════════════════════════════════════╝

Crea un sitio web profesional MULTIPÁGINA para la clínica dental "{{NOMBRE_CLINICA}}". El sitio debe tener hasta 7 páginas, ser moderno, rápido, responsive mobile-first, y estar diseñado para generar confianza y convertir visitantes en pacientes. Incluye funcionalidades avanzadas como slider antes/después, galería de casos, testimonios, y WhatsApp inteligente por servicio.

---

## DATOS DEL CLIENTE

- Clínica: {{NOMBRE_CLINICA}}
- Doctor/a: {{NOMBRE_DOCTOR}}
- Especialidad: {{ESPECIALIDAD}}
- WhatsApp: {{WHATSAPP}}
- Email: {{EMAIL}}
- Dirección: {{DIRECCION}}
- Redes sociales: {{REDES_SOCIALES}}
- Experiencia: {{EXPERIENCIA}}
- Biografía: {{BIO}}
- Testimonios: {{TESTIMONIOS}}
- Logo: {{LOGO}}
- Slogan: {{SLOGAN}}
- Fotos propias: {{FOTOS}}
- Fotos antes/después: {{ANTES_DESPUES}}

## DISEÑO VISUAL

- Estilo: {{ESTILO_VISUAL}}
- Paleta de colores: {{PALETA_COLORES}}
- Referencia visual: {{REFERENCIA}}
- Notas del cliente: {{NOTAS}}

IMPORTANTE: Usa los códigos hex EXACTOS de la paleta. Mantén consistencia visual entre TODAS las páginas: misma navbar, mismos botones, mismo footer, mismas fonts, misma paleta.

## ESTRUCTURA — HASTA 7 PÁGINAS

### PÁGINA 1: HOME (index.html)
Todo lo del plan Esencial (Hero, tratamientos resumidos, doctor, horario, mapa, contacto) MÁS:

**Hero mejorado:**
- Slideshow de 2-3 imágenes de fondo (usar placeholders) con transición fade cada 5 segundos
- Overlay gradiente del color principal
- Badge animado: "⭐ {{SERVICIO_ESTRELLA}}" flotando con animación pulse
- Estadísticas en mini-cards debajo del hero: "{{EXPERIENCIA}}" | "🦷 +{{NUMERO_PACIENTES}} pacientes" | "⭐ 4.9 Google" (placeholders editables)

**Sección servicios resumida:**
- Grid de 6 cards con los tratamientos principales (de {{SERVICIOS}})
- Botón "Ver todos los tratamientos →" que lleva a la página de tratamientos

**Preview de antes/después:**
- Mostrar 1 slider antes/después interactivo como muestra
- Texto: "Mira más resultados reales →" enlazando a la galería

**Testimonios preview:**
- Carrusel horizontal de 3 testimonios (usar {{TESTIMONIOS}} o generar placeholders)
- Cada testimonio: avatar placeholder + nombre + texto + estrellas ⭐⭐⭐⭐⭐
- "Ver más testimonios →"

**Sección de confianza:**
- Tiras de logos/badges: "Certificaciones", "Seguros aceptados", etc. (placeholders)
- Formas de pago: {{FORMAS_PAGO}} con íconos

### PÁGINA 2: TRATAMIENTOS (tratamientos.html)
Página individual por cada tratamiento ofrecido: {{SERVICIOS}}

**Layout de la página:**
- Hero interno con título "Nuestros Tratamientos" + breadcrumb (Inicio > Tratamientos)
- Grid de todos los tratamientos como cards expandibles

**Cada tratamiento lleva su sección o card expandible con:**
- Emoji/ícono + nombre del tratamiento
- Descripción detallada (3-5 líneas, generar contenido profesional)
- "¿Para quién es?" — perfil del paciente ideal
- "¿Cuánto dura?" — tiempo estimado del tratamiento
- "¿Duele?" — respuesta tranquilizadora
- Botón WhatsApp inteligente específico:
  - Ejemplo para ortodoncia: `https://wa.me/{{WHATSAPP}}?text=Hola,%20quiero%20consultar%20por%20ortodoncia%20en%20{{NOMBRE_CLINICA}}`
  - Cada tratamiento genera su propio link de WhatsApp con mensaje pre-escrito

**Servicio estrella ({{SERVICIO_ESTRELLA}}):**
- Card más grande con badge "⭐ Tratamiento destacado"
- Más contenido descriptivo
- Fondo diferenciado (accent-light)
- CTA más prominente

### PÁGINA 3: GALERÍA / ANTES Y DESPUÉS (galeria.html)
**Galería de casos reales:**
- Título: "Sonrisas que hablan por sí solas" o "Nuestros Resultados"
- Filtros por tratamiento (pills clickeables): Todos | Blanqueamiento | Ortodoncia | Implantes | Carillas | etc. (basarse en {{SERVICIOS}})

**Slider antes/después interactivo:**
- 4-6 placeholders de casos con slider deslizable
- Cada caso muestra:
  - Imagen antes (placeholder gris con texto "Foto antes") a la izquierda
  - Imagen después (placeholder gris claro con texto "Foto después") a la derecha
  - Barra vertical divisoria blanca con handle circular
  - Funcionalidad: arrastrar la barra revela/oculta la imagen "después" con clip-path
  - Labels "ANTES" y "DESPUÉS" en pills semitransparentes
  - Funciona con mouse y touch
- Info debajo de cada slider:
  - Tratamiento realizado
  - Duración del tratamiento
  - Breve descripción del caso

**Galería de fotos general:**
- Grid masonry o uniforme de fotos del consultorio, equipo, instalaciones
- Lightbox al hacer clic (overlay oscuro + imagen ampliada + navegación prev/next)
- Placeholders con texto: "Foto consultorio", "Foto equipamiento", "Foto recepción"

### PÁGINA 4: SOBRE NOSOTROS (nosotros.html)
**Perfil completo del doctor:**
- Hero interno con foto grande placeholder + nombre
- Bio extendida: {{BIO}} (si vacío, generar bio profesional de 2 párrafos)
- Timeline o lista visual de formación:
  - 🎓 Universidad
  - 📜 Posgrados y especializaciones
  - 🏆 Certificaciones y premios
- Sección "Diplomas y certificaciones" — grid de placeholders para fotos de diplomas con lightbox
- Filosofía de trabajo / misión (generar texto basado en especialidad y estilo)

**Sección de confianza:**
- Contadores animados (scroll-triggered): "XX años de experiencia" | "XX+ pacientes atendidos" | "XX tratamientos realizados" (usar {{EXPERIENCIA}} para calcular estimados)

### PÁGINA 5: TESTIMONIOS (testimonios.html)
**Testimonios de pacientes:**
- Título: "Lo que dicen nuestros pacientes"
- Cards de testimonios (usar {{TESTIMONIOS}} o generar 6 placeholders)
- Cada testimonio:
  - Avatar circular placeholder
  - Nombre del paciente
  - Tratamiento realizado
  - Texto del testimonio entre comillas
  - Rating: ⭐⭐⭐⭐⭐
  - Fecha aproximada
- Diseño: grid 2 columnas desktop, 1 móvil
- CTA al final: "¿Quieres ser el próximo? Agenda tu cita"

### PÁGINA 6: FAQ (faq.html)
**Preguntas frecuentes reales de pacientes:**
- Título: "Preguntas que nos hacen todos los días"
- Acordeón expandible (click para abrir/cerrar) con 12-15 preguntas
- Generar preguntas REALES basadas en {{SERVICIOS}} y {{ESPECIALIDAD}}:

Preguntas genéricas que siempre aplican:
  - "¿La primera consulta tiene costo?"
  - "¿Qué formas de pago aceptan?" → incluir {{FORMAS_PAGO}}
  - "¿Atienden urgencias?"
  - "¿Cuál es su horario?" → incluir {{HORARIO}}
  - "¿Dónde están ubicados?" → incluir {{DIRECCION}}
  - "¿Atienden niños?"

Preguntas por tratamiento (generar según {{SERVICIOS}}):
  - Si tiene ortodoncia: "¿A qué edad se pueden poner brackets?", "¿Brackets metálicos o invisalign?", "¿Cuánto dura el tratamiento de ortodoncia?"
  - Si tiene blanqueamiento: "¿El blanqueamiento daña los dientes?", "¿Cuánto dura el resultado?"
  - Si tiene implantes: "¿Los implantes duelen?", "¿Cuánto dura un implante dental?", "¿Soy candidato para implantes?"
  - Si tiene carillas: "¿Las carillas se ven naturales?", "¿Cuánto duran las carillas?"
  - etc.

- Cada respuesta: 2-4 líneas, tono profesional pero tranquilizador
- CTA al final: "¿Tienes otra pregunta? Escríbenos" → WhatsApp

### PÁGINA 7: CONTACTO (contacto.html)
**Página de contacto completa:**
- Layout 2 columnas: info a la izquierda, mapa a la derecha
- Info de contacto:
  - 📞 {{WHATSAPP}} (clickeable)
  - 📧 {{EMAIL}} (clickeable)
  - 📍 {{DIRECCION}}
  - 🕐 Horario: {{HORARIO}} (tabla visual)
  - Redes: {{REDES_SOCIALES}} (íconos)
  - Formas de pago: {{FORMAS_PAGO}}
- Google Maps embebido grande
- Formulario de contacto (nombre, teléfono, servicio de interés [select], mensaje, botón enviar)
  - El formulario es visual, no necesita backend funcional
  - Al enviar muestra mensaje: "¡Gracias! Te contactaremos pronto. Para respuesta inmediata escríbenos al WhatsApp."

## COMPONENTES GLOBALES (todas las páginas)

### Navbar
- Fixed top, fondo blur (backdrop-filter: blur) transparente que se vuelve sólido al scroll
- Logo/nombre a la izquierda
- Links: Inicio | Tratamientos | Galería | Nosotros | Testimonios | FAQ | Contacto
- Botón CTA: "Agendar Cita" (color accent) → WhatsApp
- Menú hamburguesa en móvil con slide-in lateral

### Footer
- Fondo oscuro (color principal dark o gris oscuro)
- 3 columnas: Info clínica | Links rápidos | Contacto
- Redes sociales con íconos
- Formas de pago
- Copyright

### Botón WhatsApp flotante
- Igual que plan Esencial: fixed bottom-right, pulse animation, tooltip

### Barra móvil inferior
- Solo en < 768px: "📞 Llamar" + "💬 WhatsApp" fijos en bottom

## REQUISITOS TÉCNICOS

Todo lo del plan Esencial MÁS:

1. Navegación entre páginas con links relativos (href="tratamientos.html")
2. Breadcrumbs en páginas internas: Inicio > Tratamientos > ...
3. Schema markup extendido: "Dentist" + "LocalBusiness" + "FAQPage" (en faq.html) + "MedicalBusiness"
4. Open Graph tags por cada página individual (og:title, og:description únicos)
5. Meta description única por página
6. Slider antes/después: implementar con JavaScript vanilla:
   - Contenedor con position relative y overflow hidden
   - Imagen "antes" como base, imagen "después" con clip-path: inset()
   - Línea divisoria blanca + handle circular con flechas
   - Event listeners para mouse (mousedown/mousemove/mouseup) y touch (touchstart/touchmove/touchend)
   - Calcular porcentaje con: ((clientX - rect.left) / rect.width) * 100
7. Acordeón FAQ: sin librerías, puro JS con max-height transition
8. Galería con lightbox: overlay, imagen ampliada, navegación, cerrar con X o click fuera
9. Filtros de galería: toggle de clases CSS, transición fade
10. Animaciones al scroll con IntersectionObserver: fade-in, slide-up, slide-left, slide-right
11. Contadores animados: animación de 0 a N cuando entra en viewport
12. Carrusel de testimonios: CSS scroll-snap o JS simple
13. Transiciones de página: cada página carga con fade-in sutil del body
14. Imágenes: todos los placeholders son divs grises con borde dashed y texto descriptivo centrado, fáciles de reemplazar por fotos reales
15. CSS compartido: un archivo style.css importado en todas las páginas (variables, navbar, footer, componentes)
16. Archivos separados: index.html, tratamientos.html, galeria.html, nosotros.html, testimonios.html, faq.html, contacto.html, style.css, script.js

## CONTENIDO Y TONO

Igual que plan Esencial más:
- Contenido más extenso y detallado por tratamiento
- Tono que genera CONFIANZA: mostrar resultados, credenciales, testimonios
- Cada página tiene propósito de conversión: siempre hay un CTA visible a WhatsApp
- Público objetivo: {{PUBLICO}}


---


# ╔═══════════════════════════════════════════════════════════╗
# ║              PLAN PREMIUM — $55 USD/MES                   ║
# ║              Sitio completo (páginas ilimitadas)           ║
# ╚═══════════════════════════════════════════════════════════╝

Crea el sitio web dental MÁS COMPLETO Y PREMIUM posible para la clínica dental "{{NOMBRE_CLINICA}}". Debe ser visualmente impactante con animaciones de alta gama, funcionalidades avanzadas, y transmitir que esta es la clínica dental más profesional y moderna de su ciudad. Sin límite de páginas. Incluye todas las funcionalidades del plan Profesional más: blog, comparador de tratamientos, banner de urgencias, perfiles de equipo, sección de tecnología, contadores, pop-up de captación, promociones, y Google Analytics.

---

## DATOS DEL CLIENTE

- Clínica: {{NOMBRE_CLINICA}}
- Doctor/a: {{NOMBRE_DOCTOR}}
- Especialidad: {{ESPECIALIDAD}}
- WhatsApp: {{WHATSAPP}}
- Email: {{EMAIL}}
- Dirección: {{DIRECCION}}
- Redes sociales: {{REDES_SOCIALES}}
- Experiencia: {{EXPERIENCIA}}
- Biografía: {{BIO}}
- Testimonios: {{TESTIMONIOS}}
- Logo: {{LOGO}}
- Slogan: {{SLOGAN}}
- Fotos propias: {{FOTOS}}
- Fotos antes/después: {{ANTES_DESPUES}}

## DISEÑO VISUAL

- Estilo: {{ESTILO_VISUAL}}
- Paleta de colores: {{PALETA_COLORES}}
- Referencia visual: {{REFERENCIA}}
- Notas del cliente: {{NOTAS}}

IMPORTANTE: Este es el plan PREMIUM. El diseño debe verse notablemente superior a los otros planes. Animaciones más elaboradas, transiciones más pulidas, layouts más creativos, microinteracciones en cada elemento interactivo. Usar los hex EXACTOS de la paleta.

## ESTRUCTURA — TODAS LAS PÁGINAS DEL PLAN PROFESIONAL MÁS:

### MEJORAS AL HOME (index.html)

**Hero premium:**
- Video de fondo en loop (placeholder: div negro con texto "Video del consultorio" + botón play decorativo) con overlay gradiente
- Si no hay video: slideshow con parallax sutil y transiciones cinematic (zoom lento + fade)
- Animación de entrada orquestada: logo fade-in → título slide-up → subtítulo slide-up con delay → botones scale-in → estadísticas slide-up staggered
- Efecto de partículas sutiles o formas geométricas flotantes relacionadas con odontología

**Banner de urgencias dentales 24/7:**
- Barra fija debajo del navbar (o encima) con fondo rojo/accent llamativo
- Texto: "🚨 Urgencias dentales 24/7 — Llámanos ahora" con número clickeable
- Animación: pulse o breathing del fondo
- Botón WhatsApp directo con mensaje: "Hola, tengo una urgencia dental"
- Se puede cerrar con X pero reaparece al cambiar de página

**Contadores animados en el home:**
- Sección con fondo del color principal + pattern sutil
- 3-4 contadores que animan de 0 al número cuando entran en viewport:
  - "+{{EXPERIENCIA_NUMERO}} años de experiencia"
  - "+3.000 pacientes atendidos" (placeholder editable)
  - "+5.000 tratamientos realizados" (placeholder editable)
  - "4.9 ⭐ calificación" (placeholder editable)
- Animación: easeOutExpo, duración 2 segundos, con separador de miles
- Se ejecuta solo la primera vez que entra en viewport

**Sección de promociones y ofertas:**
- Card destacada con borde accent, fondo accent-light
- Título: "🔥 Oferta del mes" o "Promoción especial"
- Contenido placeholder: "Blanqueamiento profesional — 20% de descuento este mes"
- Fecha de expiración placeholder con countdown visual (días : horas : minutos)
- CTA: "Aprovecha esta oferta → WhatsApp"

### PÁGINA NUEVA: BLOG (blog.html + blog-post.html)

**Página de listado del blog:**
- Título: "Tips y Consejos Dentales" o "Blog de Salud Dental"
- Grid de artículos: imagen placeholder + título + extracto + fecha + categoría + "Leer más →"
- Sidebar o filtros por categoría: Cuidado dental | Tratamientos | Niños | Emergencias | Estética

**Generar 4 artículos de ejemplo (contenido completo de 300-400 palabras cada uno) basados en {{SERVICIOS}} y {{ESPECIALIDAD}}:**

1. "5 señales de que necesitas visitar al dentista" — Contenido general, aplica siempre
2. Artículo sobre {{SERVICIO_ESTRELLA}} — Ej: si es ortodoncia: "Brackets vs Invisalign: ¿Cuál elegir?"
3. "Cómo cuidar tus dientes entre visitas al dentista" — Tips prácticos
4. Artículo estacional/local — Ej: "Urgencias dentales: qué hacer mientras llegas al dentista"

**Página de artículo individual (blog-post.html):**
- Template reutilizable
- Hero con imagen placeholder + título + fecha + categoría + tiempo de lectura
- Contenido con tipografía de lectura (serif o sans legible, max-width 720px centrado)
- Sidebar: "Otros artículos" + CTA "Agenda tu cita"
- Compartir en redes al final
- CTA al final del artículo: "¿Necesitas este tratamiento? Agenda tu cita →"

### PÁGINA NUEVA: COMPARADOR DE TRATAMIENTOS (comparador.html)

**Comparador visual interactivo:**
- Título: "¿No sabes qué tratamiento elegir?" o "Compara y decide"
- Tablas comparativas visuales para las comparaciones más comunes:

Generar comparaciones basadas en {{SERVICIOS}} (solo las que apliquen):

- Si tiene ortodoncia: **Brackets metálicos vs Brackets estéticos vs Invisalign**
  - Columnas: Tratamiento | Duración | Visibilidad | Comodidad | Precio aprox. | Ideal para
  - Cards visuales lado a lado con íconos y barras de rating

- Si tiene carillas/estética: **Resina vs Porcelana vs E-max**
  - Columnas: Material | Durabilidad | Naturalidad | Sesiones | Precio aprox.

- Si tiene implantes: **Implante vs Puente vs Prótesis removible**
  - Columnas: Opción | Durabilidad | Estética | Comodidad | Tiempo | Precio aprox.

- Si tiene blanqueamiento: **Blanqueamiento en consultorio vs Blanqueamiento casero**
  - Columnas: Método | Resultados | Duración | Sesiones | Precio aprox.

**Diseño de cada comparación:**
- Cards lado a lado (2 o 3 columnas)
- Cada card lleva: ícono/emoji, nombre, rating visual con barras, checkmarks de ventajas, X de desventajas
- Badge "Recomendado por {{NOMBRE_DOCTOR}}" en la opción favorita
- CTA debajo: "¿Cuál es mejor para ti? Pregúntale al doctor →" → WhatsApp con mensaje: "Hola, quiero saber qué tratamiento me conviene"

### PÁGINA NUEVA: EQUIPO MÉDICO (equipo.html)

**Perfil individual de cada doctor:**
- Título: "Nuestro Equipo" o "Conoce a nuestros especialistas"
- Grid de cards del equipo (placeholders editables para agregar más doctores)
- Card de {{NOMBRE_DOCTOR}} como principal (más grande, con badge "Director/a")
- Cards adicionales como placeholders: "Dr./Dra. [Nombre]" con:
  - Foto circular placeholder
  - Nombre y apellido
  - Especialidad
  - Mini bio (2 líneas)
  - Botón: "Agendar con este doctor →" → WhatsApp específico

### PÁGINA NUEVA: CONVENIOS Y SEGUROS (convenios.html)

**Seguros e isapres aceptadas:**
- Título: "Convenios y Seguros Dentales"
- Grid de logos de aseguradoras/isapres (placeholders con nombres):
  - Fonasa
  - Colmena
  - Cruz Blanca
  - Banmédica
  - Consalud
  - Vida Tres
  - Nueva Masvida
  - (editables por el cliente)
- Texto: "¿Tu seguro no está en la lista? Consúltanos, trabajamos con más convenios"
- CTA: "Consulta si aceptamos tu seguro → WhatsApp"

### PÁGINA NUEVA: NUESTRA TECNOLOGÍA (tecnologia.html)

**Equipamiento y tecnología del consultorio:**
- Título: "Tecnología de última generación" o "Tu sonrisa con la mejor tecnología"
- Layout: cards grandes alternando imagen-izquierda/imagen-derecha
- Equipos placeholder (editables):
  - 📷 "Scanner intraoral 3D" — "Moldes digitales sin la pasta incómoda"
  - ☢️ "Radiografía digital" — "Menor radiación, resultados instantáneos"
  - 🔬 "Láser dental" — "Tratamientos menos invasivos y más rápidos"
  - 🪑 "Sillón dental ergonómico" — "Tu comodidad es prioridad"
  - 🦷 "Cámara intraoral" — "Ve lo que el doctor ve en pantalla"
- Cada item: imagen placeholder + nombre + descripción (2 líneas sobre el beneficio para el PACIENTE, no tecnicismo)

## POP-UP DE CAPTACIÓN

**Pop-up "Primera evaluación gratis":**
- Aparece después de 30 segundos en la página O al intentar salir (exit-intent en desktop)
- NO aparece si el usuario ya lo cerró en esta sesión (usar sessionStorage)
- Diseño: overlay oscuro + card centrada con:
  - ❌ Botón cerrar arriba-derecha
  - Emoji 🦷 grande
  - Título: "¿Primera vez aquí?"
  - Subtítulo: "Tu primera evaluación es GRATIS. Sin compromiso."
  - Botón CTA: "Agendar mi evaluación gratis →" → WhatsApp con mensaje "Hola, quiero agendar mi evaluación gratuita en {{NOMBRE_CLINICA}}"
  - Texto chico: "Oferta válida para pacientes nuevos"
- Animación: fade-in del overlay + scale-in de la card

## ANIMACIONES PREMIUM (todo el sitio)

Estas animaciones diferencian el plan Premium de los demás:

1. **Entrada orquestada por página:** cada sección anima con staggered delays (0ms, 100ms, 200ms...)
2. **Parallax sutil:** imágenes de fondo se mueven más lento que el scroll (transform: translateY con factor 0.3)
3. **Hover states elaborados:** cards se elevan (translateY -8px + shadow increase), botones cambian gradiente, imágenes hacen zoom sutil (scale 1.03)
4. **Scroll progress bar:** barra fina de color accent en el top de la página que indica progreso de lectura
5. **Cursor personalizado:** cursor custom sutil en desktop (círculo outline que sigue el mouse con lag)
6. **Text reveal:** títulos de sección aparecen con efecto de revelación (clip-path o overflow hidden con translateY)
7. **Counter animation:** números suben con easeOutExpo cuando entran en viewport
8. **Image reveal:** imágenes aparecen con efecto cortina (div overlay que se contrae)
9. **Smooth page transitions:** loading indicator sutil entre páginas
10. **Micro-interactions:** checkmarks de la FAQ animan al abrir, tabs del comparador tienen underline animado, filtros de galería tienen transición fade

## GOOGLE ANALYTICS

Incluir el snippet de Google Analytics (GA4) en todas las páginas:
```html
<!-- Google tag (gtag.js) — REEMPLAZAR G-XXXXXXXXXX con el ID real del cliente -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
Comentario en el código: "REEMPLAZAR G-XXXXXXXXXX con el ID de Google Analytics del cliente"

## REQUISITOS TÉCNICOS

Todo lo del plan Profesional MÁS:

1. Archivo CSS más modular: variables.css (paleta), components.css (navbar, footer, cards, sliders), animations.css (keyframes, transitions), pages.css (estilos por página) — o un solo style.css bien organizado con comentarios
2. JavaScript modular: main.js (navbar, scroll, observers) + slider.js (antes/después) + gallery.js (lightbox, filtros) + counters.js + popup.js + comparator.js — o un solo script.js bien organizado
3. Schema markup completo: Dentist + LocalBusiness + FAQPage + MedicalBusiness + BlogPosting (en artículos) + MedicalWebPage
4. Performance: lazy loading agresivo, CSS above-the-fold inline en el head, defer en scripts, preload de fonts
5. Todas las páginas: index.html, tratamientos.html, galeria.html, nosotros.html, testimonios.html, faq.html, contacto.html, blog.html, blog-post.html, comparador.html, equipo.html, convenios.html, tecnologia.html, style.css, script.js
6. Comentarios en el código: marcar cada placeholder con `<!-- PLACEHOLDER: descripción -->` para que sea fácil encontrar y reemplazar
7. Imágenes placeholder: todos los placeholders de imagen llevan fondo gris (#e5e5e5), borde dashed 2px (#ccc), ícono de cámara centrado, y texto descriptivo — ejemplo: "📷 Foto del Dr. González — Reemplazar con foto real"

## CONTENIDO Y TONO

Igual que plan Profesional más:
- Contenido del blog: informativo, útil, orientado a SEO (títulos con keywords, subtítulos H2/H3, párrafos cortos)
- Comparador: objetivo e informativo, pero con recomendación del doctor
- Tecnología: enfocado en BENEFICIO para el paciente, no en especificaciones técnicas
- Urgencias: tono urgente pero tranquilizador
- Público objetivo: {{PUBLICO}}
- Todo el contenido de ejemplo debe ser realista y listo para usar (no lorem ipsum)


---


# ═══════════════════════════════════════════════════════════════
# NOTAS PARA EL DESARROLLADOR
# ═══════════════════════════════════════════════════════════════
#
# 1. Reemplaza todos los {{PLACEHOLDER}} con los datos reales del formulario
# 2. Los placeholders de imágenes se reemplazarán cuando el cliente envíe sus fotos
# 3. El contenido generado (bios, FAQs, blog) es editable por el cliente
# 4. Cada plan es ACUMULATIVO: Profesional incluye todo lo de Esencial,
#    Premium incluye todo lo de Profesional
# 5. Los archivos de cada plan deben estar en carpetas separadas:
#    /esencial/index.html
#    /profesional/index.html, tratamientos.html, galeria.html...
#    /premium/index.html, tratamientos.html, galeria.html, blog.html...
# 6. Todos los placeholders de imagen usan el formato:
#    <!-- PLACEHOLDER: [descripción] -->
#    <div class="img-placeholder">[emoji] [descripción] — Reemplazar con foto real</div>
# ═══════════════════════════════════════════════════════════════
