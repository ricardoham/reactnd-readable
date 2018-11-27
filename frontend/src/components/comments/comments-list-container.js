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
    const { comments, postId } = this.props;

    console.log('MEU COMENNET', comments);

    return comments.map(comment => (
      <CommentsList
        key={comment.id}
        comment={comment}
        parentId={postId}
        removeComment={this.props.actions.deleteComment}
        voteScoreComments={this.props.actions.voteScoreComments}
      />
    ));
  }

  render() {
    const { comments, postId } = this.props;


    if (!comments) {
      return <div>Loading... Comments</div>;
    }

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
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
