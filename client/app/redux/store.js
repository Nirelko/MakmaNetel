import { createStore, combineReducers } from 'redux'

import searchRecentEvents from '../shell/header/redux/index'

export default createStore(combineReducers({searchRecentEvents}));