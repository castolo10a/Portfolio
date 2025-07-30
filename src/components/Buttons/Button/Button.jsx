import { Link } from "react-scroll";

const Button = ({ path, text }) => {
  return (
    <Link to={path} smooth={true} duration={500}>
      <button className="px-3 py-1 text-base text-gray-200 bg-transparent border border-solid rounded-xl transition-colors hover:bg-gray-500/75 md:w-auto md:mb-0">
        {text}
      </button>
    </Link>
  );
};

export default Button;
