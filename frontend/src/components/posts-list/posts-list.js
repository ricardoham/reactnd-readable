import React from 'react';

class PostsList extends React.PureComponent {

  renderPosts = () => {
    const { posts } = this.props;
    return posts.map(post => (
      <div key={post.id}>
        <span>{post.title}</span>
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
