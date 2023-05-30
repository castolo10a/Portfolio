import { SiGithub, SiLinkedin, SiMicrosoftoutlook, SiWhatsapp } from 'react-icons/si'
import { AiOutlineMinus } from 'react-icons/ai'
import Button from '../../components/Buttons/Button/Button'

export default function Home () {
  return (
    <div className="bg-gray-800 flex flex-col md:grid md:grid-cols-6 md:gap-4 md:place-content-center md:place-items-center m-auto">
      <div className="flex  flex-col md:block md:col-start-1 md:col-end-5 p-7">
        <div className="mb-2">
          <div className="mb-6">
            <h1 className="pb-2 text-left mb-8 text-6xl font-josefin underline underline-offset-8 underline-amber-400 text-amber-400">Hola</h1>
          </div>
          <h1 className="font-serif text-left text-8xl text-gray-200 my-4">
            Soy Daniel Castillo
          </h1>
          <h1 className="font-serif text-left text-6xl  text-amber-400 my-4">
            Desarrollador Web FullStack
            y Administrador de Empresas
          </h1>
        </div>
        <div className="my-4">
          <p className="text-left text-gray-200">
          Explorando el apasionante mundo del desarrollo web y la administración de empresas, 
          inicio mi camino en estas dos disciplinas complementarias. A través de mis estudios y proyectos académicos,
          he comenzado a trazar mi rumbo hacia el éxito. Con dedicación y entusiasmo, busco crear soluciones digitales 
          que resuelvan problemas reales y generen un impacto positivo. Estoy ansioso por seguir aprendiendo y creciendo 
          en este emocionante viaje hacia nuevas oportunidades y logros.
          </p>
        </div>
        <div className="flex flex-row-reverse justify-between md:flex-row md:justify-start items-center">
          <div className="py-2">
            <Button text={'Sobre mí'} path={'/About'} />
          </div>
          <div className="hidden md:block lg:ml-9">
            <AiOutlineMinus
              className="text-gray-200 transition-colors duration-75 hover:text-amber-400"
              size={30}
            />
          </div>
          <div className="flex flex-row lg:ml-4">
            <div>
              <a
                href="https://github.com/castolo10a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Click to see my projects on Github"
              >
                <SiGithub
                  className="text-gray-200 mx-3 md:mx-4 transition-colors duration-75 hover:text-amber-400"
                  size={34}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/danielcastillo97/"
                target="_blank"
                rel="noreferrer"
                aria-label="
                Click to see more about me on LinkedIn"
              >
                <SiLinkedin
                  className="text-gray-200 mx-3 md:mx-4 transition-colors duration-75 hover:text-amber-400"
                  size={34}
                />
              </a>
            </div>
            <div>
              <a
                href="http://wa.me/573116984474#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Click to contact me by Whatsapp"
              >
                <SiWhatsapp
                  className="text-gray-200 mx-3 md:mx-4 transition-colors duration-75 hover:text-amber-400"
                  size={34}
                />
              </a>
            </div>
            <div>
              <a
                href="mailto:daniel.302009@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Click to contact me by email"
              >
                <SiMicrosoftoutlook 
                className="text-gray-200 mx-3 md:mx-4 transition-colors duration-75 hover:text-amber-400"
                size={34}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}