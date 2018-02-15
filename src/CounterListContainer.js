import { connect } from 'react-redux';
import CounterList from './CounterList';

// Our "Smart Container" is just a wiring together of:
// - a function that describes how to translate redux state into the props for the dumb component.
// - a function that describes how to translate calls to redux dispatch into function props for the dumb component.
// - the dumb component that will receive those props.

import {
  actionIncrement,
  actionDecrement,
  actionAddCounter,
  actionRemoveCounter
} from './actions';


const mapStateToProps = (state) => {
  // We return an object that will become
  // the props handed to the dumb component.
  return {
    counters: state.counters
  }
};

const mapDispatchToProps = (dispatch) => {
  // We return an object that will *also*
  // become the props handed to the dumb component.
  // But these props are functions that will be
  // called onClick (or for any other events).
  return {
    increment: (i) => {
      dispatch(actionIncrement(i))
    },
    decrement: (i) => {
      dispatch(actionDecrement(i))
    },
    add: () => {
      dispatch(actionAddCounter())
    },
    remove: (i) => {
      dispatch(actionRemoveCounter(i))
    },
  };
};

const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterList);

export default CounterListContainer;