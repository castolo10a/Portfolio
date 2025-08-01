import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectGitHub from "../../ProjectGitHub.json";

export default function Projects() {
  const data = ProjectGitHub;

  return (
    <section id="Projects" className="py-8 px-4 bg-colorSection">
      <h2 className="text-center text-3xl font-bold text-gray-200 underline underline-offset-8 mb-10">
        Proyectos
      </h2>

      <div className="space-y-8 max-w-6xl mx-auto">
        {data.map((project) => (
          <ProjectCard
            key={project.titleProject}
            title={project.titleProject}
            badge={project.badge}
            content={project.content}
            urlProject={project.urlProject}
            urlGithub={project.urlGithub}
            titleTech={project.titleTecnologies}
            contentTech={project.contentTecnologies}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
