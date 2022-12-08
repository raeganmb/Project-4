import React, { Component } from "react";
import { signUp } from "../../utilities/users-service";
import * as FaIcons from "react-icons/fa";

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
              <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="cancelContainer">
          <a className="cancelBtn" onClick={this.props.onClose}><FaIcons.FaTimes /></a>
          </div>
          <h2 className="signInTitle">Log In</h2>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                  <label>Confirm</label>
                  <input
                    type="password"
                    name="confirm"
                    value={this.state.confirm}
                    onChange={this.handleChange}
                    required
                  />
                  <button
                    type="submit"
                    disabled={disable}
                    onClick={this.reroute}
                  >
                    SIGN UP
                  </button>
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
