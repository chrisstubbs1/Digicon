import React from "react"
import "../styles/loginarea.css";

class LoginArea extends React.Component {

    render() {
        return (
            <div className="login-container">
                <h1 className="welcome-text">Welcome back! Log in below.</h1>
                <div className="form-container">
                    <form>
                        <label>Username</label>
                        <input type="text" id="username-field"/>
                        <label>Password</label>
                        <input type="password" id="password-field"/>
                        <button>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginArea