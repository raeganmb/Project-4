import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function SingUpPage({ setUser }) {
  return (
    <>
      <h3>Sign Up Here!</h3>
      <SignUpForm setUser={setUser} />
    </>
  );
}
