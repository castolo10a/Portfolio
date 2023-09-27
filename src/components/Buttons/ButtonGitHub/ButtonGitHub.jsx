import { SiGithub } from 'react-icons/si'

export default function ButtonGithub ({ path }) {
  return (
    <div className='py-2'>
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-center px-3 py-1 text-base text-gray-200 bg-gray-500/75 border border-solid rounded-xl transition-colors hover:bg-black hover:bg-opacity-20 hover:text-gray-200 md:w-auto md:mb-0"
      >
        <div className='m-1'><SiGithub size={27}/></div>
      </a>
    </div>
  )
}