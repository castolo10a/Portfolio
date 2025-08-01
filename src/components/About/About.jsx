import {
  DiCss3,
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiTrello,
  DiVisualstudio,
  DiWindows,
} from "react-icons/di";
import {
  SiGit,
  SiInsomnia,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiClickup,
} from "react-icons/si";
import { FaRegFilePdf } from "react-icons/fa";
import ButtonUniversal from "../ButtonUniversal/ButtonUniversal";

export default function About() {
  const fileUrl = process.env.PUBLIC_URL + "/CV - Daniel Castillo.pdf";

  return (
    <section id="AboutMe" className="py-8 px-4 bg-white text-black">
      <div className="mx-auto w-full max-w-3xl text-center">
        <h2 className="text-gray-700 text-3xl font-bold underline underline-offset-8 mb-8">
          Sobre Mí
        </h2>

        <p className="mt-4 text-gray-700 text-center md:text-center space-y-4">
          <span className="block">
            Soy un desarrollador frontend con enfoque en React y React Native,
            con mas de dos años de experiencia construyendo productos digitales eficientes y
            centrados en el usuario.
          </span>

          <span className="block">
            He trabajado en proyectos freelance y en equipos colaborativos,
            desarrollando desde landing pages hasta aplicaciones móviles,
            siempre aplicando buenas prácticas de código, accesibilidad y diseño
            responsivo.
          </span>

          <span className="block">
            Me motiva aprender constantemente, mantenerme actualizado con el
            ecosistema frontend y aportar en proyectos donde la calidad técnica
            y la experiencia de usuario sean prioridad.
          </span>
        </p>

        <h3 className="text-gray-700 text-xl font-semibold mt-10 mb-4 text-left">
          Tecnologías y herramientas que utilizo:
        </h3>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 justify-items-center text-gray-700 text-2xl">
          <DiHtml5 title="HTML5" />
          <DiCss3 title="CSS3" />
          <DiJsBadge title="JavaScript" />
          <SiTypescript title="TypeScript" />
          <DiReact title="React" />
          <SiNextdotjs title="Next.js" />
          <SiRedux title="Redux" />
          <SiTailwindcss title="Tailwind CSS" />
          <SiPostman title="Postman" />
          <SiInsomnia title="Insomnia" />
          <SiGit title="Git" />
          <DiGithubBadge title="GitHub" />
          <DiVisualstudio title="VSCode" />
          <DiWindows title="Windows" />
          <DiTrello title="Trello" />
          <SiClickup title="ClickUp" />
        </div>

        <div className="flex flex-row items-center justify-center gap-4 mt-12">
          <ButtonUniversal
            path="Contact"
            text="Contacto"
            className="flex flex-row items-center px-3 py-1 text-base text-gray-200 bg-gray-500/75 border border-solid rounded-xl transition-colors hover:bg-teal-600 md:w-auto md:mb-0"
            isScroll
          />
          <ButtonUniversal
            path={fileUrl}
            text="CV"
            icon={<FaRegFilePdf size={17} />}
            className="flex flex-row items-center px-3 py-1 text-base text-gray-200 bg-gray-500/75 border border-solid rounded-xl transition-colors hover:bg-teal-600 md:w-auto md:mb-0"
            isDownload
          />
        </div>
      </div>
    </section>
  );
}
