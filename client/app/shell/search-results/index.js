import React from 'react'
import URLSearchParams from 'url-search-params';

export default ({location}) => {
    const searchedName = new URLSearchParams(location.search).get('name');

    return (
        <div>
            <span>You searched for the name: {searchedName}</span>
        </div>
    );
};
