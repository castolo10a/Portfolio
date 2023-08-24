export default function ButtonDemo ({ path }) {
  return (
    <div>
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-6 md:px-2 py-2 mb-2 text-lg text-[#333] bg-gray-200 rounded-md md:rounded-full cursor-pointer transition-colors shadow-sm shadow-[#333] hover:bg-amber-400 hover:shadow-lg hover:shadow-gray-400/30 hover:text-[#333] md:w-auto md:mb-0"
      >
        <span className="mx-2">Visita el sitio →</span>
      </a>
    </div>
  )
}