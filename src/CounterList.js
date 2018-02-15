import React from 'react';
import Counter from './Counter';

const CounterList = (props) => {

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