import React, {Component} from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from '../header/index';
import MainRoutes from './routes'

export default class Shell extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainRoutes />
            </div>);
    }
}