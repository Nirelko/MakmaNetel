import React, {Component} from 'react'
import URLSearchParams from 'url-search-params';

export default class SearchResults extends Component {
    render() {
        const searchedName = new URLSearchParams(this.props.location.search).get('name');
        return (
          <div>
              <span>You searched for the name: {searchedName}</span>
          </div>
        );
    }
}