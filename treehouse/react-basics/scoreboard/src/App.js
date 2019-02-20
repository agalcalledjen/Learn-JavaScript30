import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// array of players
// normally, we would fetch this data elsewhere such as using api
// const players = [
//   {
//     name: 'Guil',
//     score: 50
//   },
//   {
//     name: 'Treasure',
//     score: 85
//   },
//   {
//     name: 'Ashley',
//     score: 95
//   },
//   {
//     name: 'James',
//     score: 80
//   }
// ];

// header component
// written w/o arrow fx
/* function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className='stats'>Players: 1</span>
    </header>
  );
} */

// shorthand
// written with arrow fx
const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='stats'>Players: {props.totalPlayers}</span>
    </header>
  );
};

// player component
const Player = props => {
  return (
    <div className='player'>
      <span className='player-name'>{props.name}</span>
      <Counter />
    </div>
  );
};

// counter component
class Counter extends Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  };

  decrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score - 1
    }));
  };

  render() {
    return (
      <div className='counter'>
        <button
          className='counter-action decrement'
          onClick={this.decrementScore}
        >
          {' '}
          -{' '}
        </button>
        <span className='counter-score'>{this.state.score}</span>
        <button
          className='counter-action increment'
          onClick={this.incrementScore}
        >
          {' '}
          +{' '}
        </button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'Guil',
          id: 1
        },
        {
          name: 'Treasure',
          id: 2
        },
        {
          name: 'Ashley',
          id: 3
        },
        {
          name: 'James',
          id: 4
        }
      ]
    };
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title='Scoreboard' totalPlayers={this.state.players.length} />
        {/* Players List */}
        {this.state.players.map(player => (
          <Player name={player.name} key={player.id.toString()} />
        ))}
      </div>
    );
  }
}

export default App;
