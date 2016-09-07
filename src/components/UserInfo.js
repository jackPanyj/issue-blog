import React, { Component } from 'react'

class UserInfo extends Component {
  render() {
    const userInfo = this.props.userInfo
    console.log(1)
    return (	<div className="user-info">
                  <img src={userInfo.data.avatar_url}/>
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
