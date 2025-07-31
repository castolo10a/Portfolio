import { Link } from "react-scroll";

const ButtonUniversal = ({
  text = "",
  icon = null,
  path = "#",
  className = "",
  isExternal = false,
  isScroll = false,
  isDownload = false,
  disabled = false,
}) => {
  const baseClasses =
    "flex flex-row items-center justify-center px-3 py-1 text-base text-gray-200 border border-solid rounded-xl transition-colors hover:bg-teal-600 md:w-auto md:mb-0";

  if (isScroll) {
    return (
      <Link
        to={path}
        smooth={true}
        duration={500}
        offset={-64}
        className="cursor-pointer"
      >
        <button disabled={disabled} className={`${baseClasses} ${className}`}>
          {text && <span className="px-2">{text}</span>}
          {icon}
        </button>
      </Link>
    );
  }

  if (isDownload) {
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = path;
      link.rel = "noreferrer";
      link.target = "_blank";
      link.click();
    };

    return (
      <button
        onClick={handleDownload}
        className={`${baseClasses} ${className}`}
        disabled={disabled}
      >
        {text && <span className="px-2">{text}</span>}
        {icon}
      </button>
    );
  }

  // Default: external or internal link
  return (
    <a
      href={path}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${className}`}
    >
      {text && <span className="px-2">{text}</span>}
      {icon}
    </a>
  );
};

export default ButtonUniversal;
