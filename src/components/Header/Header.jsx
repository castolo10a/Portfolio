import profile from "../../assets/images/ProfilePic.webp";
import Navbar from "../Navbar/Navbar";
import Button from "../Buttons/Button/Button";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Header() {
  return (
    <section id="Home" className="bg-setup bg-cover h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center py-24 md:py-32 h-screen">
        <div className="w-40 h-40">
          <img src={profile} alt="perfil" />
        </div>
        <div className="py-4 text-center">
          <h2 className="text-gray-200 text-2xl">DANIEL CASTILLO</h2>
          <h2 className="text-gray-200">DESARROLLADOR FRONTEND</h2>
        </div>
        <div className="flex flex-row py-4 space-x-4">
          <Button path="/#AboutMe" text="Sobre Mí" />
          <Button path="/#Projects" text="Proyectos" />
        </div>
        <ul className="flex flex-row py-4 gap-4 md:gap-6">
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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=castillod159@gmail.com"
              target="_blank"
              className="text-gray-200 transition hover:text-gray-500/75"
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
