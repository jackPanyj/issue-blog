import React, {Component} from 'react'
import BlogItem from '../components/BlogItem'
import {connect} from 'react-redux'
import CircularProgress from 'material-ui/lib/circular-progress'
import '../style/blog.scss'
import { fetchIssue } from '../redux/action'
import map from 'lodash/map'
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import storage from '../tools/storage'

class Blog extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}
	componentWillMount () {
		this.props.dispatch(fetchIssue())
	}
	handleSubmit (e) {
		e.preventDefault()
		const username = this.refs.account.getValue().trim()
		const repo = this.refs.repo.getValue().trim()
		if (!username) {
			this.setState({
				accountError: '账号不能为空'
			})
			return
		} else {
			this.setState({
				accountError: undefined
			})
		}
		if (!repo) {
			this.setState({
				repoError: '仓库不能为空'
			})
			return
		} else {
			this.setState({
				repoError: undefined
			})
		}
		storage.set('userInfo', {username, repo})
		window.location.reload()
	}

	getForm () {
		return (
			<form className="replace-blog-account" onSubmit={this.handleSubmit.bind(this)}>
				<div className="input-account">
					<TextField hintText="请输入github的账号，如 cssmagic" ref="account" errorText={this.state.accountError}/>
				</div>
				<div className="input-repo">
					<TextField hintText="请输入该账号的仓库, 如 blog" ref="repo" errorText={this.state.repoError}/>
				</div>
				<div className="input-button">
					<RaisedButton label="SEARCH" primary={true} type="submit" />
				</div>
			</form>
		)
	}

	render(){
			const {blogs, status, message} = this.props.issues
			if (status === 'success') {
				return (
					<div>
						{this.getForm()}
						<div className="blog">
								{map(blogs, (val, index) =>  <BlogItem blog={val} key={index + Date.now()} />)}
						</div>
					</div>
				)
			} else if(status === 'error') {
				return (
					<div className="blog-error">
						{this.getForm()}
						<h1>{message}</h1>
					</div>
				)
			} else {
				return <div className="loading" />
			}
	}
}

export default connect(state => state)(Blog)
