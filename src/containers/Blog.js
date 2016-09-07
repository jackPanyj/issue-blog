import React, {Component} from 'react';
import session from '../tools/session'
import urls from '../tools/urls'
import BlogItem from '../components/BlogItem'
import {connect} from 'react-redux'
import '../style/blog.scss'
import { fetchIssue } from '../redux/action'
class Blog extends Component {
	constructor (props) {
		super(props)
	}
	componentWillMount () {
		this.props.dispatch(fetchIssue())
	}
	render(){
			const blogs = this.props.handleIssue.blogs
      return (
				<div className="blog">
					{blogs ? blogs.map((val, index) => <div className="blog-item"  key={index + Math.random()}><BlogItem blog={val}/></div>) : <h1>hello</h1>}
				</div>
			)
	}
}

export default connect(state => state)(Blog)
