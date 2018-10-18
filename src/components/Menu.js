import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="menu">
        <h2>Winner is {this.props.winner === 0 ? "CIRCLE" : "CROSS"}</h2>
        <button
          onClick={() => {
            this.props.startOver();
          }}
        >
          Try Again
        </button>
      </div>
    );
  }
}

export default Menu;
