import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';



import 'semantic-ui-css/semantic.min.css';
import 'animate.css/animate.min.css';
import 'typeface-roboto';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'));
