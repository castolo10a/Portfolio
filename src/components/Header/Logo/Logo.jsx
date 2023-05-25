import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className="flex">
      <Link to='/'>
        <button className="text-gray-200 font-serif text-3xl transition-colors delay-50 hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-900 hover:text-transparent hover:bg-clip-text hover:animate-text">
          DC
        </button>
      </Link>
    </div>
  )
}

export default Logo