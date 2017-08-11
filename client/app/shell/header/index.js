import {connect} from 'react-redux'

import Header from './header'
import {searchChanged} from './header.redux'

export default connect(
  ({searchRecentEvents}) => ({
    searchRecentEvents
  }),
  dispatch => ({
    onSearchChanged ({target: {value : searchText}}) {
      return dispatch(searchChanged(searchText));
    }
  })
)(Header);