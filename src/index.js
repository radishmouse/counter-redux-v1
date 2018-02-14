import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


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
  console.log(`The state is now: ${store.getState().count}`);
  ReactDOM.render(
    <App
      count={store.getState().count}
      increment={() => {
        store.dispatch(actionIncrement())
      }}
      decrement={ () => {
        store.dispatch(actionDecrement())
      } }
    />, document.getElementById('root'));
})

ReactDOM.render(
  <App
    count={store.getState().count}
    increment={() => {
      store.dispatch(actionIncrement())
    }}
    decrement={ () => {
      store.dispatch(actionDecrement())
    } }
  />, document.getElementById('root'));
registerServiceWorker();
