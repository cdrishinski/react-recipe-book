import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Steps from './components/Steps'
import Ingredients from './components/Ingredients'
// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookieBite, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'

const data = {
  'name': 'Baked Salmon',
  'ingredients': [
    { 'name': 'Salmon', 'amount': 1, 'measurement': 'lb' },
    { 'name': 'Pine Nuts', 'amount': 1, 'measurement': 'cup' }
  ],
  'steps': [
    'preheat oven to 350 degrees.',
    'Spread the olive oil around a glass baking dish.',
    'Add the salmon, garlic, and pin nuts to the dish.'
  ]
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon className="App-logo fa-10x" icon={faCookieBite}/>
        <Title title={data.name} />
        <Ingredients list={data.ingredients} />
        <Steps list={data.steps} />
      </header>
    </div>
  );
}

export default App;
