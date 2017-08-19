import React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton, TextField } from 'material-ui';

export default ({onSearchChanged, searchRecentEvents}) => (
  <div>
    <TextField id='searchInput' floatingLabelText='Search' onChange={onSearchChanged} />
    <Link to={{pathname: 'search', search: `?name=${searchRecentEvents}`}}>
      <RaisedButton label='Search' primary />
    </Link>
  </div>
);
