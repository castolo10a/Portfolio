import { infoServices } from "../../constants/infoServices";

export default function InfoServices() {
  return (
    <section id="InfoServices" className="py-8 px-4 bg-white text-black h-screen">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-gray-700 text-3xl font-bold underline underline-offset-8 mb-8">
          Servicios
        </h2>
        <p className="mt-12 text-gray-700 max-w-xl mx-auto">
          Estos son algunos de los servicios que ofrezco como desarrollador
          frontend.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {infoServices.map((service) => (
            <div
              key={service.title}
              className="flex items-start gap-4 p-6 border border-gray-300 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-teal-600">{service.icon}</div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
