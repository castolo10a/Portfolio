import Button from "../Buttons/Button/Button"
import { ICONS_BY_TECH } from "../../constants/iconsByTech"
import { IMAGE_BY_PROJECT } from "../../constants/imageByProjects"
import ButtonGithub from "../Buttons/ButtonGitHub/ButtonGitHub"

function MyProjects ({
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
    <div className="hidden md:flex">
      <div className="flex w-2/6 m-4 mr-10 py-14">
        <img
          src={imagenByProject.src}
          alt={image.alt}
          className="rounded-lg"
        />
      </div>
      <div className="container flex flex-col justify-center">
        <div className="flex justify-between items-center py-2 pb-3">
          <div>
            <h1 className="text-2xl underline underline-offset-4 font-josefin text-amber-400">
              {title}
            </h1>
          </div>
          <div className="flex flex-row-reverse pr-4 ">
            <ButtonGithub
              path={urlGithub}
              window={'_blank'}
              relation={'noopener noreferrer'}
            />
            <div className="pr-4">
              <Button
                text={'Ir a la web'}
                path={urlProject}
                window={'_blank'}
                relation={'noopener noreferrer'}
              />
            </div>
          </div>
        </div>
        <p className="text-justify tracking-wide font-mukta pr-4 indent-4 text-gray-200">
          {content}
        </p>
        <div>
          <h1 className="text-lg pt-3 font-josefin text-amber-400">
            {titleTech}
          </h1>
          <div className="flex justify-center text-sm ">
            {contentTech.length
              ? contentTech.map((content) => {
                const iconByTech = ICONS_BY_TECH.find(
                  (title) => title.name === content.title
                )
                return (
                    <div
                      key={content.title}
                      className="flex items-center pr-2 transition-colors text-gray-200 hover:text-amber-400"
                    >
                      {iconByTech?.icon}
                      <a
                        href={content.href}
                        target={'_blank'}
                        rel="noreferrer"
                        className="px-1 selection:bg-green-400 selection:text-green-900"
                      >
                        {content.title}
                      </a>
                    </div>
                )
              })
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects