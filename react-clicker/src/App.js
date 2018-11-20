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
    highScore: 0,
    clickedHeroes: []
  }

  clickedHero = (id) => {
    // If the hero has already been chosen, reset game
    if (this.state.clickedHeroes.includes(id)){
      this.setState({currentScore: 0, clickedHeroes: []})
    } 
      // If the hero hasn't been clicked yet, increase score and add that hero to the clickedHeroes array
      else {
      this.setState({currentScore: this.state.currentScore + 1})
      this.setState({clickedHeroes: [...this.setState.clickedHeroes, id]})
      // Set high score to equal the highest score
      if (this.state.currentScore > this.state.highScore) { 
        this.setState({highScore: this.state.currentScore + 1})}
    }
  }

  shuffleCards = () => {
    console.log("Shuffled")
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
