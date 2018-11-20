import React, { Component } from 'react';
import HeroCard from "./components/HeroCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import heroes from "./heroes.json"
import './App.css';

class App extends Component {
  state = {
    heroes,
    currentScore: 0,
    highScore: 0
  }

  heroChoice = id => {

  }

  render() {
    return (
      <Wrapper>
        <Nav
          currentScore = {this.state.currentScore}
          highScore = {this.state.highScore}
        />
        {this.state.heroes.map(hero => (
          <HeroCard
            id={hero.id}
            key={hero.id}
            name={hero.name}
            image={hero.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
