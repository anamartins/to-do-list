import React from "react";
import ReactDOM from "react-dom";
import Text from "/components/text";
import Card from "/components/card";
import "./style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  addItem() {}

  render() {
    return (
      <div className="everything">
        <h1>Winning Adulthood</h1>
        <Text addItem={this.addItem} />
        <div className="board">
          <Card />
          <div className="doing"></div>
          <div className="todo"></div>
          <div className="done"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
