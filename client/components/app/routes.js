import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Recent from '../recent';
import Search from '../search-results';

export default function MainRoutes() {
    return (
        <Switch>
            <Route exact path='/' component={Recent}/>
            <Route path='/search' component={Search}/>
        </Switch>
    );
}