import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';

/*
My state should look like this:

{
  count: 0
}
*/

/*
My actions will be:

{ type: 'INCREMENT' }
{ type: 'DECREMENT' }
*/

const actionIncrement = () => {
  return { type: 'INCREMENT' }
};

const actionDecrement = () => {
  return { type: 'DECREMENT' }
};

const initialState = {
  count: 0
};

const counter = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}

const store = createStore(counter);

store.subscribe( () => {
  console.log(`The state is now: ${store.getState().count}`)
})


class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <button onClick={ () => {
            store.dispatch(actionDecrement())
          } }>-</button>
          0
          <button onClick={ () => {
            store.dispatch(actionIncrement())
          }}>+</button>
        </p>
      </div>
    );
  }
}

export default App;
