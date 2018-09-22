import React, { Component } from "react";
import "./App.css";
import BoxItem from "./components/BoxItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [new Array(3), new Array(3), new Array(3)],
      player: 0
    };
  }

  buildInnerBox = (pirmaryBox, row) => {
    let innerBoard = [];
    for (let z = 0; z < pirmaryBox.length; z++) {
      innerBoard.push(<BoxItem className="box-item" key={row + "/" + z} />);
    }
    return innerBoard;
  };

  buildGameBoard = boxes => {
    let board = [];
    let row = 0;
    boxes.forEach(box => {
      board.push(
        <div className="row" key={row}>
          {this.buildInnerBox(box, row)}
        </div>
      );
      row++;
    });
    return board;
  };

  render() {
    return (
      <div className="App">{this.buildGameBoard(this.state.gameState)}</div>
    );
  }
}

export default App;
