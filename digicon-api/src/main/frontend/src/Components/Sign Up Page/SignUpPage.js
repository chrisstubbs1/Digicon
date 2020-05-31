import React from "react"
import "../styles/loginpage.css"
import SideBlocks from "../Login Page/SidesBlocks";
import ImageArea from "../Login Page/ImageArea";
import SignUpArea from "./SignUpArea";

class SignUpPage extends React.Component{


    render() {
        return (
            <div className="app">
                <SideBlocks/>
                <ImageArea/>
                <SignUpArea/>
                <SideBlocks/>
            </div>
        );
    }
}

export default SignUpPage