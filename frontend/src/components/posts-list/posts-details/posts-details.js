import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import CommentsListContainer from '../../comments/comments-list-container';

class PostsDetails extends React.PureComponent {
  renderPostDetail = () => {
    const { singlePost, voteScorePosts } = this.props;

    return (
      <div>
        <span>{singlePost.title}</span>
        <span>{singlePost.author}</span>
        <span>{singlePost.body}</span>
        <button type="button" onClick={() => voteScorePosts(singlePost.id, 'upVote')}>UpVote</button>
        <span>{singlePost.voteScore}</span>
        <button type="button" onClick={() => voteScorePosts(singlePost.id, 'downVote')}>DownVote</button>

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
      <div>
        {this.renderPostDetail()}
        <br />
        <button type="button" onClick={this.removePost}>RemovePost</button>
        <Link to={`/${singlePost.category}/post-edit/${singlePost.id}`}>Edit Post</Link>
        <Link to="/">Back</Link>

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
