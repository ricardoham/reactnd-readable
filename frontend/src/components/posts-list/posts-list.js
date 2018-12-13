import React from 'react';
import moment from 'moment';
import { sortBy } from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostsList extends React.PureComponent {
  renderPosts = () => {
    const { posts, sortType } = this.props;
    const postSorted = sortBy(posts, sortType).reverse();
    return postSorted.map(post => (
      <div key={post.id} className="post">
        <h3 className="post__title">{post.title}</h3>

        <span className="post__author">
          <i className="far fa-user" />
          {' '}
          Author:
          {' '}
          {post.author}
        </span>
        <Link className="post__button" to={`/${post.category}/${post.id}`}>
          <button className="btn" type="button">More Details...</button>
        </Link>
        <span className="post__vote">
          <i className="fas fa-vote-yea" />
          {' '}
          Votes:
          {' '}
          {post.voteScore}
        </span>
        <span className="post__date">
          <i className="far fa-clock" />
          {' '}
          {moment(post.timestamp).format('ddd, MMM, YYYY')}
        </span>
      </div>
    ));
  }

  handleSortPost = (event) => {
    const { postSortBy } = this.props;
    postSortBy(event.target.value);
  }

  render() {
    return (

      <div className="posts-list">
        <div className="sortby">
          <Link to="/post/new">
            <button type="button" className="btn">Add new Post</button>
          </Link>
          <span className="sortby__text">
            Sort By:
          </span>
          <select
            onChange={this.handleSortPost}
            className="selectable"
          >
            <option hidden>Sort By:</option>
            <option value="voteScore">Votes</option>
            <option value="timestamp">Date</option>
          </select>


        </div>
        {this.renderPosts()}
      </div>

    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  sortType: PropTypes.string.isRequired,
  postSortBy: PropTypes.func.isRequired,
};

export default PostsList;
