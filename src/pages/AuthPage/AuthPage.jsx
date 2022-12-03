import React from "react";
// import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage({ setUser }) {
  return (
    <main className="authContainer">
          <h1 className="authTitle">Artspiration</h1>
          <div className="authImage">
            <img src="" alt="" />
          </div>
          <div className="authBtnContatiner">
            <button className="signUpBtn">Sign Up</button>
            <button className="logInBtn">Log In</button>
          </div>
      {/* <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} /> */}
    
    </main>
  );
}
