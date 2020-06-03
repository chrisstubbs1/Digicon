import React from "react"
import "../_styles/landingpagenavbar.css"

class LandingPageNavBar extends React.Component{
    render() {
        return (
          <div className="nav-bar-container">
            <ul>
              <li>
                <a href="#">Share</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Download our App</a>
              </li>
            </ul>
          </div>
        );
    }
}

export default LandingPageNavBar