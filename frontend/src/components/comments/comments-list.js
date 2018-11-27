import React from 'react';
import CommentsEditContainer from './comments-new/comments-edit-container';

class CommentsList extends React.PureComponent {
  state = {
    isEdit: false,
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.comment.id !== nextProps.comment.id) {
  //     return true;
  //   }
  // }


  toggleFormEdit = () => {
    this.setState({ isEdit: !this.state.isEdit });
  }

  removeComment = (id) => {
    this.props.removeComment(id);
  }

  // renderComments = () => {
  //   const { comments } = this.props;
  //   const { deleteId, isEdit } = this.state;
  //   console.log('DElted id', deleteId);
  //   console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', comments);

  //   return comments.map(comment => (
  //     <div>
  //       {
  //         isEdit ? <CommentsEditContainer commentId={comment.id} />
  //           : (
  //             <div>
  //               <ul key={comment.id}>
  //                 <li>{comment.author}</li>
  //                 <li>{comment.body}</li>
  //               </ul>
  //             </div>
  //           )
  //       }
  //       <button type="button" onClick={() => this.props.voteScoreComments(comment.id, 'upVote')}>UpVote</button>
  //       <span>{comment.voteScore}</span>
  //       <button type="button" onClick={() => this.props.voteScoreComments(comment.id, 'downVote')}>DownVote</button>

  //       <button type="button" onClick={this.toggleFormEdit}>Edit Comment</button>
  //       <button type="button" onClick={() => this.removeComment(comment.id)}>Remove Comment</button>
  //     </div>
  //   ));
  // }


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
    );
  }
}

export default CommentsList;
