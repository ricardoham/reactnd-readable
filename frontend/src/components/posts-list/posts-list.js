import React from 'react';

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
      <div>{this.renderPosts()}</div>
    );
  }
}

export default PostsList;
