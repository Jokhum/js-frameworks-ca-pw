import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { TOKENURL } from "../../../constants/api";
import AuthContext from "../../context/AuthContext";

const url = TOKENURL;
console.log(url);

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext); //eslint-disable-line

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      history("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {loginError && <span className="error">{loginError}</span>}

        <div className="form-item">
          <input name="username" placeholder="Username" {...register("username")} />
          {errors.username && <span className="error">{errors.username.message}</span>}
        </div>

        <div className="form-item">
          <input name="password" placeholder="Password" {...register("password")} type="password" />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>
        <button>{submitting ? "Loggin in..." : "Login"}</button>
      </form>
    </>
  );
}
