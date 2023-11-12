export default function Options({action, scrolling}){
  const fileUrl = process.env.PUBLIC_URL + '/CV - Daniel Castillo.pdf';

    return (
        <ul className={`${
          scrolling ? "bg-black bg-opacity-80" : "bg-transparent"
        } transition duration-300 ease-in-out w-full md:flex md:items-center md:gap-6 text-sm`}>
            <li className="p-2" onClick={action}>
              <a
                className="text-gray-200 transition hover:text-gray-500/75 uppercase"
                href="/#Home"
              >
                Inicio
              </a>
            </li>

            <li className="p-2" onClick={action}>
              <a
                className="text-gray-200 transition hover:text-gray-500/75 uppercase"
                href="/#AboutMe"
              >
                Sobre Mí
              </a>
            </li>

            <li className="p-2" onClick={action}>
              <a
                className="text-gray-200 transition hover:text-gray-500/75 uppercase"
                href="/#Projects"
              >
                Proyectos
              </a>
            </li>

            <li className="p-2" onClick={action}>
              <a
                className="text-gray-200 transition hover:text-gray-500/75 uppercase"
                href="/#Contact"
              >
                Contacto
              </a>
            </li>

            <li className="p-2" onClick={action}>
              <a
                className="text-gray-200 transition hover:text-gray-500/75 uppercase"
                href={fileUrl}
                rel='noreferrer'
                target='_blank'
              >
                CV
              </a>
            </li>
        </ul>
    )
}