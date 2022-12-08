import React from "react";
import { Link } from "react-router-dom";
import BenchFooter from "../../components/BenchFooter/BenchFooter";
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
          <img className="authImage" src="https://news.artnet.com/app/news-upload/2019/04/EP-DiDonna-Kahlo-Me-and-My-Parrots-778x1024.jpg" alt="" />
        </div>
      

        <>
        {(!show && !showSignUp) ?
          <div>
            <>
              <div className="authBtnContatiner">
              <button onClick={() => {showModal()}}
                   className="logInBtn">Log In</button>
                   <div className="signUpContainer">
                    <p>Don't have an account?</p>
                   <a className="signUpLink" onClick={() => {showSignUpModal()}}>
                    SIGN UP 
                   </a>
                    </div>
                  </div>
            </>
          </div> : null
        }
        <div className="authMethods">
        <LoginForm show={show} onClose={() => setShow(false)} setUser={props.setUser}/>
          <SignUpForm showSignUp={showSignUp} onClose={() => setShowSignUp(false)} setUser={props.setUser}/>
        </div>
        </>
      </main>
    </>
  );
}

