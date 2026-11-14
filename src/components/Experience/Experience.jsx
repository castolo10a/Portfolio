import { EXPERIENCE } from "../../constants/content";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function Experience() {
  return (
    <section id="Experience" className="border-t border-line py-20 md:py-28">
      <div className="container-page">
        <SectionHeading index="03" label="Experiencia" title="Trayectoria." />

        <ol className="border-t border-line">
          {EXPERIENCE.map((job) => (
            <li
              key={job.role + job.company}
              className="grid gap-4 border-b border-line py-10 md:grid-cols-[180px_1fr] md:gap-12"
            >
              <p className="text-sm text-muted">{job.period}</p>
              <div>
                <h3 className="text-xl font-medium md:text-2xl">
                  {job.role} <span className="text-muted">· {job.company}</span>
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {job.description}
                </p>
                {job.tags.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
