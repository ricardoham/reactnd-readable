import React from 'react';
import { Link } from 'react-router-dom'

class PostsList extends React.PureComponent {
  renderPosts = () => {
    const { posts } = this.props;
    return posts.map(post => (
      <div key={post.id}>
        <span>Title: {post.title}</span>
        <span>Author: {post.author}</span>
        <span>Comment Count: {post.commentCount}</span>
      </div>
    ));
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
        <Link to="/post">Details</Link>
      </div>
    );
  }
}

export default PostsList;
