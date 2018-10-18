import React, { Component } from "react";

class Menu extends Component {
  returnOutput = () => {
    let output = this.props.hasWinner
      ? this.props.winner === 0
        ? "WINNER IS CIRCLE"
        : "WINNER IS CROSS"
      : "THERE IS NO WINNER!";
    return output;
  };

  state = {};
  render() {
    return (
      <div className="menu">
        <h2>{this.returnOutput()}</h2>
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
