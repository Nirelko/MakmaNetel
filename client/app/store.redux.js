import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

import searchRecentEvents from './shell/header/header.redux';

export default createStore(combineReducers({
  searchRecentEvents,
  form
}),
applyMiddleware(
  axiosMiddleware(axios.create({
    baseURL: 'http://localhost:8080/api'
  }))
));
