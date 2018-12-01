import React from 'react';
import { sortBy } from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostsList extends React.PureComponent {
  renderPosts = () => {
    const { posts } = this.props;
    const postSorted = sortBy(posts, this.props.sortType).reverse();
    return postSorted.map(post => (
      <li key={post.id}>
        <Link to={`/${post.category}/${post.id}`}>
          {post.title}
        </Link>
      </li>
    ));
  }

  handleSortPost = (event) => {
    const { postSortBy } = this.props;
    postSortBy(event.target.value);
  }

  render() {
    return (
      <div>
        <div>
          Sort By:
          <select
            onChange={this.handleSortPost}
          >
            <option value="">Sort By:</option>
            <option value="voteScore">Votes</option>
            <option value="timestamp">Date</option>
          </select>
        </div>
        {this.renderPosts()}
        <Link to="/post/new">Add Post</Link>
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired, /*eslint-disable-line*/
};

export default PostsList;
