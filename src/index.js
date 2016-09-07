import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import {Router, hashHistory} from 'react-router';
import routes from './routes.js';

render(
	<Router history={hashHistory}>
		{routes}
	</Router>,
	 document.getElementById('root'));
