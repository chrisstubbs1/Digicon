import React from "react"
import "../_styles/mainsection.css"
import ReccommendedSection from "./ReccommendedSection"

class MainSection extends React.Component{
    render() {
        return (
          <div className="main-section-container">
            <h1>Reccommended For You</h1>
            <ReccommendedSection />
            <h1>Live Near You</h1>
            <ReccommendedSection />
          </div>
        );
    }
}

export default MainSection