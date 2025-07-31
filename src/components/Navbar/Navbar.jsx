import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

export default function Navbar() {
  const [oculto, setOculto] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  const fileUrl = process.env.PUBLIC_URL + "/CV - Daniel Castillo.pdf";

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setOculto(!oculto);

  const navLinks = [
    { href: "Home", label: "Inicio" },
    { href: "AboutMe", label: "Sobre Mí" },
    { href: "Projects", label: "Proyectos" },
    { href: "Contact", label: "Contacto" },
    { href: fileUrl, label: "CV", external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        scrolling ? "bg-black/80 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Marca */}
          <Link
            to="Home"
            smooth={true}
            duration={500}
            offset={-64}
            onClick={!oculto && toggleMenu}
            className="text-gray-200 text-lg font-semibold uppercase cursor-pointer"
          >
            CastilloCoder
          </Link>

          {/* Botón menú hamburguesa (solo visible en mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-200 hover:text-teal-600"
            aria-label="Abrir menú"
          >
            {oculto ? (
              <AiOutlineMenu size={25} />
            ) : (
              <AiOutlineClose size={25} />
            )}
          </button>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200 hover:text-teal-600 uppercase cursor-pointer transition"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="text-gray-200 hover:text-teal-600 uppercase cursor-pointer transition"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>

      {/* Navegación móvil */}
      {!oculto && (
        <div className="md:hidden bg-black/90 py-4 flex flex-col items-start px-6 space-y-4 transition-all duration-300">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-200 hover:text-teal-600 uppercase cursor-pointer transition"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={!oculto && toggleMenu}
                className="text-gray-200 hover:text-teal-600 uppercase cursor-pointer transition"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
