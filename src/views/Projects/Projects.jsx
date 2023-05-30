import Project from "../../components/MyProjects/Project"
import ProjectGitHub from "../../ProjectGitHub.json"

export default function Projects () {

  const data = ProjectGitHub 
  return (
    <div className="flex flex-col bg-gray-800 w-full overflow-y-hidden">
      <h1 className="m-4 py-1 pt-6 text-5xl text-center md:text-left font-josefin underline underline-offset-8 underline-amber-400 text-amber-400 ">
        Proyectos
      </h1>

      {data.length
        ? data.map((project) => {
          const {
            titleProject,
            content,
            urlProject,
            urlGithub,
            titleTecnologies,
            contentTecnologies,
            image
          } = project
          return (
              <Project
                key={titleProject}
                title={titleProject}
                content={content}
                urlProject={urlProject}
                titleTech={titleTecnologies}
                contentTech={contentTecnologies}
                image={image}
                urlGithub={urlGithub}
              />
          )
        })
        : null}

    </div>
  )
}