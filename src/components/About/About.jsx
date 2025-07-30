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
    <section id="AboutMe" className="py-16 px-4 bg-white text-black">
      <div className="mx-auto w-full max-w-3xl text-center">
        <h2 className="text-gray-700 text-3xl font-bold uppercase underline underline-offset-[12px] mb-8">
          Sobre Mí
        </h2>

        <p className="mt-4 text-black text-center md:text-center space-y-4">
          <span className="block">
            Soy desarrollador frontend con más de dos años de experiencia
            creando aplicaciones web y móviles. Me especializo en construir
            interfaces modernas, rápidas y responsivas utilizando tecnologías
            como React, React Native, TypeScript y Tailwind CSS.
          </span>

          <span className="block">
            He trabajado en proyectos freelance y colaborativos para distintos
            tipos de clientes, enfocándome siempre en escribir código limpio,
            reutilizable y orientado a una excelente experiencia de usuario.
            Domino la integración de APIs, el consumo de servicios externos y la
            adaptación de diseños UI/UX a distintos dispositivos.
          </span>

          <span className="block">
            Me gusta mantenerme actualizado con las últimas tendencias del
            desarrollo frontend, trabajar en equipo bajo metodologías ágiles y
            asumir nuevos retos que me permitan seguir creciendo
            profesionalmente.
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
            className="flex flex-row items-center px-3 py-1 text-base text-gray-200 bg-gray-500/75 border border-solid rounded-xl transition-colors hover:bg-black hover:bg-opacity-20 hover:text-black md:w-auto md:mb-0"
            isScroll
          />
          <ButtonUniversal
            path={fileUrl}
            text="CV"
            icon={<FaRegFilePdf size={17} />}
            className="flex flex-row items-center px-3 py-1 text-base text-gray-200 bg-gray-500/75 border border-solid rounded-xl transition-colors hover:bg-black hover:bg-opacity-20 hover:text-black md:w-auto md:mb-0"
            isDownload
          />
        </div>
      </div>
    </section>
  );
}
