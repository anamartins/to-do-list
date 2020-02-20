import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.showModal(false);
  }

  render() {
    return (
      <div className="modal">
        <button className="close" onClick={this.onButtonClick}>
          X
        </button>
        <h1>Hooray!</h1>
        <p> You've completed all the tasks!</p>
        <p>Share this archievement:</p>
      </div>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.func
};

export default Modal;
