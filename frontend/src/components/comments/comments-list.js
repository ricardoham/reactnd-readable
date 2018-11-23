import React from 'react';
import { Link } from 'react-router-dom';

class CommentsList extends React.PureComponent {
  renderComments = () => {
    const { comments, postCategory } = this.props;
    console.log('Comment post category', postCategory);
    return comments.map(comment => (
      <div>
        <ul key={comment.id}>
          <li>{comment.author}</li>
          <li>{comment.body}</li>
        </ul>
      <Link to={`/${postCategory}/${comment.id}/comments-edit`}><button>Edit Comment</button></Link>
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
