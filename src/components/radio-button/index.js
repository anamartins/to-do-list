import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultColor: "pink"
    };
  }

  render() {
    return (
      <div className="radio-item">
        <input
          type="radio"
          name="color"
          value={this.props.color}
          onChange={() => this.props.onChange(this.props.color)}
          checked={this.props.color === this.props.selectedColor}
        />
        <label htmlFor={this.props.color} className={this.props.color}>
          {this.props.color}
        </label>
      </div>
    );
  }
}

Radio.propTypes = {
  color: PropTypes.string,
  selectedColor: PropTypes.string,
  onChange: PropTypes.func
};

export default Radio;
