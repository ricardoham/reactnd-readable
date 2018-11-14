import React from 'react';
import { Link } from 'react-router-dom';

class PostsList extends React.PureComponent {
  renderPosts = () => {
    const { posts } = this.props;
    return posts.map(post => (
      <li>
        <Link to={`/${post.category}/${post.id}`}>
          {post.title}
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
        <Link to="/post-new">Add Post</Link>
      </div>
    );
  }
}

export default PostsList;
