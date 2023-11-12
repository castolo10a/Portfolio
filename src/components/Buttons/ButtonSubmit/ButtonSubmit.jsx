import {FaTelegramPlane} from 'react-icons/fa'

export default function ButtonSubmit ({ status }) {
    return (
      <div>
        <button
          className="flex flex-row px-3 py-1 text-base text-gray-200 bg-gray-500/75 border border-solid rounded-xl transition-colors hover:bg-black hover:bg-opacity-20 hover:text-black md:w-auto md:mb-0"
          disabled={status}
        >
          <span className='px-2'>ENVIAR</span>
          <FaTelegramPlane size={25} />
        </button>
      </div>
    )
  }