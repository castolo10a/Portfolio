# Daniel Castillo · Media Buyer de Meta Ads

Sitio web personal de Daniel Castillo, Administrador de Empresas y Media Buyer especializado en Meta Ads para e-commerce. Presenta sus servicios independientes de gestión y auditoría de cuentas publicitarias, además del desarrollo de páginas web, y permite a potenciales clientes solicitar una conversación desde un formulario de contacto.

**Sitio en producción:** [castillocoder.netlify.app](https://castillocoder.netlify.app/)

---

## Contenido del sitio

Es una página única (*single page*) con navegación por secciones:

| Sección | Qué muestra |
| --- | --- |
| **Inicio** | Propuesta de valor, llamado a la acción y datos clave del perfil |
| **Sobre mí** | Perfil profesional y enfoque de trabajo |
| **Servicios** | Tres ofertas (gestión mensual de Meta Ads, auditoría de cuenta y páginas web), proceso de trabajo y herramientas |
| **Experiencia** | Trayectoria profesional y formación |
| **Desarrollo web** | Sitios web desarrollados anteriormente |
| **Contacto** | Formulario de solicitud y canales directos (WhatsApp, correo y LinkedIn) |

## Tecnologías

- [React 18](https://react.dev/) con Create React App
- [Tailwind CSS 3](https://tailwindcss.com/) para los estilos
- [EmailJS](https://www.emailjs.com/) para el envío del formulario sin backend
- [React Hook Form](https://react-hook-form.com/) para la validación del formulario
- [react-scroll](https://github.com/fisshy/react-scroll) para la navegación entre secciones
- [react-hot-toast](https://react-hot-toast.com/) para las notificaciones
- Despliegue en [Netlify](https://www.netlify.com/)

## Estructura del proyecto

```text
src/
├── components/          # Una carpeta por sección o componente reutilizable
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Services/
│   ├── Experience/
│   ├── Projects/        # Sección "Desarrollo web"
│   ├── Contact/
│   ├── Footer/
│   ├── SectionHeading/  # Encabezado numerado de cada sección
│   └── SocialLinks/
├── constants/
│   ├── content.js       # Todos los textos del sitio
│   └── imageByProjects.js
├── hooks/
│   └── useContactForm.jsx   # Validación y envío del formulario
├── views/
│   └── Landing.jsx      # Orden de las secciones
├── ProjectGitHub.json   # Proyectos de la sección "Desarrollo web"
└── index.css            # Estilos base y clases reutilizables
```

## Cómo editar el contenido

No hace falta tocar los componentes para actualizar la información del sitio:

- **Textos, servicios, experiencia, herramientas y datos de contacto:** `src/constants/content.js`
- **Opciones del formulario** (servicios y rangos de inversión): objeto `CONTACT_SECTION` en `src/constants/content.js`
- **Proyectos web:** `src/ProjectGitHub.json`. La imagen de cada proyecto se agrega en `src/assets/images/` y se registra en `src/constants/imageByProjects.js`
- **Colores y tipografías:** `tailwind.config.js`

### Paleta de colores

| Token | Color | Uso |
| --- | --- | --- |
| `paper` | `#F7F4EF` | Fondo principal |
| `surface` | `#FFFDF9` | Tarjetas y secciones alternas |
| `ink` | `#1E1D1A` | Texto principal |
| `muted` | `#6E685F` | Texto secundario |
| `line` | `#E6E0D6` | Bordes |
| `accent` | `#2F5D50` | Botones y detalles |
| `accent-soft` | `#E4ECE7` | Fondos destacados |

Tipografías: **Instrument Serif** para los títulos e **Inter** para el texto, cargadas desde Google Fonts.

## Ejecutar en local

Requisitos: Node.js 16 o superior y npm.

```bash
git clone https://github.com/castolo10a/portfolio.git
cd portfolio
npm install
```

Crea un archivo `.env` en la raíz del proyecto con las credenciales de EmailJS:

```env
REACT_APP_EMAILJS_SERVICE_ID=tu_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=tu_public_key
```

Luego inicia el servidor de desarrollo:

```bash
npm start
```

El sitio queda disponible en `http://localhost:3000`.

### Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción en la carpeta `build/` |
| `npm test` | Ejecuta las pruebas |

## Formulario de contacto

El formulario pide el servicio de interés, nombre, correo, marca (opcional), inversión mensual en pauta (opcional) y un mensaje. Se envía con EmailJS usando tres variables de la plantilla:

| Variable | Contenido |
| --- | --- |
| `user_name` | Nombre de la persona |
| `user_email` | Correo de la persona |
| `message` | Servicio, marca, inversión mensual y mensaje, en un solo texto |

## Despliegue

El sitio se publica en Netlify cada vez que se suben cambios a la rama `main`. La configuración está en `netlify.toml`, en la raíz del proyecto:

- **Comando de build:** `npm run build`
- **Carpeta publicada:** `build`
- **Redirección** de todas las rutas a `index.html`

Las variables de EmailJS deben configurarse también en Netlify, en **Site configuration → Environment variables**.

## Contacto

- **LinkedIn:** [Daniel Castillo](https://www.linkedin.com/in/daniel-castillo-b4b79a447/)
- **WhatsApp:** [+57 311 698 4474](https://wa.me/573116984474)
- **Correo:** castillod159@gmail.com
