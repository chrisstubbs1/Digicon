import React from "react"
import "../styles/loginpage.css";
import SideBlocks from "./SidesBlocks";
import ImageArea from "./ImageArea";
import LoginArea from "./LoginArea";

class LoginPage extends React.Component {

    render() {
        return (
          <div className="app">
            <SideBlocks className="side-blocks" />
            <ImageArea className="imgage-area" />
            <LoginArea className="login-area" />
            <SideBlocks className="side-blocks" />
          </div>
        );
    }
}

export default LoginPage