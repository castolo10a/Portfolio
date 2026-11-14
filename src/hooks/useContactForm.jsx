import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    toast.promise(
      emailjs.send(
        import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          user_name: data.name,
          user_email: data.email,
          // Se envía todo dentro de "message" para no tener que cambiar la plantilla de EmailJS.
          message: [
            `Servicio: ${data.service}`,
            `Marca: ${data.brand || "—"}`,
            `Inversión mensual: ${data.budget || "—"}`,
            "",
            data.message,
          ].join("\n"),
        },
        import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY
      ),
      {
        loading: "Enviando mensaje...",
        success: "¡Listo! Recibí tu solicitud y te escribiré pronto.",
        error: "Error al enviar el mensaje. Intenta más tarde.",
      }
    );

    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    trigger,
    onSubmit,
  };
};
