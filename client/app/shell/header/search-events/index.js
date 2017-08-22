import React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton, TextField } from 'material-ui';

export default ({onSearchChanged, searchText}) => (
  <div>
    <TextField id='searchInput' floatingLabelText='Search' onChange={onSearchChanged} />
    <Link to={{pathname: 'search', search: `?name=${searchText}`}}>
      <RaisedButton label='Search' primary />
    </Link>
  </div>
);
