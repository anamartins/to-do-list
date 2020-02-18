import React from "react";
import ReactDOM from "react-dom";
import Text from "/components/text";
import Card from "/components/card";
import "./style.scss";

const CONST_INITIAL_TOP = 370;
const CONST_INITIAL_LEFT = 270;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };

    let localStorageCards = localStorage.getItem("cards");
    let cards = [];
    if (localStorageCards !== null) {
      cards = JSON.parse(localStorageCards);
    }
    this.state.cards = cards;

    this.addItem = this.addItem.bind(this);
  }

  addItem(value, color) {
    let card = this.state.cards;
    card.push({
      text: value,
      color: color,
      top: CONST_INITIAL_TOP,
      left: CONST_INITIAL_LEFT
    });

    let cardsStringfied = JSON.stringify(card);
    localStorage.setItem("cards", cardsStringfied);

    this.setState({ cards: card });
  }

  createCard() {
    let items = [];
    for (let i = 0; i < this.state.cards.length; i++) {
      items.push(
        <Card
          key={i}
          value={this.state.cards[i].text}
          color={this.state.cards[i].color}
          top={this.state.cards[i].top}
          left={this.state.cards[i].left}
        />
      );
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
