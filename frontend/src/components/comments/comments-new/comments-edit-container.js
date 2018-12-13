import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

CommentsEditContainer.propTypes = {
  commentId: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  comment: PropTypes.object,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  toggleFormEdit: PropTypes.func.isRequired,
};

CommentsEditContainer.defaultProps = {
  comment: undefined,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchComment, editComment }, dispatch),
});

const mapStateToProps = state => ({
  comment: state.comments.singleCommentData,
  addCommentData: state.comments.addCommentData,
  loading: state.comments.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsEditContainer);
