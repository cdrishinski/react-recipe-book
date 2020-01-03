import React from 'react';
import './App.css';
import Title from './components/Title'
import Steps from './components/Steps'
import Ingredients from './components/Ingredients'
// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookieBite } from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon className="App-logo fa-6x" icon={faCookieBite} />
        <Title title={data.name} />
        <div>
          <Ingredients list={data.ingredients} className="x" />
          <Steps list={data.steps} className="x" />
        </div>
      </header>
    </div>
  );
}

export default App;
