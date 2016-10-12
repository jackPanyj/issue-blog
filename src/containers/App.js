import React,{ Component } from "react";
import Home from './Home';
import NavBar from '../components/NavBar';
import '../style/main.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends Component {
  constructor(props,context){
    super(props,context);
  }

  render(){
    const locationName = this.props.location.pathname.substr(1) || 'home'
    return (
        <div className="app-wrap">
          <span className={`stars ${locationName}-stars`}></span>
          <NavBar/>
          {this.props.children}
        </div>
      )
  }
}


App.contextTypes={
  router: React.PropTypes.object.isRequired
};
export default App;
