import { connect } from 'react-redux';
import Counter from './Counter';

import {
  actionIncrement,
  actionDecrement,
} from './actions';


const mapStateToProps = (state) => {
  return {
    count: state.count
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (i) => {
      console.log('looks like you want to increment, bro.');
      dispatch(actionIncrement(i));
    },
    decrement: (i) => {
      console.log('looks like you want to decrement, bro.');
      dispatch(actionDecrement(i));
    }
  }
};

/*
const connections = connect(mapStateToProps, mapDispatchToProps);
const CounterContainer = connections(Counter);
*/

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterContainer;