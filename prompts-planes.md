# Prompts para generar sitios dentales por plan

## Prompt 1 — Plan Presencia ($19.990/mes)

```
Genera el sitio web dental Plan Presencia para este cliente. Es una landing page profesional de una sola página con las secciones: Navbar sticky → Hero → Servicios → Perfil del Doctor → Horario → Contacto con mapa → Footer → WhatsApp flotante.

DATOS DEL CLIENTE:
{
  "consultorio": "",
  "doctor": "",
  "especialidad": "",
  "whatsapp": "",
  "email": "",
  "direccion": "",
  "servicios": [],
  "estrella": "",
  "pagos": [],
  "horario": "",
  "ctaPreferido": "",
  "experiencia": "",
  "bio": "",
  "diplomas": [],
  "estilo": "",
  "paleta": "",
  "slogan": ""
}

INSTRUCCIONES TÉCNICAS:
- Usa la infraestructura existente: middleware de subdomain routing, src/app/site/[slug]/layout.tsx (inyecta CSS vars), src/types/site.ts (SiteData interface)
- El template está en src/templates/presencia/HomePage.tsx y compone componentes de src/templates/shared/
- Las CSS variables --t-primary, --t-secondary, --t-accent, --t-bg, --t-text, --t-heading-font, --t-body-font, --t-radius ya se inyectan desde el layout
- Crea el registro en la tabla sites de Neon con status 'draft' y el site_data JSON
- El slug se genera del nombre del consultorio (lowercase, sin acentos, guiones)
- Cada servicio debe tener deep link a WhatsApp con mensaje "Hola, quiero consultar por [servicio] en [consultorio]"
- El diseño debe ser PROFESIONAL: buena tipografía, spacing, hover states, mobile-first responsive
- NO uses componentes genéricos ni básicos. Quiero un nivel de calidad de agencia real con gradientes sutiles, sombras, badges, animaciones de hover, transiciones suaves
- Cada sección debe tener un subtítulo (label pequeño en uppercase tracking-widest color primario) + título grande + contenido
```

---

## Prompt 2 — Plan Crecimiento ($34.990/mes)

```
Genera el sitio web dental Plan Crecimiento para este cliente. Incluye todo lo del Plan Presencia más secciones premium: galería antes/después, testimonios de pacientes, diplomas/certificaciones, convenios/previsiones, y sección FAQ.

DATOS DEL CLIENTE:
{
  "consultorio": "",
  "doctor": "",
  "especialidad": "",
  "whatsapp": "",
  "email": "",
  "direccion": "",
  "redes": "",
  "servicios": [],
  "estrella": "",
  "publico": [],
  "pagos": [],
  "convenios": [],
  "horario": "",
  "contacto": "",
  "ctaPreferido": "",
  "experiencia": "",
  "bio": "",
  "fotos": "",
  "fotosLink": "",
  "antesDespues": "",
  "testimonios": "",
  "diplomas": [{"nombre": "", "institucion": ""}],
  "mostrarConveniosWeb": true,
  "estilo": "",
  "paleta": "",
  "logo": "",
  "slogan": ""
}

INSTRUCCIONES TÉCNICAS:
- Usa la misma infraestructura multi-tenant existente (middleware, layout con CSS vars, SiteData interface)
- Crea el template en src/templates/crecimiento/HomePage.tsx
- Secciones en orden: Navbar → Hero → Stats strip (pacientes, años exp, Google rating, satisfacción) → Servicios con deep links WhatsApp → Galería Antes/Después (slider o grid comparativo) → Testimonios (carousel o cards con estrellas) → Perfil Doctor con timeline de diplomas → Convenios/Previsiones (grid con badges) → Horario → Contacto con mapa + formas de pago → CTA full-width → Footer → WhatsApp flotante
- Sección Antes/Después: usa un diseño de cards con labels "Antes" y "Después", por ahora con placeholders de color ya que las fotos se suben después
- Testimonios: cards con estrellas doradas (★), nombre del paciente, y quote con comillas
- Diplomas: timeline vertical con dots conectados por una línea, cada diploma en card con nombre e institución
- Convenios: grid responsive con icono de escudo + nombre de cada previsión
- El diseño debe ser de NIVEL AGENCIA PREMIUM: gradientes, sombras, hover animations (-translate-y-1), badges, bordes sutiles, spacing generoso
- Crea el registro en la tabla sites con plan 'crecimiento'
```

---

## Prompt 3 — Plan Autopilot ($49.990/mes)

```
Genera el sitio web dental Plan Autopilot para este cliente. Es el plan más completo: todo lo del Plan Crecimiento más blog con IA, perfiles del equipo médico, sistema de lead capture, y hasta 10 páginas.

DATOS DEL CLIENTE:
{
  "consultorio": "",
  "doctor": "",
  "especialidad": "",
  "whatsapp": "",
  "email": "",
  "direccion": "",
  "redes": "",
  "dominio": "",
  "servicios": [],
  "estrella": "",
  "publico": [],
  "pagos": [],
  "convenios": [],
  "horario": "",
  "contacto": "",
  "ctaPreferido": "",
  "experiencia": "",
  "bio": "",
  "fotos": "",
  "fotosLink": "",
  "antesDespues": "",
  "testimonios": "",
  "diplomas": [{"nombre": "", "institucion": ""}],
  "equipo": [{"nombre": "", "especialidad": "", "bio": ""}],
  "mostrarConveniosWeb": true,
  "estilo": "",
  "paleta": "",
  "logo": "",
  "slogan": "",
  "referencia": "",
  "notas": ""
}

INSTRUCCIONES TÉCNICAS:
- Usa la infraestructura multi-tenant existente (middleware subdomain routing, layout con CSS vars, SiteData interface)
- Crea el template en src/templates/autopilot/HomePage.tsx como página principal
- Crea sub-páginas en src/app/site/[slug]/: /tratamientos, /equipo, /galeria, /blog, /contacto
- PÁGINA PRINCIPAL: Navbar con links a sub-páginas → Hero premium con animación sutil → Stats strip → Servicios destacados (top 6) con link a /tratamientos → Preview del equipo médico (top 3) con link a /equipo → Testimonios carousel → CTA → Footer
- PÁGINA /tratamientos: Grid completo de todos los servicios con descripción, precio referencial, y deep link WhatsApp
- PÁGINA /equipo: Cards del equipo médico con avatar (iniciales), nombre, especialidad, bio. Incluye perfil del doctor principal con diplomas timeline
- PÁGINA /galeria: Grid de antes/después + galería general (placeholders por ahora)
- PÁGINA /blog: Lista de artículos (crear 2 artículos SEO iniciales generados con IA relevantes a la especialidad del doctor, ej: "5 señales de que necesitas [tratamiento estrella]" y "Guía completa de [especialidad] en [ciudad]")
- PÁGINA /contacto: Formulario de contacto (nombre, teléfono, mensaje) que envía a WhatsApp + mapa + info completa + convenios + horario + FAQ
- Lead capture: popup sutil después de 15 segundos con "¿Necesitas una evaluación? Escríbenos" que redirige a WhatsApp
- El diseño debe ser de NIVEL AGENCIA TOP: micro-animaciones, gradientes refinados, cards con glass effect, tipografía impecable, spacing premium, transiciones fluidas
- Crea el registro en la tabla sites con plan 'autopilot'
- Los artículos del blog se guardan en una tabla site_blog_posts (crearla si no existe): id, site_id, title, slug, content (markdown), published_at
```
