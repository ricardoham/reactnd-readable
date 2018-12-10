import React from 'react';
import moment from 'moment';
import { sortBy } from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class PostsList extends React.PureComponent {
  renderPosts = () => {
    const { posts, sortType } = this.props;
    const postSorted = sortBy(posts, sortType).reverse();
    return postSorted.map(post => (
      <div key={post.id} className="post">
        <h3 className="post__title">{post.title}</h3>
        <FontAwesomeIcon icon="faCoffee" />
        <span className="post__author">{post.author}</span>
        <Link className="post__button" to={`/${post.category}/${post.id}`}>
          <button className="btn" type="button">More Details...</button>
        </Link>
        <span className="post__vote">{post.voteScore}</span>
        <span className="post__date">{moment(post.timestamp).format('ddd, MMM, YYYY')}</span>
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
      Sort By:
          <select
            onChange={this.handleSortPost}
            className="selectable"
          >
            <option hidden>Sort By:</option>
            <option value="voteScore">Votes</option>
            <option value="timestamp">Date</option>
          </select>
        </div>
        <div className="posts-container">


          {this.renderPosts()}

          <Link className="posts__add" to="/post/new">+</Link>
        </div>
      </div>

    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired, /*eslint-disable-line*/
};

export default PostsList;
