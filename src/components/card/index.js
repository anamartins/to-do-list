import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseDown(event) {
    console.log("event", window.event);
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("mouseup", this.onMouseUp);
    console.log("down");
  }

  onMouseMove(event) {
    let x = window.event.screenX;
    let y = window.event.screenY;
    this.cardRef.current.style.left = x + "px";
    this.cardRef.current.style.top = y + "px";
  }

  onMouseUp(event) {
    window.removeEventListener("mousemove", this.onMouseMove);
    console.log("up");
  }

  render() {
    return (
      <div
        className={"card " + this.props.color}
        // style={{
        //   top: JSON.stringify(this.props.top) + "px",
        //   left: JSON.stringify(this.props.left) + "px"
        // }}
        onMouseDown={this.onMouseDown}
        ref={this.cardRef}
      >
        <p>{this.props.value}</p>
      </div>
    );
  }
}

Card.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  top: PropTypes.number,
  left: PropTypes.number
};

export default Card;
