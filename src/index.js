import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
import './index.css';
import Clock from './App';
import * as serviceWorker from './serviceWorker';
const target = document.getElementById('react-container')

render(
    <Clock onClose={() => unmountComponentAtNode(target) }/>,
    target
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
