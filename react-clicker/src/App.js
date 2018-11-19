import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    heroes,
    currentScore=0,
    highScore=0
  }
  render() {
    return (
      <Wrapper>
        <Nav />
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
