import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { CONTACT } from "../../constants/content";

const LINKS = [
  { href: CONTACT.linkedin, label: "LinkedIn", icon: <FaLinkedinIn /> },
  { href: CONTACT.whatsapp, label: "WhatsApp", icon: <FaWhatsapp /> },
  { href: `mailto:${CONTACT.email}`, label: "Correo", icon: <FiMail /> },];

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-5 text-lg text-muted ${className}`}>
      {LINKS.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="transition-colors hover:text-ink"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
