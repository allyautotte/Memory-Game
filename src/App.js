import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  state = {
    friends,
    count: 0
  };

  componentWillMount = () => {
    this.setState({ friends: this.shuffleArray(this.state.friends)});
  }

  handleIncorrectGuess = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };

  resetData = friends => {
    const resetData = friends.map(item => ({ ...item, clicked: false}));
    return this.shuffleArray(resetData);  
  }

  handleClicks = () => {
    this.setState({ friends: this.friends });
  }

  score = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.id);
  }

  shuffleArray = array => {
    let i = friends.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i--;
  }
  return array;
}
  
  render() {

    return (
      <div>
      <Navbar
        count={this.state.count}
      />
      <Header />
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            score={this.score}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            onClick={this.handleClicks}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;