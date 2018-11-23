import React from 'react';
import { Link } from 'react-router-dom';

class CommentsList extends React.PureComponent {
  state = {
    deleteId: '',
  }

  removeComment = (id) => {
    const { removeComment } = this.props;
    console.log('comment ID FOR delate', id);
    this.setState({ deleteId: id });
    removeComment(deleteId);
  }

  renderComments = () => {
    const { comments, postCategory } = this.props;
    const { deleteId } = this.state;
    console.log('Comment post category', postCategory);
    return comments.map(comment => (
      <div>
        <ul key={comment.id}>
          <li>{comment.author}</li>
          <li>{comment.body}</li>
        </ul>
      <Link to={`/${postCategory}/${comment.id}/comments-edit`}><button>Edit Comment</button></Link>
      <button onClick={() => this.removeComment(comment.id)}>Remove Comment</button>
      </div>
    ));
  }

  render() {
    const { comments } = this.props;
    console.log('MY URL COmments', window.location);

    console.log('My comments', comments);
    return (
      <div>
        {this.renderComments()}
      </div>
    );
  }
}

export default CommentsList;
