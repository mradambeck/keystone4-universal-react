import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'
import routes from '../both/routes';
import reducers from '../both/reducers';
import { ReduxAsyncConnect } from 'redux-connect';

const initialState = window.__INITIAL_STATE;

const store = createStore(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router
      routes={routes}
      history={browserHistory}
      render={(props) => <ReduxAsyncConnect {...props}/>}
    />
  </Provider>,
  document.getElementById('app')
);
