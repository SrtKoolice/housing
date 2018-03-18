import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./bootstrap');
require('./components/Main');
import Main from './components/Main';

// So ya, this is what pulls in the base component 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
