import React from "react";
import { TwitterShareButton } from "react-twitter-embed";
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
        <img src="/img/archievement.svg" />
        <p>You're free! Enjoy it!</p>
        <TwitterShareButton
          url={""}
          options={{
            text:
              "Hooraaaay! I have finished all my tasks for today. I'm winning at adulthood!",
            size: "large"
          }}
        />
      </div>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.func
};

export default Modal;
