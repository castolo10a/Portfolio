import { Link } from "react-scroll";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import projects from "../../ProjectGitHub.json";
import { IMAGE_BY_PROJECT } from "../../constants/imageByProjects";
import { WEB } from "../../constants/content";
import SectionHeading from "../SectionHeading/SectionHeading";

const imageFor = (alt) => IMAGE_BY_PROJECT.find((p) => p.name === alt)?.src;

export default function Projects() {
  return (
    <section id="Web" className="border-t border-line py-20 md:py-28">
      <div className="container-page">
        <SectionHeading index="04" label="Desarrollo web" title={WEB.title} />
        <div className="-mt-6 mb-12 flex flex-col gap-6 md:-mt-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl leading-relaxed text-muted">{WEB.text}</p>
          <Link
            to="Contact"
            smooth
            duration={500}
            offset={-72}
            className="btn-ghost shrink-0 cursor-pointer"
          >
            {WEB.cta} <FiArrowRight />
          </Link>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.titleProject} className="group">
              <a
                href={project.urlProject}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-2xl bg-accent-soft p-3 sm:p-4"
              >
                <img
                  src={imageFor(project.image.alt)}
                  alt={project.titleProject}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-lg object-cover object-top shadow-sm transition duration-500 group-hover:scale-[1.02]"
                />
              </a>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium">{project.titleProject}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                    {project.badge} ·{" "}
                    {project.contentTecnologies.map((t) => t.title).join(", ")}
                  </p>
                </div>
                <a
                  href={project.urlProject}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visitar ${project.titleProject}`}
                  className="shrink-0 text-muted hover:text-accent"
                >
                  <FiArrowUpRight />
                </a>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
