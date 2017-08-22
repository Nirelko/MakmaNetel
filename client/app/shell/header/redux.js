import { createActions, handleActions } from 'redux-actions';

export const { searchChanged } = createActions('SEARCH_CHANGED');

export default handleActions({
  [searchChanged]: (state, { payload: searchText }) => ({
    searchText
  })
}, {});