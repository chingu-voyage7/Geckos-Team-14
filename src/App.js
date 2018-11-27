import React, { Component } from 'react';
import MainMenu from './Components/MainMenu';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu menuState={false}/>
      </div>
    );
  }
}

export default App;
