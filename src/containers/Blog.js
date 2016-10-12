import React, {Component} from 'react'
import BlogItem from '../components/BlogItem'
import {connect} from 'react-redux'
import CircularProgress from 'material-ui/lib/circular-progress'
import '../style/blog.scss'
import { fetchIssue } from '../redux/action'
import map from 'lodash/map'
class Blog extends Component {
	constructor (props) {
		super(props)
	}
	componentWillMount () {
		this.props.dispatch(fetchIssue())
	}
	render(){
			const blogs = this.props.issues.blogs
			if (blogs) {
				return (
					<div className="blog">
							{map(blogs, (val, index) =>  <BlogItem blog={val} key={index + Date.now()} />)}
					</div>
				)
			} else {
				return <div className="loading" />
			}
	}
}

export default connect(state => state)(Blog)
