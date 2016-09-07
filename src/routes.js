import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Blog from './containers/Blog';
import BlogDetail from './components/BlogDetail'
export default (
	<Route path = "/" component = {App}>
		<Route path = "/home" component = {Home}/>
		<Route path = "/about" component = {About} />
		<Route path = "/blog" component = {Blog}/>
		<Route path = "/blog_detail/:id" component = {BlogDetail}/>
		<IndexRoute component = {Home} />
	</Route>
)
