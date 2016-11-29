import React, {Component} from 'react';
import urls from '../tools/urls'
import marked from 'marked'
import { fetchBody } from '../redux/action'
class BlogDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeBlog: {}
    }
  }
  componentDidMount () {
    const id = this.props.params.id
    const store = this.context.store
    store.dispatch(fetchBody(id))
    // let content = store.getState().issues.blogs && store.getState().issues.blogs['key' + id]
    // if (!content) {
    //   content = store.dispatch(fetchBody(id))
    // }
    // this.setState({
    //   activeBlog: content
    // })
  }
  render () {
    let blog = {
      title: 'aa',
      body: 'bb'
    }
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
