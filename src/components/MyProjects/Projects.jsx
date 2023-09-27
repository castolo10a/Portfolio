import Project from "../../components/MyProjects/Project"
import ProjectGitHub from "../../ProjectGitHub.json"

export default function Projects () {

  const data = ProjectGitHub 
  return (
    <div id='Projects' className="py-8 flex flex-col w-full bg-colorSection">
      <h1 className="text-gray-500/75 py-8 text-center text-2xl uppercase font-bold underline underline-offset-[15px]">
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