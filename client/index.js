import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';

import App from './components/app/index';

const rootId = 'root';

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById(rootId)
);

if (module.hot) {
    const shellRoute = './components/app/index';

    module.hot.accept(shellRoute, () => {
        const NextApp = require(shellRoute).default;
        ReactDOM.render(<AppContainer><NextApp /></AppContainer>,
            document.getElementById(rootId));
    });
}