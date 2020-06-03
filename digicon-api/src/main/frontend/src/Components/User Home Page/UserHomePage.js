import React from "react"
import "../_styles/userhomepage.css"
import Sidebar from "./Sidebar"
import ReccommendedSection from "./ReccommendedSection"
import MainSection from "./MainSection"

class UserHomePage extends React.Component {

    render() {
        return(
            <div className="userhome-container">
                <Sidebar/>
                <MainSection/>
            </div>
        )
    }
}

export default UserHomePage