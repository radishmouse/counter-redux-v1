import { connect } from 'react-redux';
import CounterList from './CounterList';

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