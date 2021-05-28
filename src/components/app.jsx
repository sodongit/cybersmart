import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './main.jsx'
import 'regenerator-runtime/runtime';

function render() {
    ReactDOM.render(<Main/>, document.body);
}

render();