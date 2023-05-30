import { Link } from "react-router-dom";


const Menu = () => {
    return (
      <div className="hidden md:flex md:visible md:flex-row font-mukta text-lg ">
        <Link to='/'>
          <button className="px-4 py-2 text-gray-200 cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
              Bienvenida
          </button>
        </Link>
        <Link to='About'>
          <button className="px-4 py-2 text-gray-200 cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
               Sobre mí
          </button>
        </Link>
        <Link to='/Projects'>
          <button className="px-4 py-2 text-gray-200 cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
              Proyectos
          </button>
        </Link>
        <Link to='/Contact'>
          <button className="px-4 py-2 text-gray-200 cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
              Contáctame
          </button>
        </Link>
      </div>
    )
  }
  
  export default Menu;