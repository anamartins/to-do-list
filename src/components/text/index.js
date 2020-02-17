import React from "react";
import PropTypes from "prop-types";

class Text extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ value: event.target.value });
  }

  onClickButton() {
    this.props.addItem();
  }

  render() {
    return (
      <div className="insert">
        <input
          placeholder="write here you very adult task"
          type="text"
          value={this.state.value}
          onChange={this.onInputChange}
        ></input>
        <button type="button" onClick={this.onClickButton()}>
          add item
        </button>
      </div>
    );
  }
}

Text.propTypes = {
  addItem: PropTypes.func
};

export default Text;
