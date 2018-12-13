import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Redirect, Link } from 'react-router-dom';
import CommentsListContainer from '../../comments/comments-list-container';

class PostsDetails extends React.PureComponent {
  renderPostDetail = () => {
    const { singlePost, voteScorePosts } = this.props;

    return (

      <div className="comment-list__comment">
        <ul>
          <li>
            <div className="comment-list__title">Title</div>
            {' '}
            {singlePost.title}
          </li>
          <li className="post-detail__author">
            <div className="comment-list__title">Author</div>
            {' '}
            {singlePost.author}
          </li>
          <li>
            <div className="comment-list__title">Post</div>
            {singlePost.body}
          </li>
          <div className="post-details__createon">
            <div className="post-details__createon-title">Created on: </div>
            <i className="far fa-clock" />
            {' '}
            {moment(singlePost.timestamp).format('ddd, MMM, YYYY')}
          </div>
          <div className="post-detail__vote">
            <div className="comment-list__vote-panel">
              <button className="btn-vote btn-vote--up" type="button" onClick={() => voteScorePosts(singlePost.id, 'upVote')}><i className="far fa-thumbs-up" /></button>
              <span className="comment-list__vote">{singlePost.voteScore}</span>
              <button className="btn-vote btn-vote--down" type="button" onClick={() => voteScorePosts(singlePost.id, 'downVote')}><i className="far fa-thumbs-down" /></button>
            </div>
          </div>
        </ul>
      </div>
    );
  }

  removePost = () => {
    const { singlePost, removePost } = this.props;
    removePost(singlePost.id, () => (
      <Redirect to="/" />
    ));
  }

  render() {
    const { singlePost } = this.props;

    return (
      <div className="post-detail-container">
        {this.renderPostDetail()}
        <br />
        <Link to={`/${singlePost.category}/post-edit/${singlePost.id}`}><button className="btn" type="button">Edit Post</button></Link>
        <button className="btn btn--alert" type="button" onClick={this.removePost}>Remove Post</button>
        <Link to="/">
          {' '}
          <button
            className="btn"
            type="button"
          >
                  Back
          </button>
        </Link>
        <h4>Comment in the Post:</h4>
        <CommentsListContainer postCategory={singlePost.category} postId={singlePost.id} />
      </div>
    );
  }
}

PostsDetails.propTypes = {
  singlePost: PropTypes.object,
  removePost: PropTypes.func.isRequired,
  voteScorePosts: PropTypes.func.isRequired,
};

PostsDetails.defaultProps = {
  singlePost: undefined,
};

export default PostsDetails;
