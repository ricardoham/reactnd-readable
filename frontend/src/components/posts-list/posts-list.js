import React from 'react';
import { sortBy } from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostsList extends React.PureComponent {
  renderPosts = () => {
    const { posts } = this.props;
    const postSorted = sortBy(posts, this.props.sortType).reverse();
    return postSorted.map(post => (
      <div key={post.id} className="post">
        <h3 className="post__title">{post.title}</h3>
        <span className="post__author">{post.author}</span>
        <Link className="post__button" to={`/${post.category}/${post.id}`}>
          <button type="button">More Details...</button>
        </Link>
        <span className="post__vote">{post.voteScore}</span>
        <span className="post__date">{post.timestamp}</span>
      </div>
    ));
  }

  handleSortPost = (event) => {
    const { postSortBy } = this.props;
    postSortBy(event.target.value);
  }

  render() {
    return (
      <div className="posts">

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
