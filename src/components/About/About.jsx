import { ABOUT } from "../../constants/content";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function About() {
  return (
    <section id="About" className="border-t border-line py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="01"
          label="Sobre mí"
          title={ABOUT.title}
        />

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="divide-y divide-line border-y border-line">
            {ABOUT.pillars.map((pillar) => (
              <li key={pillar.title} className="py-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {pillar.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
