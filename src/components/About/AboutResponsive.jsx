import { Link } from 'react-router-dom'
import {FaRegFilePdf} from "react-icons/fa"
import profile from '../../assets/daniel.png'
import Button from '../Buttons/Button/Button'

function AboutResponsive () {
  return (
    <div className="md:hidden flex flex-col items-center h-screen w-screen bg-gray-800 overflow-x-hidden">
      <div className="flex flex-col items-center p-8 max-w-sm">
        <h1 className="underline underline-offset-8 my-6 text-4xl font-josefin underline-amber-400 text-amber-400">
          Sobre mí
        </h1>
        <div className="flex flex-col">
          <img className='rounded-lg' src={profile} alt={'profile '} />
          <div className='flex flex-col items-center'>
            <h1 className="text-slate-500 italic font-josefin text-base text-center my-4">
            ``Abriendo puertas hacia un mundo de posibilidades.``
            </h1>
            <a
            href={`${process.env.PUBLIC_URL}/CV - Daniel Castillo.pdf`}
            download="CV - Daniel Castillo.pdf"
            target="_blank" rel="noopener noreferrer"
            aria-label="Click to download my CV"
            >
              <FaRegFilePdf 
                className="text-amber-400 "
                size={34}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="p-8 rounded-lg">
        <div className="flex flex-col items-center">
            <h1 className="font-serif text-center text-4xl text-gray-200 mb-2">
                Hola, de nuevo. ¡Sientete libre de explorar mi portfolio!
            </h1>
            <p className="text-justify tracking-wide text-lg text-amber-400 font-mukta">
                Mi pasión por el desarrollo web nació durante mis estudios en Administración de Empresas, donde descubrí el fascinante mundo digital.
                Aunque no cuento con experiencia laboral en desarrollo, he participado activamente en proyectos académicos, donde he demostrado mi dedicación y habilidades en la creación de aplicaciones web.
                Mi enfoque integral, combinando conocimientos en Administración de Empresas y desarrollo web, me permite abordar desafíos desde una perspectiva única y versátil.
                Mi objetivo es ayudar a las empresas a crecer y prosperar a través de la tecnología y la innovación. Estoy emocionado por construir experiencias digitales cautivadoras y funcionales que impulsen el éxito empresarial.
                ¡Unámonos y creemos algo sorprendente juntos! Si buscas un desarrollador web comprometido, creativo y dispuesto a aprender,<Link className="underline after:content-['_↗'] ..." to='/Contact'>¡no dudes en contactarme!</Link>
            </p>
          <div className="flex flex-row justify-between items-center pb-4 pt-10">
            <Button path={'/Projects'} text={'Mis proyectos'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutResponsive