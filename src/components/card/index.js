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
    this.deleteCard = this.deleteCard.bind(this);
  }

  onMouseDown(event) {
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("mouseup", this.onMouseUp);

    let x = window.event.screenX;
    let y = window.event.screenY;

    let posCard = { x: this.props.left, y: this.props.top };
    let posClick = { x: x, y: y };
    let diff = { x: posClick.x - posCard.x, y: posClick.y - posCard.y };

    this.diff = diff;
  }

  onMouseMove(event) {
    let x = window.event.screenX;
    let y = window.event.screenY;

    let newX = x - this.diff.x;
    let newY = y - this.diff.y;

    this.cardRef.current.style.left = newX + "px";
    this.cardRef.current.style.top = newY + "px";
    this.props.onUpdatePosition(this.props.id, newX, newY);
  }

  onMouseUp(event) {
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("mouseup", this.onMouseUp);
    this.props.onDrop(this.props.id);
  }

  deleteCard() {
    this.props.removeItem(this.props.id);
  }

  render() {
    return (
      <div
        className={
          "card " + this.props.color + (this.props.done ? " finished" : "")
        }
        style={{
          top: this.props.top,
          left: this.props.left
        }}
        onMouseDown={this.onMouseDown}
        ref={this.cardRef}
      >
        <div className={this.props.done ? "star" : "hide-star"}>
          <img src="/img/golden-star.svg" />
        </div>
        <p>{this.props.value}</p>

        <a onClick={this.deleteCard}>delete</a>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  top: PropTypes.number,
  left: PropTypes.number,
  removeItem: PropTypes.func,
  onUpdatePosition: PropTypes.func,
  onDrop: PropTypes.func,
  done: PropTypes.bool
};

export default Card;
