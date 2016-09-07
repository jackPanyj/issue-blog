import React,{ Component } from "react";
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
class NavBar extends Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			value: "/home"
		};
	}
	componentWillMount(){
		this.setState({
			value: this._getSelectedIndex()
		})
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			value: this._getSelectedIndex()
		});
	}

	_getSelectedIndex(){
		return this.context.router.isActive('/home')? '/home':
		this.context.router.isActive('/blog')? '/blog':
		this.context.router.isActive('/about')?'/about':'/home';
	}

	_handleTabsChange(value){
		this.context.router.push(value);
	}

  render(){
  	let styles = {
  		tabs: {
  			width: '390px',
  			position: 'absolute',
  			right: '60px',
  			textTransform: 'uppercase'
  		},
  		tab: {
  			height: '60px',
  			color: '#fff'
  		},
  		inkBar: {
  			height: '4px',
  			marginTop: '-4px'
  		}
  	};
    return (
    	<div className="app-header">
    		<Tabs style={styles.tabs} tabItemContainerStyle={{backgroundColor:'transprent'}}
    		 inkBarStyle={styles.inkBar} onChange={this._handleTabsChange.bind(this)} value={this.state.value}>
    			<Tab style={styles.tab} label="Home" value="/home" />
    			<Tab style={styles.tab} label="Blog" value="/blog" />
    			<Tab style={styles.tab} label="About" value="/about" />
    		</Tabs>
    	</div>
      )
  }
}
NavBar.contextTypes = {
	router: React.PropTypes.object.isRequired
};
export default NavBar;
