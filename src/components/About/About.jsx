import {DiCss3, DiGithubBadge, DiHtml5, DiJsBadge, DiMongodb, DiMysql, DiNodejsSmall, DiPostgresql, DiReact, DiTrello, DiVisualstudio, DiWindows} from 'react-icons/di'
import { SiExpress, SiGit, SiInsomnia, SiRedux, SiSequelize, SiTailwindcss } from 'react-icons/si'
import OtherButton from '../Buttons/OtherButton/OtherButton'
import ButtonCV from '../Buttons/ButtonCV/ButtonCV'

export default function About () {
    const fileUrl = process.env.PUBLIC_URL + '/CV - Daniel Castillo.pdf';

    return (
        <section id='AboutMe' className="py-8 md:h-screen px-4">
            <div className="mx-auto w-full md:max-w-2xl text-center">
                <h2 className="text-gray-500/75 py-8 text-center text-2xl uppercase font-bold underline underline-offset-[15px]">Sobre Mí</h2>

                <p className="mt-4 text-black text-center md:text-left">
                    Soy Daniel Castillo. Desarrollador Web Full Stack y Administrador de Empresas apasionado por la tecnología y los negocios. Mi viaje comenzó durante mis estudios en Administración de Empresas, donde descubrí la fascinante intersección entre estos dos mundos. A través de proyectos académicos, demostré mi dedicación para crear aplicaciones web excepcionales y funcionales. <br /> <br /> Actualmente, estoy ampliando mis habilidades técnicas como estudiante del Servicio Nacional de Aprendizaje (SENA), donde curso un programa técnico titulado en Programación de Aplicaciones para Dispositivos Móviles. Mi objetivo es fusionar esta formación con mi experiencia empresarial para crear soluciones digitales innovadoras que impulsen el crecimiento de las empresas. Siempre estoy dispuesto a aprender y colaborar en emocionantes proyectos. ¡Espero poder conectarme contigo y construir el futuro juntos!
                </p>
                <h1 className="text-gray-500/75 pt-8 pb-4 text-left uppercase font-bold">Tecnologías y Herramientas que Conozco:</h1>
                <div className="flex flex-row justify-start md:gap-1">
                    <DiHtml5 size={30}/>
                    <DiCss3 size={30}/>
                    <DiJsBadge size={30}/>
                    <DiReact size={30}/>
                    <SiRedux size={30}/>
                    <SiTailwindcss size={30}/>
                    <DiNodejsSmall size={30}/>
                    <SiExpress size={30}/>
                    <SiSequelize size={30}/>
                    <DiPostgresql size={30}/>
                    <DiMysql size={30}/>
                    <DiMongodb size={30}/>
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