import React, {Component} from 'react';
import {Link} from 'react-router'
class BlogItem extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const post = this.props.post
    return (
      <li><Link to={'/blog_detail/' + post.number}>{post.title}</Link></li>
    )
  }
}

export default BlogItem
