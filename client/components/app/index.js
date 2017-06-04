import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider} from 'material-ui';
import {getMuiTheme} from 'material-ui/styles'
import theme from './theme';


import Shell from './shell';

export default function App() {
    return (
        <BrowserRouter>
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
                <Shell />
            </MuiThemeProvider>
        </BrowserRouter>
    );
}