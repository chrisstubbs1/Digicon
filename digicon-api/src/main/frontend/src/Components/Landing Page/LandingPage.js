import React from "react";
import "../_styles/landingpage.css"
import LandingPageNavBar from "./LandingPageNavBar";
import LandingPageMainContent from "./LandingPageMainContent"

class LandingPage extends React.Component{
    render() {
        return (
            <div className="landing-page-container">
                <LandingPageNavBar/>
                <LandingPageMainContent/>
            </div>
        );
    }
}

export default LandingPage