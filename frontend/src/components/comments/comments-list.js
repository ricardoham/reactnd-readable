import React from 'react';
import CommentsEditContainer from './comments-new/comments-edit-container';

class CommentsList extends React.PureComponent {
  state = {
    isEdit: false,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.comment.voteScore !== this.props.comment.voteScore) {
      return true;
    }
  }

  toggleFormEdit = () => {
    this.setState({ isEdit: !this.state.isEdit });
  }

  removeComment = (id) => {
    this.props.removeComment(id);
  }

  render() {
    const { comment } = this.props;
    const { isEdit } = this.state;

    // console.log('Commentlist Author', commentAuthor);
    // console.log('ISNEW', isNew);
    return (
      <div>
        <button type="button" onClick={() => this.props.voteScoreComments(comment.id, 'upVote')}>UpVote</button>
        <span>{comment.voteScore}</span>
        <button type="button" onClick={() => this.props.voteScoreComments(comment.id, 'downVote')}>DownVote</button>

        {
          isEdit ? (
            <CommentsEditContainer
              commentId={comment.id}
              author={comment.author}
              body={comment.body}
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
