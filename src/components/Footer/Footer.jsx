import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";

export default function Footer() {
  const fileUrl = process.env.PUBLIC_URL + "/CV - Daniel Castillo.pdf";

  return (
    <footer className="bg-footer bg-cover">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 text-gray-200">
        {/* Logo y mensaje */}
        <div className="text-center">
          <Link to="Home" smooth={true} duration={500} offset={-64}>
            <span className="text-xl font-semibold tracking-wide cursor-pointer">
              CastilloCoder
            </span>
          </Link>

          <p className="mt-4 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Gracias por visitar mi portafolio. Si estás buscando un
            desarrollador frontend comprometido, con enfoque en el detalle y
            pasión por crear experiencias web modernas, estaré encantado de
            conectar contigo.
          </p>
        </div>

        {/* Navegación */}
        <nav aria-label="Enlaces del sitio" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-sm">
            <li>
              <Link
                className="transition hover:text-teal-600 cursor-pointer"
                to="Home"
                smooth={true}
                duration={500}
                offset={-64}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="transition hover:text-teal-600 cursor-pointer"
                to="AboutMe"
                smooth={true}
                duration={500}
                offset={-64}
              >
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link
                className="transition hover:text-teal-600 cursor-pointer"
                to="Projects"
                smooth={true}
                duration={500}
                offset={-64}
              >
                Proyectos
              </Link>
            </li>
             <li>
              <Link
                className="transition hover:text-teal-600 cursor-pointer"
                to="InfoServices"
                smooth={true}
                duration={500}
                offset={-64}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                className="transition hover:text-teal-600 cursor-pointer"
                to="Contact"
                smooth={true}
                duration={500}
                offset={-64}
              >
                Contacto
              </Link>
            </li>
            <li>
              <a
                href={fileUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="transition hover:text-teal-600"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>

        {/* Redes sociales */}
        <address className="mt-12 not-italic flex justify-center gap-6 md:gap-8">
          <a
            href="https://www.linkedin.com/in/danielcastillo97/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn"
            className="transition hover:text-teal-600"
          >
            <FaLinkedin size={23} />
          </a>
          <a
            href="https://github.com/castolo10a"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub"
            className="transition hover:text-teal-600"
          >
            <FaGithub size={23} />
          </a>
          <a
            href="https://wa.me/573116984474"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="WhatsApp"
            className="transition hover:text-teal-600"
          >
            <FaWhatsapp size={23} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=castillod159@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar correo vía Gmail"
            className="transition hover:text-teal-600"
          >
            <SiGmail size={23} />
          </a>
        </address>

        {/* Créditos */}
        <p className="text-center text-xs mt-8">
          CastilloCoder © {new Date().getFullYear()} — Todos los derechos
          reservados
        </p>
      </div>
    </footer>
  );
}
