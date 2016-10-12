import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../style/about.scss'
import {fetchUserInfo} from '../redux/action'
import UserInfo from '../components/UserInfo'
class About extends Component {
	constructor(prop) {
		super(prop)
		this.data = this.props.data
	}
	componentWillMount() {
		this.props.dispatch(fetchUserInfo())
	}
	render(){
		let userInfo = this.props.userInfo
		const Content = JSON.stringify(userInfo) === '{}'
			? <div className="loading"/>
		  : <UserInfo userInfo={userInfo}/>
		return (
			<div className="about">
				{Content}
			</div>
		)
	}
}

export default connect(state => state)(About)
