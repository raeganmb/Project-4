import React from "react";
// import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "./AuthPage.css"

export default function AuthPage() {
  return (
    <>
    <main className="authContainer">
          <h1 className="authTitle">Artspiration.</h1>
          <div className="authImage">
            {/* <img src="https://via.placeholder.com/150x200.png" alt="" /> */}
          </div>
          <div className="authBtnContatiner">
            <Link to="/signup">
            <button className="signUpBtn">Sign Up</button>
            </Link>
            <Link to="/login">
            <button className="logInBtn">Log In</button>
            </Link>
          </div>
          <div className="welcomemsg">
            <p>Please sign up or log in to your Virtual Art Gallery</p>
          </div>
    </main>
    </>
  );
}
