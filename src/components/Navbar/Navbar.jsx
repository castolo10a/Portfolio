import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { NAV_LINKS } from "../../constants/content";

const SCROLL_OFFSET = -72;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/90 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          to="Home"
          smooth
          duration={500}
          onClick={close}
          className="cursor-pointer text-sm font-semibold tracking-tight"
        >
          Daniel Castillo
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              spy
              duration={500}
              offset={SCROLL_OFFSET}
              activeClass="!text-ink"
              className="cursor-pointer text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <HiX size={22} /> : <HiOutlineMenuAlt4 size={22} />}
        </button>
      </div>

      {open && (
        <nav className="container-page flex flex-col pb-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={SCROLL_OFFSET}
              onClick={close}
              className="cursor-pointer border-b border-line py-3 text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
