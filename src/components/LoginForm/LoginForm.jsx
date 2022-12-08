// LoginForm.jsx
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import "./LoginForm.css"
import { useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      props.setUser(user);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div>
      {props.show ? 
      <>
      <div className="form-container">
        <form className="logInForm" autoComplete="off" onSubmit={handleSubmit}>
          <div className="cancelContainer">
          <a className="cancelBtn" onClick={props.onClose}><FaIcons.FaTimes /></a>
          </div>
          <h2 className="logInTitle">Log In</h2>
          <div className="logInInfo">
          <div className="logInEmail logInInputs">
          <label>Email</label>
          <input
            placeholder=""
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          </div>
          <div className="logInPassword logInInputs">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          </div>
          </div>
          <div className="logInBtnContainer">
          <button className="logInBtnModal" type="submit">LOG IN</button>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
      </> : null }
    </div>
  );
}
