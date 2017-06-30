import React from 'react'
import {Link} from 'react-router-dom';
import {TextField, RaisedButton} from 'material-ui';

export default ({onSearchChanged, searchRecentEvents}) => (
    <div>
        <TextField id="searchInput" floatingLabelText="search" onChange={onSearchChanged}/>
        <Link to={{pathname: 'search', search: `?name=${searchRecentEvents}`}}>
            <RaisedButton label="Search" primary={true}/>
        </Link>
    </div>
);
