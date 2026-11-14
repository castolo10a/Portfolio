import { FiArrowRight } from "react-icons/fi";
import { useContactForm } from "../../hooks/useContactForm";
import { CONTACT, CONTACT_SECTION } from "../../constants/content";
import SectionHeading from "../SectionHeading/SectionHeading";

const FieldError = ({ error }) => (
  <p className="min-h-[20px] pt-1 text-xs text-red-600">{error?.message}</p>
);

const Label = ({ htmlFor, children, optional }) => (
  <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium">
    {children}
    {optional && <span className="font-normal text-muted"> (opcional)</span>}
  </label>
);

export default function Contact() {
  const { register, handleSubmit, errors, isValid, onSubmit } = useContactForm();

  return (
    <section id="Contact" className="border-t border-line bg-surface py-20 md:py-28">
      <div className="container-page grid gap-16 md:grid-cols-2">
        <div>
          <SectionHeading index="05" label="Contacto" title={CONTACT_SECTION.title} />
          <p className="-mt-6 max-w-md leading-relaxed text-muted md:-mt-10">
            {CONTACT_SECTION.text}
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-muted">WhatsApp</dt>
              <dd>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {CONTACT.whatsappLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Correo</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">LinkedIn</dt>
              <dd>
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {CONTACT.linkedinLabel}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="md:pt-24">
          <Label htmlFor="service">¿Qué necesitas?</Label>
          <select
            id="service"
            defaultValue=""
            {...register("service", { required: "Elige una opción" })}
            className="field"
          >
            <option value="" disabled>
              Selecciona un servicio
            </option>
            {CONTACT_SECTION.services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <FieldError error={errors.service} />

          <div className="grid gap-x-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                {...register("name", {
                  required: "El nombre es obligatorio",
                  pattern: { value: /^[\p{L}\s]+$/u, message: "Nombre inválido" },
                })}
                className="field"
              />
              <FieldError error={errors.name} />
            </div>
            <div>
              <Label htmlFor="email">Correo</Label>
              <input
                id="email"
                type="email"
                placeholder="tu@correo.com"
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[-\w.%+]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Correo no válido",
                  },
                })}
                className="field"
              />
              <FieldError error={errors.email} />
            </div>
          </div>

          <div className="grid gap-x-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="brand" optional>
                Tu marca
              </Label>
              <input
                id="brand"
                type="text"
                placeholder="Sitio web o Instagram"
                {...register("brand")}
                className="field"
              />
              <FieldError />
            </div>
            <div>
              <Label htmlFor="budget" optional>
                Inversión mensual
              </Label>
              <select id="budget" defaultValue="" {...register("budget")} className="field">
                <option value="">Rango de inversión en pauta</option>
                {CONTACT_SECTION.budgets.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
              <FieldError />
            </div>
          </div>

          <Label htmlFor="message">Cuéntame un poco más</Label>
          <textarea
            id="message"
            rows={4}
            placeholder="¿Qué vendes, cuál es tu objetivo y qué te gustaría mejorar?"
            {...register("message", { required: "El mensaje es obligatorio" })}
            className="field resize-none"
          />
          <FieldError error={errors.message} />

          <label className="flex items-start gap-3 text-xs leading-relaxed text-muted">
            <input
              type="checkbox"
              {...register("privacy", { required: "Debes aceptar el tratamiento de datos" })}
              className="mt-0.5 accent-accent"
            />
            Acepto el tratamiento de mis datos personales conforme a la Ley 1581
            de 2012.
          </label>
          <FieldError error={errors.privacy} />

          <button
            type="submit"
            disabled={!isValid}
            className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
          >
            Enviar solicitud <FiArrowRight />
          </button>
          <p className="mt-3 text-xs text-muted">
            Te respondo personalmente para agendar una conversación sin costo.
          </p>
        </form>
      </div>
    </section>
  );
}
