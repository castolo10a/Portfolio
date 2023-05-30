import { Link } from 'react-router-dom'
import profile from '../../assets/daniel.png'
import Button from '../Buttons/Button/Button'

function About () {
  return (
    <div className="hidden md:grid md:grid-cols-7 md:gap-4 md:place-content-center md:place-items-center w-full bg-gray-800 overflow-x-hidden">
      <div className="col-start-1 col-end-4 m-4 max-w-sm">
        <div className="flex flex-col">
          <img className='rounded-lg' src={profile} alt={'profile '} />
          <div>
            <h1 className="text-slate-500 italic font-josefin text-base text-center">
              ``Abriendo puertas hacia un mundo de posibilidades.``
            </h1>
          </div>
        </div>
      </div>
      <div className="md:col-start-4 md:col-end-8 m-5 mr-14 p-10 rounded-lg">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h1 className="underline underline-offset-8 mb-8 text-4xl font-josefin underline-amber-400 text-amber-400 ">
              Sobre mí
            </h1>
            <div className="mb-8">
              <Button path={'/Projects'} text={'Mis proyectos'} />
            </div>
          </div>
          <div>
            <h1 className="font-serif text-left text-6xl text-gray-200 mb-3">
                Hola, de nuevo. ¡Sientete libre de explorar mi portfolio!
            </h1>
            <p className="text-justify tracking-wide text-lg text-amber-400 font-mukta">
                Mi pasión por el desarrollo web nació durante mis estudios en Administración de Empresas, donde descubrí el fascinante mundo digital.
                Aunque no cuento con experiencia laboral en desarrollo, he participado activamente en proyectos académicos, donde he demostrado mi dedicación y habilidades en la creación de aplicaciones web.
                Mi enfoque integral, combinando conocimientos en Administración de Empresas y desarrollo web, me permite abordar desafíos desde una perspectiva única y versátil.
                Mi objetivo es ayudar a las empresas a crecer y prosperar a través de la tecnología y la innovación. Estoy emocionado por construir experiencias digitales cautivadoras y funcionales que impulsen el éxito empresarial.
                ¡Unámonos y creemos algo sorprendente juntos! Si buscas un desarrollador web comprometido, creativo y dispuesto a aprender,<Link className="underline after:content-['_↗'] ..." to='/Contact'>¡no dudes en contactarme!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About