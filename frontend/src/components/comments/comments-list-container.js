import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllComments, deleteComment } from '../../actions/action-comments';
import CommentsList from './comments-list';

class CommentsListContainer extends Component {
  componentDidMount() {
    const { postId } = this.props;
    this.props.actions.fetchAllComments(postId);
  }

  render() {
    const { comments, postId, postCategory } = this.props;
    if (!comments) {
      return <div>Loading... Comments</div>;
    }
    console.log('Comments Container', comments);
    return (
      <CommentsList
        comments={comments}
        postId={postId}
        postCategory={postCategory}
        removeComment={this.props.actions.deleteComment}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchAllComments, deleteComment }, dispatch),
});

const mapStateToProps = state => ({
  comments: state.comments.allCommentsData,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
