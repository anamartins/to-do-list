import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Radio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="radio-item">
        <input type="radio" name={this.props.color} />
        <label>{this.props.color}</label>
      </div>
    );
  }
}

Radio.propTypes = {
  color: PropTypes.string
};

export default Radio;
