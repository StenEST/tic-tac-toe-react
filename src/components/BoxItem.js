import React, { Component } from "react";
class BoxItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      player: 0,
      alreadyChecked: false
    };
  }

  drawShape = () => {
    if (this.state.checked === false) return "";
    let shape = [];
    let classID = this.state.player;
    if (classID === 0) {
      shape.push(<div className="cross" />);
      shape.push(<div className="cross reverse" />);
    } else {
      shape.push(<div className="circle" />);
    }
    return shape;
  };

  makeChange = () => {
    let playerSwitch = this.state.player === 0 ? 1 : 0;
    this.setState({
      checked: true,
      player: playerSwitch,
      alreadyChecked: true
    });
  };

  render() {
    return (
      <div className={this.props.className} onClick={this.makeChange}>
        {this.drawShape()}
      </div>
    );
  }
}

export default BoxItem;
