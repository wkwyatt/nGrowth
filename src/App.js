import React, { Component } from 'react';
import './App.css';

import store from './store/configureStore';
import { Provider } from 'react-redux';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
