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
    this.doneRef = React.createRef();

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
    this.removeItem = this.removeItem.bind(this);
    this.updateCardPosition = this.updateCardPosition.bind(this);
    this.onCardDrop = this.onCardDrop.bind(this);
  }

  addItem(value, color) {
    let cards = this.state.cards;
    cards.push({
      id: this.generateCardID(),
      text: value,
      color: color,
      top: CONST_INITIAL_TOP + Math.floor(Math.random() * 100),
      left: CONST_INITIAL_LEFT + Math.floor(Math.random() * 100),
      done: false
    });

    this.updateLocalStorage();
    this.setState({ cards: cards });
  }

  removeItem(id) {
    let cards = this.state.cards;
    let index = cards.findIndex(item => item.id === id);

    cards.splice(index, 1);
    this.updateLocalStorage();
    this.setState({ cards: cards });
  }

  updateLocalStorage() {
    let cards = this.state.cards;
    let cardsStringfied = JSON.stringify(cards);
    localStorage.setItem("cards", cardsStringfied);
  }

  onCardDrop(id) {
    let cards = this.state.cards;
    let rectDone = this.doneRef.current.getBoundingClientRect();

    cards = cards.map(item => {
      if (item.id === id) {
        if (item.top > rectDone.top && item.top < rectDone.bottom) {
          if (item.left > rectDone.left && item.left < rectDone.right) {
            item.done = true;
          } else {
            item.done = false;
          }
        }
      }
      return item;
    });
    this.setState({ cards: cards });
    this.updateLocalStorage();
  }
  updateCardPosition(id, xPos, yPos) {
    let cards = this.state.cards;

    cards = cards.map(item => {
      if (item.id === id) {
        item.top = yPos;
        item.left = xPos;
      }
      return item;
    });
    this.setState({ cards: cards });
    this.updateLocalStorage();
  }

  generateCardID() {
    let id =
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9);
    return id;
  }

  createCard() {
    let items = [];
    for (let i = 0; i < this.state.cards.length; i++) {
      items.push(
        <Card
          key={i}
          id={this.state.cards[i].id}
          value={this.state.cards[i].text}
          color={this.state.cards[i].color}
          top={this.state.cards[i].top}
          left={this.state.cards[i].left}
          removeItem={this.removeItem}
          onUpdatePosition={this.updateCardPosition}
          onDrop={this.onCardDrop}
          done={this.state.cards[i].done}
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
          <div className="cards"> {this.createCard()}</div>
          <div className="todo">
            <h2>to-do</h2>
          </div>
          <div className="done" ref={this.doneRef}>
            <h2>done!</h2>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
