import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './IndecisionApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
registerServiceWorker();
