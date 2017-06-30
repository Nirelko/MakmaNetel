import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import 'react-hot-loader/patch';

import 'roboto-fontface/css/roboto/sass/roboto-fontface-light.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-regular.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-medium.scss';

import {AppContainer} from 'react-hot-loader';

import App from './app';

const rootId = 'root';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById(rootId)
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./app/index', () => { render(App) });
}