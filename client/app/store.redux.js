import { createStore, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import searchRecentEvents from './shell/header/header.redux'

export default createStore(combineReducers({
  searchRecentEvents,
  form
}));
