import React from 'react';
import CommentsEditContainer from './comments-new/comments-edit-container';

class CommentsList extends React.PureComponent {
  state = {
    isEdit: false,
  }

  toggleFormEdit = () => {
    this.setState({ isEdit: !this.state.isEdit }); /*eslint-disable-line*/
  }

  removeComment = (id) => {
    const { fetchAllComments, parentId, removeComment } = this.props;
    removeComment(id).then(() => fetchAllComments(parentId));
  }

  render() {
    const { comment, voteScoreComments } = this.props;
    const { isEdit } = this.state;

    return (
      <div>
        <button type="button" onClick={() => voteScoreComments(comment.id, 'upVote')}>UpVote</button>
        <span>{comment.voteScore}</span>
        <button type="button" onClick={() => voteScoreComments(comment.id, 'downVote')}>DownVote</button>

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
              <div>
                <ul>
                  <li>{comment.author}</li>
                  <li>{comment.body}</li>
                </ul>
              </div>
            )
        }
        <button type="button" onClick={this.toggleFormEdit}>Edit Comment</button>
        <button type="button" onClick={() => this.removeComment(comment.id)}>Remove Comment</button>

      </div>
    );
  }
}

export default CommentsList;
