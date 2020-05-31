import React from "react"
import "../styles/userhomepage.css"
import Sidebar from "./Sidebar"

class UserHomePage extends React.Component {

    render() {
        return(
            <div className="userhome-container">
                <Sidebar/>
            </div>
        )
    }
}

export default UserHomePage