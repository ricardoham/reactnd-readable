import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComment, editComment } from '../../../actions/action-comments';
import CommentsForm from './comments-form';

class CommentsEditContainer extends Component {
  componentDidMount() {
    const { commentId, actions } = this.props;
    actions.fetchComment(commentId);
  }

  render() {
    const {
      comment,
      author,
      body,
      actions,
      toggleFormEdit,
    } = this.props;

    if (!comment) {
      return <div>Loading</div>;
    }

    return (
      <CommentsForm
        comment={comment}
        editComment={actions.editComment}
        author={author}
        body={body}
        toggleFormEdit={toggleFormEdit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchComment, editComment }, dispatch),
});

const mapStateToProps = state => ({
  comment: state.comments.singleCommentData,
  addCommentData: state.comments.addCommentData,
  loading: state.comments.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsEditContainer);
