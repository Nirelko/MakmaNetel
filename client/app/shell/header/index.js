import {connect} from 'react-redux'
import debounce from 'debounce';

import Header from './header';
import {searchChanged} from './redux'

export default connect(
    ({searchRecentEvents}) => ({
        searchRecentEvents
    }),
    dispatch => ({
        onSearchChanged({target}) {
            return debounce(dispatch(searchChanged(target.value)), 300);
        }
    })
)(Header);