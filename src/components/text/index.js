import React from "react";
import PropTypes from "prop-types";
import Radio from "../radio-button";

import "./style.scss";

class Text extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      postitsColors: ["pink", "blue", "yellow", "green", "orange"],
      selectedColor: "pink"
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ value: event.target.value });
  }

  onKeyPress(event) {
    if (event.key === "Enter") {
      this.onClickButton();
    }
  }

  onClickButton() {
    this.props.addItem(this.state.value, this.state.selectedColor);
    this.setState({ value: "" });
  }

  onColorChange(color) {
    console.log("color: ", color);
    this.setState({ selectedColor: color });
  }

  createRadio() {
    let radioButtons = [];
    for (let i = 0; i < this.state.postitsColors.length; i++) {
      radioButtons.push(
        <Radio
          key={i}
          color={this.state.postitsColors[i]}
          selectedColor={this.state.selectedColor}
          onChange={this.onColorChange}
        />
      );
    }
    return radioButtons;
  }

  render() {
    return (
      <div className="insert">
        <div className="card-data">
          <input
            className="text"
            placeholder="write here you very adult task"
            type="text"
            value={this.state.value}
            onChange={this.onInputChange}
            onKeyPress={this.onKeyPress}
          ></input>
          <div className="radio-group">{this.createRadio()}</div>
        </div>
        <div className="btnAdd">
          <button type="button" onClick={this.onClickButton}>
            add item
          </button>
        </div>
      </div>
    );
  }
}

Text.propTypes = {
  addItem: PropTypes.func
};

export default Text;
