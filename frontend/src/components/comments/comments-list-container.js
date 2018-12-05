import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllComments, deleteComment, voteScoreComments } from '../../actions/action-comments';
import CommentsList from './comments-list';
import CommentsNewContainer from './comments-new/comments-new-container';


class CommentsListContainer extends Component {
  componentDidMount() {
    const { postId, actions } = this.props;
    actions.fetchAllComments(postId);
  }

  renderComments = () => {
    const { postId, comments, actions } = this.props;

    return comments.map(comment => (
      <CommentsList
        key={comment.id}
        comment={comment}
        parentId={postId}
        removeComment={actions.deleteComment}
        voteScoreComments={actions.voteScoreComments}
        fetchAllComments={actions.fetchAllComments}
      />
    ));
  }

  render() {
    const { comments, postId } = this.props;

    if (!comments) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <CommentsNewContainer
          parentId={postId}
        />
        {this.renderComments()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchAllComments, deleteComment, voteScoreComments }, dispatch),
});

const mapStateToProps = state => ({
  comments: state.comments.allCommentsData,
  editedComment: state.comments.editedComment,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
