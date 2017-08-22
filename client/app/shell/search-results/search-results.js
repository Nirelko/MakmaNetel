import React, { Component } from 'react';
import URLSearchParams from 'url-search-params';

export default class SearchResults extends Component {
  componentDidMount () {
    const { location, onQuerySearched } = this.props;

    onQuerySearched(new URLSearchParams(location.search).get('name'));
  }

  render () {
    const searchedName = new URLSearchParams(location.search).get('name');

    return (
      <div>
        <span>You searched for the name: {searchedName}</span>
      </div>
    );
  }
}
