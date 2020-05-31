import React from "react"
import "../styles/signup.css";

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
            gender: " "
        }
    }

    render() {
        return (
            <div className="login-container">
                <h1 className="welcome-text">New User? Use the form below to join Digicon!</h1>
                <div className="form-container">
                    <form>
                        <input type={"text"} placeholder={"First Name"}/>
                        <input type={"text"} placeholder={"Last Name"}/>
                        <input type={"text"} placeholder={"Username"}/>
                        <input type={"email"} placeholder={"Email"}/>
                        <input type={"password"} placeholder={"Password"}/>
                        <input type={"date"} placeholder={"Birthday"}/>
                        <input type={"text"} placeholder={"Gender"}/>
                        <button onClick={this.handleSubmit()}>Submit</button>

                    </form>
                </div>
            </div>
        )
    }

    handleSubmit() {

    }
}

export default SignUpArea