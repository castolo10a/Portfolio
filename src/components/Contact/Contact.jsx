import { useRef, useState } from "react";
import ButtonSubmit from "../Buttons/ButtonSubmit/ButtonSubmit";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
    user_name: '',
    user_email: '',
    message: ''
  }

export default function Contact () {
    const form = useRef();
    const [input, setInput] = useState(initialState);
    const [err, setErr] = useState(initialState);
  
    const validateEmail = (email) => {
      const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
      return regex.test(email)
    }
  
    const validateName = (name) => {
      const nombreExpReg = /^[a-zA-Z\s]*$/;
      return nombreExpReg.test(name)
    }
  
    const validate = (input) => {
      const err = {}
  
      if (!input.user_name) {
        err.user_name = 'Debe ingresar un nombre'
      }
      if (!validateName(input.user_name)) {
          err.user_name = 'Debe ingresar un nombre valido'
      }
      if (!input.message) {
        err.message = 'Debe ingresar un mensaje'
      }
      if (!input.user_email) {
        err.user_email = 'Debe ingresar un correo'
      }
      if (!validateEmail(input.user_email)) {
        err.user_email = 'Debe ingresar un correo valido'
      }
      return err
    }
  
    const handleChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      setInput((prev) => ({
        ...prev,
        [name]: value
      }))
  
      setErr(
        validate({
          ...input,
          [name]: value
        })
      )
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if(Object.values(err).length > 0 || Object.values(input).length === 0){
        toast.error('Revisa los datos ingresados', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2500,
        })
      }else{
        toast.success('Mensaje enviado', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2500,
        })
        emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
        setInput(initialState)
      }
    }

    return (
      <section id='Contact' className="py-8">
      <div className="text-center">
        <h1 className="text-gray-500/75 py-8 text-center text-2xl uppercase font-bold underline underline-offset-[15px]">
          Contáctame
        </h1>
      </div>
      <div className="w-full mx-auto px-4 md:px-24 max-w-6xl">
        <div className="py-8">
          <p className="text-black text-xl text-center md:pb-4 mx-auto">
            Si deseas trabajar conmigo o tienes alguna pregunta, estaré encantado de ayudarte. No dudes en ponerte en contacto para discutir futuros proyectos y oportunidades laborales.
          </p>
        </div>
        <form className="flex flex-col items-center mx-auto text-center" ref={form} onSubmit={handleSubmit}>
          <div className="flex flex-col w-full md:w-[40rem] mb-4">
            <input
              placeholder="Nombre*"
              type="text"
              name="user_name"
              value={input.user_name}
              id="name"
              className="h-12 px-3 bg-transparent border border-solid border-gray-300 rounded-lg text-black text-lg w-full shadow-lg"
              autoComplete="off"
              onChange={handleChange}
            />
            <span
              hidden={!err.user_name}
              className="before:content-['*'] before:mr-.75 before:text-red-700 text-red-700 italic text-base mt-1"
            >
              {err.user_name}
            </span>
          </div>
          <div className="flex flex-col w-full md:w-[40rem] mb-4">
            <input
              placeholder="Email*"
              type="text"
              name="user_email"
              value={input.user_email}
              id="email"
              className="h-12 px-3 bg-transparent border border-solid border-gray-300 outline-none rounded-lg text-black text-lg w-full shadow-lg"
              autoComplete="off"
              onChange={handleChange}
            />
            <span
              hidden={!err.user_email}
              className="before:content-['*'] before:mr-.75 before:text-red-700 text-red-700 italic text-base mt-1"
            >
              {err.user_email}
            </span>
          </div>
          <div className="w-full md:w-[40rem] mb-4">
            <textarea
              placeholder="Mensaje*"
              name="message"
              value={input.message}
              cols="30"
              rows="8"
              className="bg-transparent px-3 py-2 border border-solid border-gray-300 outline-none rounded-lg text-black text-lg w-full shadow-lg"
              autoComplete="off"
              onChange={handleChange}
            ></textarea>
            <span
              hidden={!err.message}
              className="before:content-['*'] before:mr-.75 before:text-red-700 text-red-700 italic text-base mt-1"
            >
              {err.message}
            </span>
          </div>
          <div className="py-8">
            <ButtonSubmit />
          </div>
        </form>
      </div>
    </section>
    )
}
