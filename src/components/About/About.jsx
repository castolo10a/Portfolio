import {DiCss3, DiGithubBadge, DiHtml5, DiJsBadge, DiNodejsSmall, DiPostgresql, DiReact, DiTrello, DiVisualstudio, DiWindows} from 'react-icons/di'
import { SiExpress, SiGit, SiInsomnia, SiNextdotjs ,SiRedux, SiSequelize, SiTailwindcss } from 'react-icons/si'
import OtherButton from '../Buttons/OtherButton/OtherButton'
import ButtonCV from '../Buttons/ButtonCV/ButtonCV'

export default function About () {
    const fileUrl = process.env.PUBLIC_URL + '/CV - Daniel Castillo.pdf';

    return (
        <section id='AboutMe' className="py-8 md:h-screen px-4">
            <div className="mx-auto w-full md:max-w-2xl text-center">
                <h2 className="text-gray-500/75 py-8 text-center text-2xl uppercase font-bold underline underline-offset-[15px]">Sobre Mí</h2>

                <p className="mt-4 text-black text-center md:text-left">
                Soy Daniel Castillo, un apasionado Desarrollador Web Full Stack y Administrador de Empresas con una profunda fascinación por la tecnología y los negocios. Durante mi formación en el bootcamp de Henry, certifiqué mi habilidad para crear aplicaciones web excepcionales y funcionales. Actualmente, me encuentro en la etapa final de mis prácticas como estudiante del Servicio Nacional de Aprendizaje (SENA), donde estoy completando un programa técnico en Programación de Aplicaciones para Dispositivos Móviles. He tenido el privilegio de trabajar en un proyecto móvil para un cliente importante en Estados Unidos, donde he aplicado mi experiencia empresarial y mis habilidades técnicas para desarrollar soluciones digitales innovadoras. Mi crecimiento personal y profesional ha sido significativo durante este tiempo. Estoy entusiasmado con las oportunidades que el desarrollo móvil ofrece y estoy comprometido a seguir aprendiendo y creciendo en este campo dinámico. Espero poder contribuir con mi pasión por la tecnología y mi experiencia empresarial para construir el futuro de manera colaborativa.¡Estoy emocionado por lo que está por venir y ansioso por explorar nuevas oportunidades en el desarrollo móvil!
                </p>
                <h1 className="text-gray-500/75 pt-8 pb-4 text-left uppercase font-bold">Tecnologías y Herramientas que Conozco:</h1>
                <div className="flex flex-row justify-start md:gap-1">
                    <DiHtml5 size={30}/>
                    <DiCss3 size={30}/>
                    <DiJsBadge size={30}/>
                    <DiReact size={30}/>
                    <SiNextdotjs size={30}/>
                    <SiRedux size={30}/>
                    <SiTailwindcss size={30}/>
                    <DiNodejsSmall size={30}/>
                    <SiExpress size={30}/>
                    <SiSequelize size={30}/>
                    <DiPostgresql size={30}/>
                    <SiInsomnia size={30}/>
                    <DiWindows size={30}/>
                    <DiVisualstudio size={30}/>
                    <DiTrello size={30}/>
                    <DiGithubBadge size={30}/>
                    <SiGit size={30}/>
                </div>
                <div className='flex flex-row items-center justify-center py-8 space-x-4'>
                    <OtherButton path='/#Contact' text='Contacto' className='px-3 py-1 text-base text-gray-200 bg-gray-500/75 border border-solid rounded-xl transition-colors hover:bg-black hover:bg-opacity-20 hover:text-black md:w-auto md:mb-0'/>
                    <ButtonCV path={fileUrl} />
                </div>
            </div>
        </section>
    )
}