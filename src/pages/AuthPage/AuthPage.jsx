import React from "react";
import { Link } from "react-router-dom";
import "./AuthPage.css";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage(props) {
  const [show, setShow] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  function showModal() {
  setShow(show => !show)
  }
function showSignUpModal() {
  setShowSignUp(showSignUp => !showSignUp)
}


  return (
    <>
      <main>
        <div className="authContainer">
          <h1 className="authTitle">Artspiration.</h1>
          <div className="welcomemsg">
            <p>Welcome to your Virtual Art Gallery</p>
          </div>
        </div>

        <>
        {(!show && !showSignUp) ?
          <div>
            <>
              <div className="authBtnContatiner">
              <button onClick={() => {showModal()}}
                   className="logInBtn">Log In</button>
                   <p>Don't have an account?</p>
                   <button onClick={() => {showSignUpModal()}} className="signUpBtn">
                    Sign Up Here!
                   </button>
                  </div>
            </>
          </div> : null
        }
        </>
      </main>
          <LoginForm show={show} onClose={() => setShow(false)} setUser={props.setUser}/>
          <SignUpForm showSignUp={showSignUp} onClose={() => setShowSignUp(false)} setUser={props.setUser}/>
    </>
  );
}
