import React from "react";
import axios from "axios"
import "../_styles/sidebar.css";

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        // axios.get("http://localhost:8081/api/digicon-user/2ef4086c-5436-410d-8a7f-b234ae2ed4f8")
        //     .then(res => {
        //         const user = res.data;
        //         this.setState(user)
        //     }).catch(error => console.log(error))
    }

    render() {
        let name = this.state.firstName ? this.state.firstName : ""

        return (
          <div className="sidebar-container">
            <h1 className="sidebar-header-text">Digicon</h1>
            <a href="#">{name} Profile</a>
            <a href="#">Feed</a>
            <a href="#">Explore</a>
            <a href="#">Trending</a>
            <a href="#">Live Now</a>
            <div className="sidebar-footer">
              <button>Log Out</button>
              <a href="#">Settings</a>
            </div>
          </div>
        );
    }
}

export default Sidebar;
