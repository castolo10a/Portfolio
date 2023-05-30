import MyProjects from "./MyProjects"
import MyProjectsResponsive from "./MyProjectsResponsive"

function Project ({
  title,
  content,
  urlProject,
  titleTech,
  contentTech,
  image,
  urlGithub
}) {
  return (
    <div className="flex justify-between">
      <MyProjects title={title} content={content} urlProject={urlProject} titleTech={titleTech} contentTech={contentTech} image={image} urlGithub={urlGithub}/>
      <MyProjectsResponsive title={title} content={content} urlProject={urlProject} titleTech={titleTech} contentTech={contentTech} image={image} urlGithub={urlGithub}/>
    </div>
  )
}

export default Project