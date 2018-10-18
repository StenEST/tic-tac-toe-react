import React, { Component } from "react";
class BoxItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      alreadyChecked: false,
      player: this.props.player,
      ID: this.props.ID
    };
  }

  drawShape = () => {
    if (this.state.checked === false) return;
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
    if (this.state.alreadyChecked === true) return "";
    this.setState({
      checked: true,
      alreadyChecked: true,
      player: this.props.player
    });
    this.props.gameChange(this);
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
