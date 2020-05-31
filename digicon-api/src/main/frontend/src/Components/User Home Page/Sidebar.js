import React from "react";
import "../styles/sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar-container">
        <h1 className="sidebar-header-text">Digicon</h1>
        <a href="#">Your Profile</a>
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
