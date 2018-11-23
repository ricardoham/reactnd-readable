import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComments, fetchComment } from '../../../actions/action-comments';
import CommentsForm from './comments-form';

class CommentsNewContainer extends React.PureComponent {
  render() {
    const { id } = this.props.match.params;

    return (
      <CommentsForm
        addComments={this.props.actions.addComments}
        parentId={id}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addComments, fetchComment }, dispatch),
});

const mapStateToProps = state => ({
  comment: state.comments.singleCommentData,
  addCommentData: state.comments.addCommentData,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsNewContainer);
