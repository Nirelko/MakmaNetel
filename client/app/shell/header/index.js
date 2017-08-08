import {connect} from 'react-redux'

import Header from './header'
import {searchChanged} from './header.redux'

export default connect(
  ({searchRecentEvents}) => ({
    searchRecentEvents
  }),
  dispatch => ({
    onSearchChanged ({target}) {
      return dispatch(searchChanged(target.value));
    }
  })
)(Header);