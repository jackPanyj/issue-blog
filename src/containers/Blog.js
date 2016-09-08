import React, {Component} from 'react';
import session from '../tools/session'
import urls from '../tools/urls'
import BlogItem from '../components/BlogItem'
import {connect} from 'react-redux'
import CircularProgress from 'material-ui/lib/circular-progress'
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
				<div className="blog markdown-body">
					{blogs ? blogs.map((val, index) => <div className="blog-item"  key={index + Math.random()}><BlogItem blog={val}/></div>) : <div style={{margin:'auto'}}><CircularProgress size={2}/></div>}
				</div>
			)
	}
}

export default connect(state => state)(Blog)
