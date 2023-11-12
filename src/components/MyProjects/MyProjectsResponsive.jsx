import { ICONS_BY_TECH } from "../../constants/iconsByTech"
import { IMAGE_BY_PROJECT } from "../../constants/imageByProjects"
import ButtonGithub from "../Buttons/ButtonGitHub/ButtonGitHub"
import ButtonDemo from "../Buttons/ButtonDemo/ButtonDemo"

function ProyectoResponsive ({
  title,
  content,
  urlProject,
  titleTech,
  contentTech,
  image,
  urlGithub
}) {
  const imagenByProject = IMAGE_BY_PROJECT.find(
    (project) => project.name === image.alt
  )
  return (
    <div className="flex flex-col max-w-full md:hidden border border-solid border-gray-500/75 rounded-xl px-2">
      <div className="flex flex-col items-center px-2 py-2">
        <h1 className="text-2xl underline underline-offset-4 text-gray-500/75">
          {title}
        </h1>
        <div className="my-4">
          <img
            src={imagenByProject.src}
            alt={image.alt}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-center tracking-wide px-2 indent-4 text-gray-200">
          {content}
        </p>
        <div className="flex flex-col items-center">
          <h1 className="text-xl text-center pt-3 text-gray-500/75">
            {titleTech}
          </h1>
          <div className="flex flex-wrap justify-center text-sm py-2 px-4">
            {contentTech.length
              ? contentTech.map((content) => {
                const iconByTech = ICONS_BY_TECH.find(
                  (title) => title.name === content.title
                )
                return (
                    <div
                      key={content.title}
                      className="flex items-center pr-2  transition-colors text-gray-200 hover:text-gray-500/75"
                    >
                      {iconByTech?.icon}
                      <a
                        href={content.href}
                        target={'_blank'}
                        rel="noreferrer"
                        className="px-1"
                      >
                        {content.title}
                      </a>
                    </div>
                )
              })
              : null}
          </div>
        </div>
        <div className="py-2 px-4">
          <ButtonDemo
            path={urlProject}
          />
          <ButtonGithub
            path={urlGithub}
          />
        </div>
      </div>
    </div>
  )
}

export default ProyectoResponsive