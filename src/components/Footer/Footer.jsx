import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";

export default function Footer () {
  const fileUrl = process.env.PUBLIC_URL + '/CV - Daniel Castillo.pdf';

    return (
      <footer className="bg-footer bg-cover">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex justify-center text-xl text-gray-200">
              <a href='/#Home'>
                <span>
                  CastilloCoder
                </span>
              </a>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-gray-200">
              ¡Gracias por visitar mi perfil! <br></br> Si tienes alguna pregunta sobre mis proyectos o simplemente deseas saludar, ¡no dudes en escribirme!
            </p>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
              <li>
                <a className="text-gray-200 transition hover:text-gray-500/75" href="/#Home">
                  Inicio
                </a>
              </li>

              <li>
                <a className="text-gray-200 transition hover:text-gray-500/75" href="/#AboutMe">
                  Sobre Mí
                </a>
              </li>

              <li>
                <a className="text-gray-200 transition hover:text-gray-500/75" href="/#Projects">
                  Proyetos
                </a>
              </li>

              <li>
                <a className="text-gray-200 transition hover:text-gray-500/75" href="/#Contact">
                  Contacto
                </a>
              </li>

              <li>
                <a className="text-gray-200 transition hover:text-gray-500/75" href={fileUrl} rel='noreferrer' target='_blank'>
                  CV
                </a>
              </li>
            </ul>

            <ul className="mt-12 flex justify-center gap-6 md:gap-8">
              <li>
                <a
                  href="https://www.linkedin.com/in/danielcastillo97/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-200 transition hover:text-gray-500/75"
                >
                  <FaLinkedin size={23} />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/castolo10a"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-200 transition hover:text-gray-500/75"
                >
                  <FaGithub size={23} />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/castolo10a"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-200 transition hover:text-gray-500/75"
                >
                  <FaTwitter size={23} />
                </a>
              </li>


              <li>
                <a
                  href="http://wa.me/573116984474#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-200 transition hover:text-gray-500/75"
                >
                  <FaWhatsapp size={23} />
                </a>
              </li>

              <li>
                <a
                  href="mailto:daniel.302009@hotmail.com"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-200 transition hover:text-gray-500/75"
                >
                  <SiMicrosoftoutlook size={23} />
                </a>
              </li>
            </ul>
            <p className="text-center text-xs text-gray-200 pt-4">
              CastilloCoder © {new Date().getFullYear()} Todos los derechos reservados
            </p>
          </div>
        </footer>
    )
  }