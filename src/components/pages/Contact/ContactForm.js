import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstname: yup.string().required("Please enter your first name.").min(3, "The name must be at least 3 characters."),
  lastname: yup.string().required("Please enter your last name.").min(4, "The name has to be at least 4 characters."),
  email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
  message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
  select: yup.string().required("You need to choose an option in this field."),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const success = document.querySelector(".sent-success");
    const form = document.querySelector(".contact-form");
    console.log(data);

    success.style.display = "block";
    form.reset();
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="sent-success">Your message has been sent.</h2>
        <div className="form-item">
          <label htmlFor="firstname">First Name:</label>
          <input {...register("firstname")} />
          {errors.firstname && <span className="error">{errors.firstname.message}</span>}
        </div>

        <div className="form-item">
          <label htmlFor="lastname">Last Name:</label>
          <input {...register("lastname")} />
          {errors.lastname && <span className="error">{errors.lastname.message}</span>}
        </div>

        <div className="form-item">
          <label htmlFor="email">E-mail:</label>
          <input {...register("email")} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div className="form-item">
          <label htmlFor="select">Subject:</label>
          <select {...register("select")} onChange={(e) => setValue("select", e.target.value, { shouldValidate: true })}>
            <option value="">Choose your subject</option>
            <option value="Problem">Problem</option>
            <option value="Suggestion">Suggestion</option>
          </select>
          {errors.select && <span className="error">{errors.select.message}</span>}
        </div>

        <div className="form-item">
          <label htmlFor="message">Message:</label>
          <textarea {...register("message")} />
          {errors.message && <span className="error">{errors.message.message}</span>}
        </div>
        <button>Send</button>
      </form>
    </>
  );
}
