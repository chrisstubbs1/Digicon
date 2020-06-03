import React from "react";
import "../_styles/loginarea.css";

class LoginArea extends React.Component {
  render() {
    return (
      <div className="login-container">
        <a>
          <h1 className="neon">Digicon</h1>
        </a>
        <div className="form-container">
          <form>
            <h1 className="login-text">Log in below!</h1>
            <label htmlFor="username-field">
              Username
              <input type="text" id="username-field" />
            </label>

            <label htmlFor="password-field">
              Password
              <input type="password" id="password-field" />
            </label>

            <div className="button-div">
              <button className="login-button">Log In</button>
              or
              <button className="login-button">Sign Up</button>
            </div>
            <a className="forgot-password-link">Forgot Password?</a>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginArea;
