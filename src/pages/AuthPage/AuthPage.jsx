import React from "react";
import { Link } from "react-router-dom";
import "./AuthPage.css";
import LoginModal from "../../components/Modal/LoginModal";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage(props) {
  const [show, setShow] = useState(false)
  function showModal() {
  setShow(show = !show)
  }

  function closeModal() {
    setShow(show = !show)
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
          <div>
            <>
              <div className="authBtnContatiner">
              <button onClick={() => {showModal()}}
                   className="logInBtn">Log In</button>
                  </div>
            </>
          </div>
        </>
                  <LoginModal show={show}><LoginForm setUser={props.setUser}/></LoginModal>
      </main>
    </>
  );
}
