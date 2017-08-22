import { createActions, handleActions } from 'redux-actions';

export const { querySearched } = createActions({
  QUERY_SEARCHED: searchedText => ({
    request: {
      url: '/search-events',
      params: {
        searchedText
      }
    }
  })
});

export default handleActions({
  [querySearched]: (state, {payload: {request: {params: { searchedText }}}}) => {
    console.log(`Requested: ${searchedText}`);

    return state;
  },
  [`${querySearched}_SUCCESS`]: (state, {payload: {data: events}}) => {
    console.log(events);

    return events;
  }
}, []);