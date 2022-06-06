import React from "react";
import Heading from "../Heading";
import LoginForm from "./login/LoginForm";

function Login() {
  return (
    <>
      <div className="wrapper">
        <Heading title="Login for Admins" />
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
