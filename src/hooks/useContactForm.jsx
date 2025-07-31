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
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    toast.promise(
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          user_name: data.name,
          user_email: data.email,
          message: data.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      ),
      {
        loading: "Enviando mensaje...",
        success: "¡Mensaje enviado correctamente!",
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
