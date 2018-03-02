import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './IndecisionApp';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';

injectGlobal`
	html {
		font-size: 62.5%;
	}

	body {
		font-family: 'Lato', sans-serif;
		box-sizing: border-box;
		line-height: 1.3;
	}

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}
`;

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
registerServiceWorker();
