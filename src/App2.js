import React, { Component } from "react";
import "./App.css";
import BoxItem from "./components/BoxItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [new Array(3), new Array(3), new Array(3)],
      player: 0,
      moves: 0
    };
  }

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

  buildInnerBox = (pirmaryBox, row) => {
    let innerBoard = [];
    for (let z = 0; z < pirmaryBox.length; z++) {
      innerBoard.push(
        <BoxItem
          player={this.state.player}
          gameChange={this.gameChange}
          className="box-item"
          key={row + "" + z}
          ID={row + "/" + z}
        />
      );
    }
    return innerBoard;
  };

  gameChange = element => {
    //changes
    let newPlayer = this.state.player === 0 ? 1 : 0;
    let row = parseInt(element.state.ID[0]);
    let column = parseInt(element.state.ID[2]);
    let currentArray = this.state.gameState;

    //change element to checked
    currentArray[row][column] = this.state.player;

    this.setState(
      {
        player: newPlayer,
        moves: this.state.moves + 1,
        gameState: currentArray
      },
      function() {
        if (this.checkWinner()) console.log("WINNER");
        else false;
      }
    );
  };

  checkWinner = () => {
    //Check if they have made so many moves
    let length = this.state.gameState.length;
    if (this.state.moves < length * 2 - 1) return false;

    // Check if we have a winner
    let state = this.state.gameState;
    let possible = false;

    //rows
    state.forEach(el => {
      if (!el.includes(undefined)) possible = true;
    });
    if (possible) return true;

    let diagonalLeft = [];
    let diagonalRight = [];

    //columns and diagonals
    for (let x = 0; x < length; x++) {
      let column = [];
      diagonalLeft.push(state[x][x]);
      diagonalRight.push(state[length - x - 1][length - x - 1]);
      for (let y = 0; y < length; y++) {
        column.push(state[y][x]);
      }
      if (column.includes(undefined)) return false;
    }
    if (!diagonalLeft.includes(undefined) && !diagonalRight.includes(undefined))
      return true;
    else return false;
  };

  render() {
    return (
      <div className="App">{this.buildGameBoard(this.state.gameState)}</div>
    );
  }
}

export default App;
