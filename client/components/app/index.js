import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import Shell from './shell';

export default function App() {
    return (
        <BrowserRouter>
            <Shell />
        </BrowserRouter>
    );
}