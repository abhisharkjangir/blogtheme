import React from "react";
import "./typehead.scss";

class Typehead extends React.PureComponent {
  render() {
    return (
      <div className="typehead-container">
        <input className="typehead" placeholder="Search Blog" />
      </div>
    );
  }
}

export default Typehead;
