import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import Cookies from 'js-cookie';

import thunk from 'redux-thunk';
import { TAbleBefore } from './reducer/beforeTableReducer';

const beforetableJson = Cookies.getJSON('beForesave') || [];

const intialState = { beforeTable: { beforetableJson } };

const reducer = combineReducers({
  beforeTable: TAbleBefore,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  intialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
