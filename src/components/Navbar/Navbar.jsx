import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Options from "./Options";

export default function Navbar() {
  const [oculto, setOculto] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  const action = () => {
    setOculto(!oculto);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${
      scrolling ? "bg-black bg-opacity-80" : "bg-transparent"
    } transition duration-300 ease-in-out fixed top-0 left-0 w-full`}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:justify-between md:gap-12">
            <a className="text-teal-600" href="#Home">
              <span className="text-gray-200 uppercase">CastilloCoder</span>
            </a>
            {/* Mostrar las opciones en dispositivos 'md' y mayores */}
            <div className="hidden md:flex space-x-4 text-gray-200">
              <Options />
            </div>
          </div>

          <div className="block md:hidden">
            <button onClick={action} className="rounded text-gray-200">
              {oculto ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
            </button>
            {/* Mostrar las opciones en dispositivos menores que 'md' */}
            <div
              className={`${
                oculto
                  ? "hidden"
                  : "mt-4 absolute right-0 z-[1] min-w-full font-sans font-bold text-lg"
              }`}
            >
              <Options action={action} scrolling={scrolling}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
