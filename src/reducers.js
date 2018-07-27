import {
  INCREMENT,
  DECREMENT,
  ADD_COUNTER,
  REMOVE_COUNTER
} from './actions';


const initialState = {
  counters: [
    {
      count: 0
    }
  ]
};

export const counters = (state, action) => {
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
/*
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
*/