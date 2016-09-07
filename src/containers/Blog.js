import React, {Component} from 'react';
import session from '../tools/session'
import urls from '../tools/urls'
import BlogItem from '../components/BlogItem'
class Blog extends Component {
	constructor (props) {
		super(props)
		this.state = {}
	}
	componentWillMount () {
		const posts = session.get('posts')
		if (posts === null) {
			fetch(urls.issues)
			.then(res => res.json())
			.then(posts => {
				// session.set('posts', val)
				this.setState({posts})
			})
		} else {
			this.setState({posts})
		}
	}
	render(){
      const posts = this.state.posts
      return posts === undefined
				? <div></div>
				: <ul>{posts.map((post, index, arr) => <BlogItem key={arr.length - index} post={post}></BlogItem>)}</ul>
	}
}

export default Blog;
