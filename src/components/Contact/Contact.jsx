import { useState } from "react";
import { useContactForm } from "../../hooks/useContactForm";
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  const { register, handleSubmit, errors, isValid, trigger, onSubmit } =
    useContactForm();
  const [accepted, setAccepted] = useState(false);

  return (
    <section id="Contact" className="py-8 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-gray-700 text-3xl font-bold uppercase underline underline-offset-[10px]">
          Contáctame
        </h1>
      </div>

      <div className="w-full max-w-3xl mx-auto px-4">
        <p className="text-gray-700 text-md text-center mb-10 leading-relaxed">
          Estoy en búsqueda de nuevas oportunidades como desarrollador web y
          móvil. Me apasiona crear interfaces intuitivas y adaptadas a
          diferentes dispositivos.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Nombre */}
          <div>
            <input
              type="text"
              placeholder="Nombre completo"
              {...register("name", {
                required: "El nombre es obligatorio",
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Nombre inválido",
                },
              })}
              className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-teal-600 outline-none"
            />
            <p className="text-sm text-red-600 italic">
              {errors.name?.message}
            </p>
          </div>

          {/* Correo */}
          <div>
            <input
              type="email"
              placeholder="Correo electrónico"
              {...register("email", {
                required: "Correo obligatorio",
                pattern: {
                  value: /^[-\w.%+]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Correo no válido",
                },
              })}
              className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-teal-600 outline-none"
            />
            <p className="text-sm text-red-600 italic">
              {errors.email?.message}
            </p>
          </div>

          {/* Mensaje */}
          <div>
            <textarea
              placeholder="Cuéntame tu proyecto..."
              {...register("message", {
                required: "Mensaje obligatorio",
              })}
              rows={5}
              className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-teal-600 outline-none resize-none"
            />
            <p className="text-sm text-red-600 italic">
              {errors.message?.message}
            </p>
          </div>

          {/* Check de privacidad */}
          <div className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              {...register("privacy", {
                required: "Debes aceptar los términos",
                onChange: (e) => {
                  setAccepted(e.target.checked);
                  trigger();
                },
              })}
              className="mt-1 text-teal-600 focus:ring-teal-500 accent-teal-600"
            />
            <label className="text-gray-700 italic">
              Acepto el tratamiento de mis datos personales conforme a la Ley
              1581 de 2012
            </label>
          </div>
          <p className="text-sm text-red-600 italic">
            {errors.privacy?.message}
          </p>

          {/* Botón */}
          <button
            type="submit"
            disabled={!isValid || !accepted}
            className={`flex items-center gap-2 justify-center w-full md:w-auto px-6 py-2 text-white font-semibold rounded transition-all ${
              isValid && accepted
                ? "bg-teal-600 hover:bg-teal-700"
                : "bg-gray-300 cursor-not-allowed text-gray-500"
            }`}
          >
            <FaTelegramPlane />
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
