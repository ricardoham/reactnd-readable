import React from 'react';
import PropTypes from 'prop-types';

class PostVotes extends React.PureComponent {
  render() {
    const { postId, postVote, voteScorePosts } = this.props;

    return (
      <div className="post-detail__vote">
        <div className="comment-list__vote-panel">
          <button className="btn-vote btn-vote--up" type="button" onClick={() => voteScorePosts(postId, 'upVote')}><i className="far fa-thumbs-up" /></button>
          <span className="comment-list__vote">{postVote}</span>
          <button className="btn-vote btn-vote--down" type="button" onClick={() => voteScorePosts(postId, 'downVote')}><i className="far fa-thumbs-down" /></button>
        </div>
      </div>
    );
  }
}

PostVotes.propTypes = {
  postId: PropTypes.string.isRequired,
  postVote: PropTypes.number.isRequired,
  voteScorePosts: PropTypes.func.isRequired,
};

export default PostVotes;
