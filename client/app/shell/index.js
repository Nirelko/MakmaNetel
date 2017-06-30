import React, {Component} from 'react';
import {Flex} from 'reflexbox';

import Header from './header';
import MainRoutes from './routes'

export default class Shell extends Component {
    render() {
        return (
            <Flex column>
                <Header />
                <MainRoutes />
            </Flex>);
    }
}