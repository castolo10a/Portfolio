import {DiCss3, DiGithubBadge, DiHtml5, DiJsBadge, DiNodejsSmall, DiPostgresql, DiReact, DiTrello, DiVisualstudio, DiWindows} from 'react-icons/di'
import { SiExpress, SiGit, SiInsomnia, SiNextdotjs ,SiRedux, SiSequelize, SiTailwindcss, SiTypescript, SiPostman, SiClickup } from 'react-icons/si'
import OtherButton from '../Buttons/OtherButton/OtherButton'
import ButtonCV from '../Buttons/ButtonCV/ButtonCV'

export default function About () {
    const fileUrl = process.env.PUBLIC_URL + '/CV - Daniel Castillo.pdf';

    return (
        <section id='AboutMe' className="py-8 md:h-screen px-4">
            <div className="mx-auto w-full md:max-w-2xl text-center">
                <h2 className="text-gray-500/75 pt-8 pb-4 text-center text-2xl uppercase font-bold underline underline-offset-[15px]">Sobre Mí</h2>

                <p className="mt-4 text-black text-center md:text-center">
                Soy Daniel Castillo, un desarrollador apasionado con experiencia en React, React Native, TypeScript y JavaScript. Mi carrera combina una sólida formación en administración de empresas con una profunda fascinación por la tecnología. Tras completar un bootcamp en Henry y actualmente estar en la fase final de mis prácticas en el Servicio Nacional de Aprendizaje (SENA), he trabajado en el desarrollo de aplicaciones móviles para clientes internacionales, aplicando mis habilidades técnicas para crear soluciones digitales efectivas. <br /><br />

                Mi experiencia práctica en proyectos móviles y web me ha permitido mejorar mi capacidad para resolver problemas técnicos y colaborar en equipos ágiles. Estoy entusiasmado con el potencial del desarrollo móvil y comprometido a seguir aprendiendo y creciendo en este campo. Con una sólida base en tecnología y una perspectiva empresarial, estoy listo para contribuir a proyectos innovadores y construir el futuro digital de manera colaborativa.
                </p>
                <h1 className="text-gray-500/75 pt-8 pb-4 text-left uppercase font-bold">Tecnologías y Herramientas que Conozco:</h1>
                <div className="flex flex-row justify-start md:gap-3">
                    <DiHtml5 size={30}/>
                    <DiCss3 size={30}/>
                    <SiTypescript size={30}/>
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
                    <SiPostman size={30}/>
                    <DiWindows size={30}/>
                    <DiVisualstudio size={30}/>
                    <DiTrello size={30}/>
                    <SiClickup size={30}/>
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