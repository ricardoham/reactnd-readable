import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComments, fetchComment, fetchAllComments } from '../../../actions/action-comments';
import { fetchPost } from '../../../actions/action-posts';
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
        fetchPost={actions.fetchPost}
      />
    );
  }
}

CommentsNewContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  parentId: PropTypes.string.isRequired,
  toggleFormNew: PropTypes.func,
};

CommentsNewContainer.defaultProps = {
  toggleFormNew: undefined,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addComments, fetchComment, fetchAllComments, fetchPost,
  }, dispatch),
});

const mapStateToProps = state => ({
  comment: state.comments.singleCommentData,
  addCommentData: state.comments.addCommentData,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsNewContainer);
