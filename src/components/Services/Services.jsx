import { Link } from "react-scroll";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { PROCESS, SERVICES, SERVICES_INTRO, TOOLS } from "../../constants/content";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function Services() {
  return (
    <section id="Services" className="border-t border-line bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeading index="02" label="Servicios" title={SERVICES_INTRO.title} />
        <p className="-mt-6 mb-12 max-w-xl leading-relaxed text-muted md:-mt-10">
          {SERVICES_INTRO.text}
        </p>

        <div className="grid gap-4 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className={`flex flex-col rounded-2xl border p-8 ${
                service.featured
                  ? "border-accent bg-accent-soft/60"
                  : "border-line bg-paper"
              }`}
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                {service.mode}
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.text}</p>

              <ul className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <FiCheck className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="Contact"
                smooth
                duration={500}
                offset={-72}
                className={`mt-8 self-start cursor-pointer ${
                  service.featured ? "btn-primary" : "btn-ghost"
                }`}
              >
                Me interesa <FiArrowRight />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Cómo trabajamos
          </h3>
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="bg-surface p-6">
                <span className="font-serif text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-3 font-medium">{step.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Herramientas que uso a diario
            </h3>
            <ul className="flex flex-wrap gap-2">
              {TOOLS.daily.map((tool) => (
                <li key={tool} className="rounded-full border border-ink px-4 py-2 text-sm">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              En aprendizaje
            </h3>
            <ul className="flex flex-wrap gap-2">
              {TOOLS.learning.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-dashed border-line px-4 py-2 text-sm text-muted"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
          Las herramientas me ayudan a analizar más rápido; las decisiones salen
          del criterio y la experiencia acumulada con más de 20 marcas.
        </p>
      </div>
    </section>
  );
}
