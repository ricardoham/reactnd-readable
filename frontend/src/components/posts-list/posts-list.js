import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostsList extends React.PureComponent {
  renderPosts = () => {
    const { posts } = this.props;
    return posts.map(post => (
      <li key={post.id}>
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

PostsList.propTypes = {
  posts: PropTypes.array.isRequired, /*eslint-disable-line*/
};


export default PostsList;
