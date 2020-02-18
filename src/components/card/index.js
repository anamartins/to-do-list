import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);

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
        className={"card " + this.props.color}
        onMouseDown={this.onMouseDown}
      >
        <p>{this.props.value}</p>
      </div>
    );
  }
}

Card.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string
};

export default Card;
