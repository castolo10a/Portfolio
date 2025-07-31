import profile from "../../assets/images/ProfilePic.webp";
import Navbar from "../Navbar/Navbar";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ButtonUniversal from "../ButtonUniversal/ButtonUniversal";

export default function Header() {
  return (
    <section
      id="Home"
      className="relative bg-setup bg-cover bg-center bg-fixed h-screen"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center py-24 md:py-32 h-screen">
        <Navbar />
        <div className="w-40 h-40">
          <img src={profile} alt="perfil" />
        </div>
        <div className="py-4 text-center">
          <h2 className="text-gray-200 text-2xl font-semibold">
            Daniel Castillo
          </h2>

          <h3 className="text-gray-400 text-base italic mt-1">
            Desarrollador Frontend | React & React Native
          </h3>

          <p className="text-gray-300 text-center max-w-md mt-4">
            Especializado en crear experiencias digitales modernas, responsivas
            y funcionales. Desarrollo interfaces con tecnologías como React,
            TypeScript y TailwindCSS, priorizando el rendimiento y la
            experiencia del usuario.
          </p>
        </div>
        <div className="flex flex-row py-4 space-x-4">
          <ButtonUniversal
            path="AboutMe"
            text="Sobre Mí"
            className="bg-transparent"
            isScroll
          />
          <ButtonUniversal
            path="Projects"
            text="Proyectos"
            className="bg-transparent"
            isScroll
          />
        </div>
        <ul className="flex flex-row py-4 gap-4 md:gap-6">
          <li>
            <a
              href="https://www.linkedin.com/in/danielcastillo97/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-200 transition hover:text-teal-600"
            >
              <FaLinkedin size={23} />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/castolo10a"
              rel="noreferrer"
              target="_blank"
              className="text-gray-200 transition hover:text-teal-600"
            >
              <FaGithub size={23} />
            </a>
          </li>

          <li>
            <a
              href="http://wa.me/573116984474#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-200 transition hover:text-teal-600"
            >
              <FaWhatsapp size={23} />
            </a>
          </li>

          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=castillod159@gmail.com"
              target="_blank"
              className="text-gray-200 transition hover:text-teal-600"
              rel="noreferrer"
            >
              <SiGmail size={23} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
