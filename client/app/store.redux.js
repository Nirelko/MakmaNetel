import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

import searchRecentEvents from './shell/header/redux';
import searchResults from './shell/search-results/redux';

export default createStore(combineReducers({
  searchRecentEvents,
  searchResults,
  form
}),
applyMiddleware(
  axiosMiddleware(axios.create({
    baseURL: '/api'
  }))
));
