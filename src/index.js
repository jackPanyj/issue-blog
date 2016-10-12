import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import {Router, hashHistory, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import routes from './routes.js';
import reducer from './redux/reducer.js'
import {Provider} from 'react-redux'
let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducer,  window.devToolsExtension && window.devToolsExtension())
render(
	<Provider store={store}>
		<Router history={hashHistory}>
			{routes}
		</Router>
  </Provider>,
	 document.getElementById('root'));
