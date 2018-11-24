import React from 'react';
import { Link } from 'react-router-dom';
import CommentsNewContainer from './comments-new/comments-new-container';
import CommentsEditContainer from './comments-new/comments-edit-container';

class CommentsList extends React.PureComponent {
  state = {
    isNew: false,
    isEdit: false,
  }

  toggleFormNew = () => {
    this.setState(prevState => ({ isNew: !prevState.isNew }));
  }

  toggleFormEdit = () => {
    this.setState(prevState => ({ isEdit: !prevState.isEdit }));
  }

  // removeComment = (id) => {
  //   const { removeComment } = this.props;
  //   const { deleteId } = this.state;
  //   console.log('comment ID FOR delate: ', id);
  //   this.setState({ deleteId: id });

  //   console.log('State deletedid', deleteId);
  //   removeComment(deleteId);
  // }

  removeComment = (id) => {
    this.props.removeComment(id);
  }

  renderComments = () => {
    const { comments, postCategory } = this.props;
    const { deleteId, isEdit } = this.state;
    console.log('DElted id', deleteId);
    console.log('Comment post category', postCategory);
    return comments.map(comment => (
      <div>
        {
          isEdit ? <CommentsEditContainer commentId={comment.id} />
            : (
              <div>
                <ul key={comment.id}>
                  <li>{comment.author}</li>
                  <li>{comment.body}</li>
                </ul>
              </div>
            )
        }
        <button type="button" onClick={this.toggleFormEdit}>Edit Comment</button>
        <button type="button" onClick={() => this.removeComment(comment.id)}>Remove Comment</button>
      </div>
    ));
  }

  render() {
    const { comments, parentId } = this.props;
    const { isNew } = this.state;
    console.log('MY URL COmments', window.location);

    console.log('My comments', comments);
    console.log('ISNEW', isNew);
    return (
      <div>
        <button type="button" onClick={this.toggleFormNew}>Add Comment</button>

        {
          isNew ? (
            <CommentsNewContainer
              parentId={parentId}
              toggleFormNew={this.toggleFormNew}
            />) : <div />
        }

        {this.renderComments()}

      </div>
    );
  }
}

export default CommentsList;
