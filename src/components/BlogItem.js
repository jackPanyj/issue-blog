import React, {Component} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import marked from 'marked'
class BlogItem extends Component {
  constructor(props) {
    super(props)
  }
  handleClick () {
    const blog = this.props.blog
    this.context.router.push(`/blog/${blog.number}`)
  }
  render () {
    var blog = this.props.blog
    return (
      <div className="blog-card" onClick={this.handleClick.bind(this)}>
        <div className="blog-wraper">
          <div className="blog-header">{blog.title}</div>
          <div className="blog-text" dangerouslySetInnerHTML={{__html: marked(blog.body.substr(0, 20) + '...')}}></div>
          <div className="blog-action">
            <RaisedButton label="继续阅读" primary={true}/>
          </div>
        </div>
      </div>
    )
  }
}
BlogItem.contextTypes = {
	router: React.PropTypes.object.isRequired
};
export default BlogItem
