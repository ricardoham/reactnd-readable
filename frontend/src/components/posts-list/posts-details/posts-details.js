import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect, Link } from 'react-router-dom';
import CommentsListContainer from '../../comments/comments-list-container';

class PostsDetails extends React.PureComponent {
  renderPostDetail = () => {
    const { singlePost, voteScorePosts } = this.props;

    return (
      <div className="post-detail">
        <div className="post-detail__title">
          <span>Title: </span>
          <p>
            {singlePost.title}
          </p>
        </div>
        <div className="post-detail__author">
          <span>Autor: </span>
          <p>
            {singlePost.author}

          </p>
        </div>
        <div className="post-detail__body">
          <span>Post: </span>
          <p>
            {singlePost.body}

          </p>
        </div>

        <div className="post-detail__vote">
          <FontAwesomeIcon icon="faCheckSquare" />
          <button type="button" onClick={() => voteScorePosts(singlePost.id, 'upVote')}>UpVote</button>
          <div>{singlePost.voteScore}</div>
          <button type="button" onClick={() => voteScorePosts(singlePost.id, 'downVote')}>DownVote</button>
        </div>
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
        <CommentsListContainer postCategory={singlePost.category} postId={singlePost.id} />
      </div>
    );
  }
}

PostsDetails.propTypes = {
  singlePost: PropTypes.object, /*eslint-disable-line*/
  // removePost: PropTypes.func.isRequired,
};

PostsDetails.defaultProps = {
  singlePost: undefined,
};

export default PostsDetails;
