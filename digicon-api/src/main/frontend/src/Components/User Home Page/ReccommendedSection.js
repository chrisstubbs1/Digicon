import React from "react";
import ReccommendedItem from "./ReccommendedItem";
import "../_styles/reccommendedsection.css";

class ReccommendedSection extends React.Component {
  render() {
    return (
      <div className="recommendedsection-container">
        <ReccommendedItem />
        <ReccommendedItem />
        <ReccommendedItem />
        <ReccommendedItem />
      </div>
    );
  }
}

export default ReccommendedSection;
