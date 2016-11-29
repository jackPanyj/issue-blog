import React,{ Component } from "react";
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Colors from 'material-ui/lib/styles/colors';
import map from 'lodash/map'

import '../style/home.scss'

const styles = {
  underlineStyle: {
    borderColor: Colors.orange500,
  },
  getMsg: {
    width: 300
  },
  getName: {
    width: 120
  }
}

class Home extends Component {
  constructor (props) {
		super(props)
		this.state = {
    }
	}
  componentDidUpdate () {
    // 控制滚动条到底部
    const scrollbar = this.refs.msgs
    scrollbar.scrollTop = scrollbar.scrollHeight
  }
  componentWillMount() {
    const wilddog = window.wilddog
    // 初始化野狗
    const config = {
      syncURL: "https://issue-blog.wilddogio.com" //输入节点 URL
    };
    wilddog.initializeApp(config);
    var ref = wilddog.sync().ref('/chat');
    this.setState({
      ref,
      hasName: !!localStorage.name,
      name: localStorage.name
    })
    var msgs = []
    ref.on('child_added', snapshot => {
      msgs.push(snapshot.val())
      this.setState({
        msgs
      })
    })
  }
  createCard (obj, key) {
    return (
      <div className="card" key={key}>
        <div className="left">{obj.name} :</div>
        <div className="right">{obj.msg}</div>
      </div>
    )
  }
  handleClick() {
    const ref = this.state.ref
    if (!this.state.msg || !this.state.name) {
      this.setState({
        errorText: !this.state.msg && '消息不能为空',
        errorName: !this.state.name && '名字不能为空'
      })
      return
    }

    ref.push({
      name: this.state.name,
      msg: this.state.msg
    })
    this.setState({
      msg: ''
    })
  }
  handleChange(type) {
    const value = this.refs[type].getValue()
    this.setState({
      [type]: value,
      errorText: type === 'msg' && !value && '消息不能为空',
      errorName: type === 'name' && !value && '名字不能为空'
    })
  }
  handleBlur(){
    const name = this.refs.name.getValue()
    if(!name) return
    localStorage.name = name
    this.setState({
      hasName: true
    })
  }
  render(){
    const msgs = this.state.msgs
    return (
    		<div className = "home">
          <h1 className="title">留言聊天</h1>
          <section id="chat">
            <div className="messages" ref="msgs">
              {msgs ? map(msgs, this.createCard) : <div className="loading" />}
            </div>
            <div className="input">
              <TextField
                 hintText="请输入名字"
                 underlineStyle={styles.underlineStyle}
                 style={styles.getName}
                 onChange={this.handleChange.bind(this, 'name')}
                 ref="name"
                 onBlur={this.handleBlur.bind(this)}
                 disabled={this.state.hasName}
                 defaultValue={this.state.name}
                 errorText={this.state.errorName}
                 value={this.state.name}
               />
             <TextField
                hintText="请输入消息"
                underlineStyle={styles.underlineStyle}
                style={styles.getMsg}
                onChange={this.handleChange.bind(this, 'msg')}
                ref="msg"
                errorText={this.state.errorText}
                value={this.state.msg}
                onEnterKeyDown={this.handleClick.bind(this)}
              />
              <RaisedButton label="发送" primary={true} onClick={this.handleClick.bind(this)} />
            </div>
          </section>
    		</div>
      )
  }
}

export default Home;
