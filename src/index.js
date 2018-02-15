import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { createStore } from 'redux';

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

{ type: 'ADD_COUNTER' }
{ type: 'REMOVE_COUNTER', payload: 0 }
{ type: 'INCREMENT', payload: 0 }
{ type: 'DECREMENT', payload: 0 }

*/

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_COUNTER = 'ADD_COUNTER';
const REMOVE_COUNTER = 'REMOVE_COUNTER';

const actionIncrement = (arrayIndex) => {
  return { type: INCREMENT, payload: arrayIndex}
};

const actionDecrement = (arrayIndex) => {
  return { type: DECREMENT, payload: arrayIndex }
};

const actionAddCounter = () => {
  return { type: ADD_COUNTER }
};

const actionRemoveCounter = (arrayIndex) => {
  return { type: REMOVE_COUNTER, payload: arrayIndex }
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
  switch (action.type) {
    case ADD_COUNTER:
      return {
        counters: state.counters.concat({
          count: 0
        })
      }
    case REMOVE_COUNTER:
      return {
        counters: state.counters.filter( (c, i) => {
          // return (i !== action.payload);
          if (i !== action.payload) {
            return true;
          } else {
            return false;
          }
        })
      }
    case INCREMENT:
      return {
        counters: state.counters.map( (c, i) => {
          if (i === action.payload) {
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
          if (i === action.payload) {
            return {
              count: c.count - 1
            }
          } else {
            return c;
          }
        })
      }
    default:
      return state;
  }
}



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

const store = createStore(counters,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const createCounterComponents = () => {
  return store.getState().counters.map( (c, i) => {
    return (
      <App
      count={c.count}
      increment={() => {
        store.dispatch(actionIncrement(i))
      }}
      decrement={ () => {
        store.dispatch(actionDecrement(i))
      } }
      remove={ () => {
        store.dispatch(actionRemoveCounter(i))
      }}
    />
    );
  });
}

store.subscribe( () => {
  ReactDOM.render(
    <div>
      <button onClick={ () => {
        store.dispatch(actionAddCounter())
      }}>
        Add Counter
      </button>
      {createCounterComponents()}
    </div>,
  document.getElementById('root'));
})

ReactDOM.render(
  <div>
    <button onClick={ () => {
      store.dispatch(actionAddCounter())
    }}>
      Add Counter
    </button>

    {createCounterComponents()}
  </div>,
  document.getElementById('root'));


registerServiceWorker();
