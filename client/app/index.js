import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider} from 'material-ui';
import {getMuiTheme} from 'material-ui/styles'
import {Provider} from 'react-redux';

import theme from './theme';
import Shell from './shell/index';
import store from './redux/store';

export default () => (
    <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
            <Provider store={store}>
                <Shell />
            </Provider>
        </MuiThemeProvider>
    </BrowserRouter>
);
