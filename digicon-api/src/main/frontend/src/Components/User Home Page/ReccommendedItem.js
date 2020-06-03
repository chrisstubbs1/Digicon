import React from "react";
import "../_styles/reccommendeditem.css";

class ReccommendedItem extends React.Component {
  render() {
    return (
      <div className="reccommended-item-container">
        <div className="item-image">
          <img src={require("../_images/band.jpg")} alt="band" />
        </div>

        <div className="item-info">
          <hr />
          <h3>Title</h3>
          <p>Description</p>
        </div>
      </div>
    );
  }
}

export default ReccommendedItem;
