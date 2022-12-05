import React from "react";
// import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "./AuthPage.css"

export default function AuthPage() {
  return (
    <main className="authContainer">
          <h1 className="authTitle">Artspiration.</h1>
          <div className="authImage">
            {/* <img src="https://via.placeholder.com/150x200.png" alt="" /> */}
          </div>
          <div className="authBtnContatiner">
            <button className="signUpBtn"> <Link to="/signup">Sign Up</Link></button>
            <button className="logInBtn"><Link to="/login">Log In</Link></button>
          </div>
    </main>
  );
}
