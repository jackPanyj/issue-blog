import React, {Component} from 'react';
import urls from '../tools/urls'
import marked from 'marked'
import { fetchBody } from '../redux/action'
import {connect} from 'react-redux'

class BlogDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeBlog: {}
    }
  }
  componentWillMount () {
    const id = this.props.params.id
    let content = this.props.issues.blogs && this.props.issues.blogs['key' + id]
    if (!content) {
      this.props.dispatch(fetchBody(id))
    }
    this.setState({
      activeBlog: content
    })
  }
  componentWillReceiveProps(state) {
    this.setState({
      activeBlog: state.activeBlog.activeBlog
    })
  }
  render () {
    const blog = this.state.activeBlog
    if (blog) {
      const body = marked(blog.body)
      return (
        <div className="blog-detail">
          <h1>{blog.title}</h1>
          <div dangerouslySetInnerHTML={{__html: body}}></div>
        </div>
      )
    }
    return <div className="loading" />
  }
}

export default connect(state => state)(BlogDetail)
