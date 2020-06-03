import React from "react";
import "../_styles/signup.css";
import axios from "axios"

class SignUpArea extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstName: " ",
      lastName: " ",
      userName: " ",
      emailAddress: " ",
      password: " ",
      birthday: " ",
      gender: " ",
    };
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.userNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.birthdayInput = React.createRef();
    this.genderInput = React.createRef();

  }

  handleSubmit = (e) => {
    e.preventDefault();
    let firstName = this.firstNameInput.current.value;
    let lastName = this.lastNameInput.current.value;
    let userName = this.userNameInput.current.value;
    let emailAddress = this.emailInput.current.value;
    let password = this.passwordInput.current.value;
    let birthday = this.birthdayInput.current.value;
    let gender = this.genderInput.current.value;

    let newUser = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: emailAddress,
      password: password,
      birthday: birthday,
      gender: gender
    };

    axios.post("http://localhost:8080/api/digicon-user", newUser)
        .then(() => {
          console.log(newUser)
        })
  };

  render() {
    return (
      <div className="login-container">
        <a href="#">
          <h1 className="neon">Digicon</h1>
        </a>
        <div className="form-container">
          <form>
            <h1 className="signup-text">New User? Sign Up Below!</h1>
            <label htmlFor="firstname-field">
              First Name
              <input ref={this.firstNameInput} type={"text"} id="firstname-field" />
            </label>

            <label htmlFor="lastname-field">
              Last Name
              <input  ref={this.lastNameInput} type={"text"} id="lastname-field" />
            </label>

            <label htmlFor="username-field">
              Username
              <input ref={this.userNameInput} type={"text"} id="username-field" />
            </label>

            <label htmlFor="email-field">
              Email Address
              <input ref={this.emailInput} type="email" id="email-field" />
            </label>

            <label htmlFor="password-field">
              Password
              <input ref={this.passwordInput} type={"password"} id="password-field" />
            </label>

            <label htmlFor="birthday-field">
              Birthday
              <input ref={this.birthdayInput} type={"date"} id="birthday-field" />
            </label>

            <label htmlFor="gender-field">
              Gender
              <input ref={this.genderInput} type={"text"} id="gender-field" />
            </label>

            <button onClick={this.handleSubmit} className="signup-button">
              Sign Up!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpArea;
