import React, {Component} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
class BlogItem extends Component {
  constructor(props) {
    super(props)
  }
  handleClick () {
    const blog = this.props.blog
    this.context.router.push(`/blog/${blog.number}`)
  }
  render () {
    const blog = this.props.blog
    return (
      <div className="blog-card">
        <div className="blog-wraper">
          <div className="blog-header">{blog.title}</div>
          <div className="blog-text">{blog.body.substr(0, 50) + '...'}</div>
          <div className="blog-action" onClick={this.handleClick.bind(this)}>
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
