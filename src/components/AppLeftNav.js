import React, {Component} from 'react';
import LeftNav from 'material-ui/lib/left-nav';
class AppLeftNav extends Component {
	constructor(props){
		super(props);
		this.state={
			open:false
		}
	}

	render(){
		return (
			<LeftNav open={this.state.open}
				docked={false}
				onRequestChange={open=>this.setState({open})}
			/>
		)
	}

	handleToggle(){
		this.setState({
			open:!this.state.open
		})
	}
}

export default AppLeftNav;