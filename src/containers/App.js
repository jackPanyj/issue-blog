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
    return (
        <div className="app-wrap">
          <NavBar/>
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
