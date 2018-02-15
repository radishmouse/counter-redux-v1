import React from 'react';
import Counter from './Counter';

// CounterList is a dumb component,
// working only from props.
const CounterList = (props) => {

  // Produce an array of Counter components
  // from the props.counters array
  const counterList = props.counters.map( (c, i) => {
    return (
      <Counter
        key={i}
        count={c.count}
        increment={ () => {
          props.increment(i);
        }}
        decrement={ () => {
          props.decrement(i);
        }}
        remove={ () => {
          props.remove(i);
        }}
      />
    );
  });

  // Output our counterList as part of the returned JSX
  return (
    <div>
      <button onClick={props.add}>
        Add Counter
      </button>
      {counterList}
    </div>
  );
};

export default CounterList;