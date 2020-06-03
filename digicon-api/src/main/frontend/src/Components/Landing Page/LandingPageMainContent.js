import React from "react"
import "../_styles/landingpagemaincontent.css"

class LandingPageMainContent extends React.Component{
    render() {
        return (
          <div className="main-content-container">
            <div className="content-area">
              <h1 className="neon">Digicon</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quos animi velit facilis aut.
              </p>

              <div className="button-container">
                {/* <button className="pulse">Login</button>
                <button className="pulse">Sign Up</button> */}
                <a href="#">Login</a>
                <a href="#">Sign Up</a>
              </div>
            </div>
          </div>
        );
    }
}

export default LandingPageMainContent