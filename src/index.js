import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './components/index';
import * as InitialStates from './lib/initialStates';
import { productReducer } from './store/reducers/index';

const combRed = combineReducers({
  products: productReducer
})

const store = createStore(
  combRed, 
  { products: InitialStates.products },
  applyMiddleware(thunkMiddleware)
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('root'));
