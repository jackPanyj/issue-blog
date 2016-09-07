import React,{ Component } from "react";
import Home from './Home';
import NavBar from '../components/NavBar';
import AppBar from 'material-ui/lib/app-bar';
import '../style/main.scss';
import AppLeftNav from '../components/AppLeftNav';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends Component {
  constructor(props,context){
    super(props,context);
  }

  _onLeftIconButtonTouchTap(){
   this.refs.leftNav.handleToggle();
  }

  _getAppBar(){
    let title = this.context.router.isActive('/home')?'Home':
    this.context.router.isActive('/blog_list')?'Blog':
    this.context.router.isActive('/about')?'About':'Home';
    return (
      <AppBar title={title}
      onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)} />
    )
  }

  componentWillMount(){
    let renderBar = function (){
      this.setState({
        renderBar: document.body.clientWidth > 700
      })
    }.bind(this);
    renderBar();
    window.onresize = renderBar
  }
  render(){
    return (
        <div className="app-wrap">
          {this.state.renderBar? <NavBar/> : this._getAppBar()}
          <AppLeftNav ref="leftNav"/>
          {this.props.children}
          <div className= "app-footer"> my footer</div>
        </div>
      )
  }

}


App.contextTypes={
  router: React.PropTypes.object.isRequired
};
export default App;
