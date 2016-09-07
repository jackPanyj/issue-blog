import React, {Component} from 'react';
import urls from '../tools/urls'
import marked from 'marked'
class BlogDetail extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    console.log(this.props.body)
    return <div dangerouslySetInnerHTML = {{__html: ''}}></div>
  }
}
export default BlogDetail
