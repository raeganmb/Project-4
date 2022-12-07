import React from "react";
import { Link } from "react-router-dom";
import BenchFooter from "../../components/BenchFooter/BenchFooter";
import "./AuthPage.css";

export default function AuthPage() {
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
                <Link to="/login">
                  <button className="logInBtn">Log In</button>
                </Link>
                <p>Don't have an account?</p>
                <Link className="signUpBtn" to="/signup">
                  Sign up here!
                </Link>
              </div>
            </>
          </div>
        </>
        <BenchFooter />
      </main>
    </>
  );
}
