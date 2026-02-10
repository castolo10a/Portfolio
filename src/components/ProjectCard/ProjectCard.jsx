import { ICONS_BY_TECH } from "../../constants/iconsByTech";
import { IMAGE_BY_PROJECT } from "../../constants/imageByProjects";
import { SiGithub } from "react-icons/si";
import ButtonUniversal from "../ButtonUniversal/ButtonUniversal";

export default function ProjectCard({
  title,
  badge,
  content,
  urlProject,
  titleTech,
  contentTech,
  image,
  urlGithub,
}) {
  const imagenByProject = IMAGE_BY_PROJECT.find(
    (project) => project.name === image.alt
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 border border-gray-500/75 rounded-xl p-4 bg-gray-900 shadow-md">
      {/* Imagen */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <img
          src={imagenByProject?.src}
          alt={image.alt}
          className="rounded-lg max-w-full h-auto"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between w-full md:w-2/3 text-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl underline underline-offset-4 text-teal-400">
              {title}
            </h2>
          </div>
          <span className="ml-4 px-2 py-1 text-xs rounded-full bg-teal-600 text-white whitespace-nowrap h-fit">
            {badge}
          </span>
        </div>

        <p className="text-justify tracking-wide">{content}</p>

        {/* Tecnologías */}
        <div className="mt-4">
          <h3 className="text-lg text-teal-300">{titleTech}</h3>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {contentTech.map((tech) => {
              const iconByTech = ICONS_BY_TECH.find(
                (t) => t.name === tech.title
              );
              return (
                <a
                  key={tech.title}
                  href={tech.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-teal-400 transition-colors"
                >
                  {iconByTech?.icon}
                  <span>{tech.title}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-2 mt-6">
          <ButtonUniversal
            path={urlProject}
            text="Visita el sitio →"
            isExternal
          />
          <ButtonUniversal
            path={urlGithub}
            icon={<SiGithub size={24} />}
            isExternal
          />
        </div>
      </div>
    </div>
  );
}
