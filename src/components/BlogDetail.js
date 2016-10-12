import React, {Component} from 'react';
import urls from '../tools/urls'
import marked from 'marked'
class BlogDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    const blog = this.context.store.getState().issues.blogs[this.props.params.id]
    return (
      <div className="blog-detail">
        <h1>{blog.title}</h1>
        <p dangerouslySetInnerHTML={{__html: marked(blog.body)}}>{}</p>
      </div>
    )
  }
}

BlogDetail.contextTypes = {
  store: React.PropTypes.object
}
export default BlogDetail
