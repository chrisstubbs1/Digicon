import React from "react"
import "../_styles/imagearea.css";

class ImageArea extends React.Component {
    render() {
        return (
          <div className="image-container">
            <img src={require("../_images/band-members-playing-on-stage-1749822.jpg")} alt="concert"/>
           
          </div>
        );
    }
}

export default ImageArea