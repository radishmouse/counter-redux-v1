import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './CounterListContainer';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {
  INCREMENT,
  DECREMENT,
  ADD_COUNTER,
  REMOVE_COUNTER
} from './actions';



/*
My state should look like this:

{
  counters: [
    {
      count: 0
    }
  ]
}
*/

/*
My actions will be:

{ type: 'INCREMENT', payload: 0 }
{ type: 'DECREMENT', payload: 0 }
{ type: 'ADD_COUNTER' }
{ type: 'REMOVE_COUNTER', payload: 0 }
*/

// const actionIncrement = () => {
//   return { type: 'INCREMENT' }
// };

// const actionDecrement = () => {
//   return { type: 'DECREMENT' }
// };

const initialState = {
  counters: [
    {
      count: 0
    }
  ]
};

const counters = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  // action.payload is the array index to
  // modify for INCREMENT, DECREMENT, and REMOVE_COUNTER
  switch (action.type) {
    case INCREMENT:
      // We always return something shaped exactly like
      // our ideal state
      return {
        counters: state.counters.map( (c, i) => {
          if (action.payload === i) {
            return {
              count: c.count + 1
            }
          } else {
            return c;
          }
        })
      }
    case DECREMENT:
      return {
        counters: state.counters.map( (c, i) => {
          if (action.payload === i) {
            return {
              count: c.count - 1
            }
          } else {
            return c;
          }
        })
      }
    case ADD_COUNTER:
      return {
        // The `...` spread operator says:
        // "in this spot, put all the elements of the array"
        // Then, we can just tack on an additional { count: 0 } element
        counters: [
          ...state.counters,
          {
            count: 0
          }
        ]
      }
    case REMOVE_COUNTER:
      return {
        counters: state.counters.filter( (c, i) => {
          // return true if this is *not* the array index
          // of the one we want to remove
          return (action.payload !== i);
          // This will result in a new array containing
          // all the previous elements *except* the one
          // we want to remove.
        })
      }
    default:
      return state;
  }
}

// not using this one right now
const counter = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}

// create the store with our `counters` reducer
// that knows how to work with multiple counters
const store = createStore(counters,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe( () => {
//   console.log(`The state is now: ${store.getState().count}`);
//   ReactDOM.render(
//     <Counter
//       count={store.getState().count}
//       increment={() => {
//         store.dispatch(actionIncrement())
//       }}
//       decrement={ () => {
//         store.dispatch(actionDecrement())
//       } }
//     />, document.getElementById('root'));
// })

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
