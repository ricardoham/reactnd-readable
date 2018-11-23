import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CommentsListContainer from '../../comments/comments-list-container';

class PostsDetails extends React.PureComponent {
  renderPostDetail = () => {
    const { singlePost } = this.props;
    return (
      <div>
        <span>{singlePost.title}</span>
        <span>{singlePost.author}</span>
        <span>{singlePost.body}</span>
      </div>
    );
  }

  // removePost = () => {
  //   const { post, removePost } = this.props;
  //   removePost(post.id);
  // }

  render() {
    const { singlePost } = this.props;
    console.log('DETAILS ID', singlePost.id);
    console.log('DETAILS CATEGORY', singlePost.category);
    console.log('MY URL', window.location);
    return (
      <div>
        {this.renderPostDetail()}
        <br />
        <Link to={`/${singlePost.category}/post-edit/${singlePost.id}`}>Edit Post</Link>
        <Link to="/">Back</Link>
        <Link to={`/${singlePost.category}/${singlePost.id}/comments-new`}>ADD Comment</Link>

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
