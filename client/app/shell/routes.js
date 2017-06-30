import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Recent from './recent-events/index';
import Search from './search-results/index';

export default function MainRoutes() {
    return (
        <Switch>
            <Route exact path='/' component={Recent}/>
            <Route path='/search' component={Search}/>
        </Switch>
    );
}