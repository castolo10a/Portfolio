import { Link } from "react-scroll";
import { FiArrowRight } from "react-icons/fi";
import profile from "../../assets/images/ProfilePic.webp";
import { HERO, HIGHLIGHTS } from "../../constants/content";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Hero() {
  return (
    <section id="Home" className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="container-page">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {HERO.eyebrow}
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              {HERO.title}
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {HERO.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="Contact"
                smooth
                duration={500}
                offset={-72}
                className="btn-primary cursor-pointer"
              >
                {HERO.cta} <FiArrowRight />
              </Link>
              <SocialLinks />
            </div>
          </div>

          <img
            src={profile}
            alt="Daniel Castillo"
            className="order-first h-28 w-28 rounded-full object-cover md:order-none md:h-64 md:w-64 ring-8 ring-accent-soft"
          />
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label} className="bg-paper p-6">
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-serif text-3xl leading-tight text-accent md:text-4xl">
                {item.value}
              </dd>
              <dd className="mt-2 text-xs leading-snug text-muted">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
