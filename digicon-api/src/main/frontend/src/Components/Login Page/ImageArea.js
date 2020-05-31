import React from "react"
import "../styles/imagearea.css";

class ImageArea extends React.Component {
    render() {
        return (
          <div className="image-container">
            <img src={require("../images/concert.jpg")} alt="concert" />
          </div>
        );
    }
}

export default ImageArea