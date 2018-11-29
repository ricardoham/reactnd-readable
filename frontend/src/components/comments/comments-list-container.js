import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllComments, deleteComment, voteScoreComments } from '../../actions/action-comments';
import CommentsList from './comments-list';
import CommentsNewContainer from './comments-new/comments-new-container';


class CommentsListContainer extends Component {
  componentDidMount() {
    const { postId } = this.props;
    this.props.actions.fetchAllComments(postId);
  }

  renderComments = () => {
    const { postId } = this.props;

    return this.commentsCache.map(comment => (
      <CommentsList
        key={comment.id}
        comment={comment}
        parentId={postId}
        removeComment={this.props.actions.deleteComment}
        voteScoreComments={this.props.actions.voteScoreComments}
        fetchAllComments={this.props.actions.fetchAllComments}
      />
    ));
  }

  render() {
    const { comments, postId, editedComment } = this.props;
    console.log('Comments container', comments);

    if (!comments) {
      return <div>Loading...</div>;
    }

    if (!this.commentsCache && comments) {
      this.commentsCache = comments;
    }

    if (this.commentsCache.length !== comments.length) {
      this.commentsCache = comments;
    }

    if (editedComment) {
      const changedId = this.commentsCache.findIndex(el => el.id === editedComment.id);
      this.commentsCache[changedId] = editedComment;
    }

    // if (!this.commentsCache) {
    //   return <div>Loading... Comments</div>;
    // }

    console.log('Comments Container', comments);
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
