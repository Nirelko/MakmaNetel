import {connect} from 'react-redux';

import SearchResults from './search-results';
import { querySearched } from './redux';

export default connect(
  ({searchResults: events}) => ({
    events
  }),
  dispatch => ({
    onQuerySearched (searchText) {
      return dispatch(querySearched(searchText));
    }
  })
)(SearchResults);