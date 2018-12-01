import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import CommentsListContainer from '../../comments/comments-list-container';

class PostsDetails extends React.PureComponent {
  renderPostDetail = () => {
    const { singlePost, voteScorePosts, voteScore } = this.props;
    console.log('AAAAAAAAAAAA', singlePost);
    console.log('bbbbbbbbbbbbbb', voteScore);

    return (
      <div>
        <span>{singlePost.title}</span>
        <span>{singlePost.author}</span>
        <span>{singlePost.body}</span>
        <button type="button" onClick={() => voteScorePosts(singlePost.id, 'upVote')}>UpVote</button>
        <span>{voteScore}</span>
        <button type="button" onClick={() => voteScorePosts(singlePost.id, 'downVote')}>DownVote</button>

      </div>
    );
  }

  removePost = () => {
    const { singlePost, removePost } = this.props;
    console.log('POST ID FOR delate', singlePost.id);
    removePost(singlePost.id, () => (
      <Redirect to="/" />
    ));
    // this.props.history.push('/');
  }

  render() {
    const { singlePost } = this.props;
    console.log('SinglePost Detail', singlePost);
    console.log('DETAILS ID', singlePost.id);
    console.log('DETAILS CATEGORY', singlePost.category);
    console.log('MY URL', window.location);
    console.log('Vote', singlePost.voteScore);

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
