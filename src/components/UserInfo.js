import React, { Component } from 'react'

class UserInfo extends Component {
  render() {
    const userInfo = this.props.userInfo
    return (	<div className="user-info">
                  <section className="user-top">
                    <img src={userInfo.data.avatar_url}/>
                    <div>
                      <p className="user-name">{userInfo.data.name}</p>
                      <a href={userInfo.data.html_url}>{userInfo.data.html_url}</a>
                    </div>
                  </section>
                  <section className="user-repo">
                    <div className="item">
                      <p>{userInfo.data.followers}</p>
                      <p>followers</p>
                    </div>
                    <div className="item">
                      <p>{userInfo.data.following}</p>
                      <p>following</p>
                    </div>
                    <div className="item">
                      <p>{userInfo.data.public_repos}</p>
                      <p>repos</p>
                    </div>
                  </section>
              </div>
          )
  }
}

export default UserInfo
