import React, {Component} from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
class BlogItem extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const blog = this.props.blog
    return (
      <Card>
        <CardHeader
          title={blog.title}
          subtitle={blog.body.substr(0,20) + '...'}
          actAsExpander={true}
          showExpandableButton={true}
        />
      <CardText expandable={true} dangerouslySetInnerHTML={{__html: blog.content }}>
        </CardText>
      </Card>
    )
  }
}

export default BlogItem
