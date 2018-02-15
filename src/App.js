import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CounterList from './CounterListContainer';
import { counters } from './reducers';

const store = createStore(counters,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterList />
      </Provider>
    );
  }
}

export default App;
