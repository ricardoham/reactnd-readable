import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComments, fetchComment } from '../../../actions/action-comments';
import CommentsForm from './comments-form';

class CommentsNewContainer extends React.PureComponent {
  render() {
    const { parentId } = this.props;
    console.log('Parent ID', parentId);

    console.log('ADD comnnet', this.props.addCommentData);

    return (
      <CommentsForm
        addComments={this.props.actions.addComments}
        parentId={parentId}
        toggleFormNew={this.props.toggleFormNew}
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
