import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "pink"
    };
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  onMouseDown(event) {
    console.log("event", window.event);
    window.addEventListener("mousemove", this.onMouseMove);
    console.log("down");
  }

  onMouseMove(event) {
    // console.log("olar");
  }

  render() {
    return (
      <div
        className={"card " + this.state.color}
        onMouseDown={this.onMouseDown}
      >
        <p>{this.props.value}</p>
      </div>
    );
  }
}

Card.propTypes = {
  value: PropTypes.string
};

export default Card;
