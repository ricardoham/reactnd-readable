import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComments, fetchComment, editComment } from '../../../actions/action-comments';
import CommentsNew from './comments-new';

class CommentsNewContainer extends Component {
  componentDidMount() {
    const { comment } = this.props;
    const { id } = this.props.match.params;
    
    console.log('MY ID params', id);
    console.log('TEM COMMENTS?', comment);
    // if (comment) {
    //   const { id } = this.props.match.params;

    //   return this.props.actions.fetchComment(id);
    // }
    this.props.actions.fetchComment(id);
  }

  // fetchDataComment = () => {
  //   const { comment } = this.props;
  //   const {id} = this.props.match.params
  //   if (id !== comment.parentId) {
  //     this.props.actions.fetchComment(id);
  //   }
  // }

  render() {
    const { comment } = this.props;
    console.log('Comment Render', comment);
    const { id } = this.props.match.params;
    console.log('coments addd', this.props.addCommentData);

    // if (this.props.loading || !comment) {
    //   return <div>Loading</div>;
    // }

    return (
      <CommentsNew
        addComments={this.props.actions.addComments}
        comment={comment}
        parentId={id}
        editComment={this.props.actions.editComment}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addComments, fetchComment, editComment }, dispatch),
});

const mapStateToProps = state => ({
  comment: state.comments.singleCommentData,
  addCommentData: state.comments.addCommentData,
  loading: state.comments.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsNewContainer);
