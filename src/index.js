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

const actionIncrement = (id) => {
  return { type: 'INCREMENT', payload: id }
};

const actionDecrement = (id) => {
  return { type: 'DECREMENT', payload: id }
};

const actionAddCounter = () => {
  return { type: 'ADD_COUNTER' }
};

const actionRemoveCounter = (whichCounter) => {
  return { type: 'REMOVE_COUNTER', payload: whichCounter };
};

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

  switch(action.type) {
    case 'ADD_COUNTER':
      console.log('adding counter');
      return {
        counters: [
          ...state.counters,
          {
            count: 0
          }
        ]
      }
    case 'REMOVE_COUNTER':
      console.log(`removing counter ${action.payload}`);
      return {
        counters: state.counters.filter( (c, i) => {
          return action.payload !== i;
        })
      }
    case 'INCREMENT':
      console.log(`incrementing counter ${action.payload}`);
      return {
        counters: state.counters.map( (c, i) => {
          if (action.payload === i) {
            return counter(c, action);
          }
          return c;
        })
      }
    case 'DECREMENT':
      console.log(`decrementing counter ${action.payload}`);
      return {
        counters: state.counters.map( (c, i) => {
          if (action.payload === i) {
            return counter(c, action);
          }
          return c;
        })
      }
    default:
      return state;
  }

};

const counter = (state, action) => {
  if (state === undefined) {
    return initialState[0];
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

const store = createStore(counters);


const createCounters = () => {
  return store.getState().counters.map( (c, i) => {
    return (<App
      key={i}
      count={c.count}
      increment={() => {
        store.dispatch(actionIncrement(i))
      }}
      decrement={ () => {
        store.dispatch(actionDecrement(i))
      }}
      remove={ () => {
        store.dispatch(actionRemoveCounter(i))
      }}
    />)
  })
}



store.subscribe( () => {
  console.log(`The state is now: ${store.getState()}`);
  ReactDOM.render(
    <div>
      <button onClick={() => {
        store.dispatch(actionAddCounter())
      }}>Add Counter</button>
      {createCounters()}
    </div>
, document.getElementById('root'));
})

ReactDOM.render(
  <div>
      <button onClick={() => {
        store.dispatch(actionAddCounter())
      }}>Add Counter</button>
      {createCounters()}
  </div>
, document.getElementById('root'));
registerServiceWorker();

/*
      <button onClick={() => {
        store.dispatch(actionAddCounter())
      }}>Add Counter</button>
      {createCounters()}

*/
