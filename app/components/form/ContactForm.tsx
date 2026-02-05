"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const [isTouched, setIsTouched] = useState({
    user_name: false,
    user_email: false,
    user_message: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const errors = {
    user_name: !formData.user_name ? "Su nombre completo es requerido" : "",
    user_email: !formData.user_email
      ? "El correo es requerido"
      : !/^[a-zA-Z0-9._%+-À-ÿ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
          formData.user_email
        )
      ? "Ingrese un correo electrónico válido"
      : "",
    user_message: !formData.user_message ? "Su mensaje es requerido" : "",
  };

  const validateForm = () => {
    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsTouched({
      user_name: true,
      user_email: true,
      user_message: true,
    });

    if (!validateForm()) return;

    setIsLoading(true);

    emailjs
      .send(
        "service_x900uti",
        "template_1mqx9dc1",
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          user_message: formData.user_message,
        },
        { publicKey: "qcGN88mkYgX07GbuW" }
      )
      .then(() => {
        toast.success("Mensaje enviado correctamente 🤙🏻✅");
        setFormData({ user_name: "", user_email: "", user_message: "" });
        setIsTouched({
          user_name: false,
          user_email: false,
          user_message: false,
        });
      })
      .catch((error) => {
        toast.error("Ups, parece que hubo un error al enviar el mensaje ❌😔");
        console.error("FAILED...", error.text);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.keyCode || e.which;
    const tecla = String.fromCharCode(key);
    const letras =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú";
    const especiales = [8, 13, 32, 37, 39, 46];
    const teclaEspecial = especiales.includes(key);

    if (letras.indexOf(tecla) === -1 && !teclaEspecial) {
      e.preventDefault();
    }
  };

  return (
    <form className="contact__form" id="contact-form" onSubmit={handleSubmit}>
      {/* Campo de nombre */}
      <div className="contact__form-div">
        <label className="contact__form-tag">Nombres</label>
        <input
          type="text"
          placeholder="Escribe tus nombres"
          className="contact__form-input"
          id="contact-name"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="mb-2">
        {isTouched.user_name && errors.user_name && (
          <div className="invalid-fullName">{errors.user_name}</div>
        )}
      </div>

      {/* Campo de correo electrónico */}
      <div className="contact__form-div">
        <label className="contact__form-tag">Correo</label>
        <input
          type="email"
          placeholder="Escribe tu correo"
          className="contact__form-input"
          id="contact-email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        {isTouched.user_email && errors.user_email && (
          <div className="invalid-email">{errors.user_email}</div>
        )}
      </div>

      {/* Campo de mensaje */}
      <div className="contact__form-div contact__form-area">
        <label className="contact__form-tag">Mensaje</label>
        <textarea
          cols={30}
          rows={10}
          placeholder="Escribe tu mensaje"
          id="contact-project"
          className="contact__form-input"
          name="user_message"
          value={formData.user_message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-2">
        {isTouched.user_message && errors.user_message && (
          <div className="invalid-message">{errors.user_message}</div>
        )}
      </div>

      {/* Botón de envío */}
      <div className="buttons-send">
        <button
          type="submit"
          className="buttons"
          disabled={!validateForm() || isLoading}
          style={{
            opacity: isLoading || !validateForm() ? 0.7 : 1,
            cursor: isLoading || !validateForm() ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="animate-spin h-5 w-5" />
              <span>Enviando...</span>
            </div>
          ) : (
            <>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Enviar mensaje</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
