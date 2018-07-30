import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import avengers from './components/avengersData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by Sawyer Zincone</h1>
        </header>

        <div>
          {this.state.avengers.map(a => (
            <div key={a.realName}>
              <p>
                Name: {a.name} Real Name: {a.realName}
              </p>
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export default App;
