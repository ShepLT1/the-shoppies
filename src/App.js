import React from 'react';
import logo from './logo.svg';
import { Search } from './features/search/Search';
import { Results } from './features/results/Results';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search />
        <Results />
      </header>
    </div>
  );
}

export default App;
