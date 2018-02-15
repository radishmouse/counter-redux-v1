export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD_COUNTER = 'ADD_COUNTER'
export const REMOVE_COUNTER = 'REMOVE_COUNTER'


export const actionIncrement = (i) => {
  return { type: INCREMENT, payload: i}
};

export const actionDecrement = (i) => {
  return { type: DECREMENT, payload: i}
};

export const actionAddCounter = () => {
  return { type: ADD_COUNTER }
};

// need to know which counter i'm removing
// from my array of counters.
export const actionRemoveCounter = (i) => {
  return { type: REMOVE_COUNTER, payload: i}
};
