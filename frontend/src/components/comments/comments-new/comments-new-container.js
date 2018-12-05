import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComments, fetchComment, fetchAllComments } from '../../../actions/action-comments';
import CommentsForm from './comments-form';

class CommentsNewContainer extends React.PureComponent {
  render() {
    const { parentId, actions, toggleFormNew } = this.props;
    return (
      <CommentsForm
        addComments={actions.addComments}
        parentId={parentId}
        toggleFormNew={toggleFormNew}
        fetchAllComments={fetchAllComments}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addComments, fetchComment, fetchAllComments }, dispatch),
});

const mapStateToProps = state => ({
  comment: state.comments.singleCommentData,
  addCommentData: state.comments.addCommentData,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsNewContainer);
