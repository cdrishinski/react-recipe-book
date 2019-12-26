import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Ingredients from './components/Ingredients'

const data = {
  'name': 'Baked Salmon',
  'ingredients': [
    {'name':'Salmon', 'amount':1, 'measurement': 'lb'},
    {'name':'Pine Nuts', 'amount': 1, 'measurement': 'cup'}
  ],
  'steps': [
    'preheat oven to 350 degrees.',
    'Spread the olive oil around a glass baking dish.',
    'Add the salmon, garlic, and pin nuts to the dish.'
  ]
}


// const Recipe = ({ name, ingredients, steps }) =>
//   <section id={name.toLowerCase().replace(//g, "-")}>


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title={data.name}/>
        <Ingredients list={data.ingredients} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
