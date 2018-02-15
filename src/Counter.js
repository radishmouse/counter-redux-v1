import React from 'react';

// Counter is a dumb component,
// working only from props.
const Counter = (props) => {
  return (
    <div>
      <p>
        <button onClick={props.decrement}>-</button>
        {props.count}
        <button onClick={props.increment}>+</button>
        <br />
        <button onClick={props.remove}>x</button>
      </p>
    </div>
  );
}

export default Counter;
