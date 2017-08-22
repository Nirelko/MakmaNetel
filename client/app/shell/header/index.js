import {connect} from 'react-redux';

import Header from './header';
import {searchChanged} from './redux';

export default connect(
  ({searchRecentEvents: { searchText }}) => ({
    searchText
  }),
  dispatch => ({
    onSearchChanged ({target: {value: searchText}}) {
      return dispatch(searchChanged(searchText));
    }
  })
)(Header);