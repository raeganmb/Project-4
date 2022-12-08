import React, { Component } from "react";
import { signUp } from "../../utilities/users-service";
import * as FaIcons from "react-icons/fa";
import "./SignUpForm.css"

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
      window.location.replace("/home");
    } catch (error) {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <>
          {this.props.showSignUp ? (
            <>
              <div className="form-container signUp-container">
                <form className="signUpForm" autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="cancelContainer">
          <a className="cancelBtn" onClick={this.props.onClose}><FaIcons.FaTimes /></a>
          </div>
          <h2 className="signUpTitle">Sign Up</h2>
          <div className="signUpInfo">
          <div className="signUpName signUpInputs">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
          </div>
          <div className="signUpEmail signUpInputs">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
          </div>
          <div className="signUpPassword signUpInputs">
            <label>Password</label>
            <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            />
          </div>
          <div className="signUpPasswordConfirm signUpInputs">
                  <label>Confirm</label>
                  <input
                    type="password"
                    name="confirm"
                    value={this.state.confirm}
                    onChange={this.handleChange}
                    required
                  />
          </div>
        </div>
        <div className="signUpBtnContainer">
          <button className="signUpBtnModal"
          type="submit"
          disabled={disable}
          onClick={this.reroute}
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
    <p className="error-message">&nbsp;{this.state.error}</p>
    </>
          ) : null}
        </>
      </div>
    );
  }
}
