import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const MenuResponsive = () => {
  const [oculto, setOculto] = useState(true);

  const action = () => {
    oculto ? setOculto(false) : setOculto(true)
  }

  return (
    <div className="md:hidden flex justify-center">
      <button aria-label="menu">
        <AiOutlineMenu
          className="text-gray-200 transition-colors duration-75 hover:text-amber-400"
          size={34}
          onClick={action}
        />
      </button>
      <div
        hidden={oculto}
        className="absolute top-[8vh] -right-0 z-[1] min-w-full py-16 xs:px-[40vw] bg-gray-800 md:flex md:visible md:flex-row font-mukta text-lg"
      >
        <ul className="text-center bg-gray-800">
          <Link to='/'>
            <li onClick={action} className="py-2 text-gray-200 cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
              Bienvenida
            </li>
          </Link>
          <Link to='/About'>
            <li onClick={action} className="py-2 text-gray-200 cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
              Sobre mí
            </li>
          </Link>
          <Link to='/Projects'>
            <li onClick={action} className="py-2 text-gray-200 cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
              Proyectos
            </li>
          </Link>
          <Link to='/Contact'>
            <li onClick={action} className="py-2 text-gray-200 cursor-pointer hover:underline hover:underline-offset-[1em] hover:underline-amber-400 hover:text-amber-400 transition-colors duration-300">
              Contáctame
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default MenuResponsive