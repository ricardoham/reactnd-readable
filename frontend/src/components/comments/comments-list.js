import React from 'react';
import PropTypes from 'prop-types';
import CommentsEditContainer from './comments-new/comments-edit-container';

class CommentsList extends React.PureComponent {
  state = {
    isEdit: false,
  }

  toggleFormEdit = () => {
    this.setState({ isEdit: !this.state.isEdit }); /*eslint-disable-line*/
  }

  removeComment = (id) => {
    const {
      fetchAllComments, parentId, removeComment, fetchPost,
    } = this.props;
    removeComment(id).then(() => fetchAllComments(parentId)).then(() => fetchPost(parentId));
  }

  render() {
    const { comment, voteScoreComments } = this.props;
    const { isEdit } = this.state;

    return (
      <div>
        {
          isEdit ? (
            <CommentsEditContainer
              commentId={comment.id}
              author={comment.author}
              body={comment.body}
              toggleFormEdit={this.toggleFormEdit}
            />
          )
            : (
              <div className="comment-list__comment">
                <ul>
                  <li>
                    <div className="comment-list__title">Author</div>
                    {' '}
                    {comment.author}
                  </li>
                  <li>
                    <div className="comment-list__title">Comment</div>

                    {' '}
                    {comment.body}
                  </li>
                  <div className="comment-list__vote-panel">
                    <button className="btn-vote btn-vote--up" type="button" onClick={() => voteScoreComments(comment.id, 'upVote')}><i className="far fa-thumbs-up" /></button>
                    <span className="comment-list__vote">{comment.voteScore}</span>
                    <button className="btn-vote btn-vote--down" type="button" onClick={() => voteScoreComments(comment.id, 'downVote')}><i className="far fa-thumbs-down" /></button>
                  </div>
                  <button className="btn" type="button" onClick={this.toggleFormEdit}>Edit Comment</button>
                  <button className="btn btn--alert" type="button" onClick={() => this.removeComment(comment.id)}>Remove Comment</button>
                </ul>
              </div>
            )
        }

      </div>
    );
  }
}

CommentsList.propTypes = {
  fetchAllComments: PropTypes.func.isRequired,
  fetchPost: PropTypes.func.isRequired,
  parentId: PropTypes.string.isRequired,
  removeComment: PropTypes.func.isRequired,
  comment: PropTypes.object,
  voteScoreComments: PropTypes.func.isRequired,
};

CommentsList.defaultProps = {
  comment: undefined,
};

export default CommentsList;
