import React from "react";
import ReactDOM from "react-dom";
import Text from "/components/text";
import Card from "/components/card";
import "./style.scss";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(value) {
    let card = this.state.cards;
    card.push({ text: value });
    console.log("card", card);
    this.setState({ cards: card });
  }

  createCard() {
    let items = [];
    for (let i = 0; i < this.state.cards.length; i++) {
      items.push(<Card key={i} value={this.state.cards[i].text} />);
    }
    return items;
  }

  render() {
    return (
      <div className="everything">
        <h1>Winning Adulthood</h1>
        <Text addItem={this.addItem} />
        <div className="board">
          <div className="todo">
            <h2>to-do</h2>
            {this.createCard()}
          </div>
          <div className="done">
            <h2>done!</h2>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
