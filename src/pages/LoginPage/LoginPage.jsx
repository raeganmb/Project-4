import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage({ setUser }) {
  return (
    <>
      <h3>Login Here!</h3>
      <LoginForm setUser={setUser} />
    </>
  );
}
