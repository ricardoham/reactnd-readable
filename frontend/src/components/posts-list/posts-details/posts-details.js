import React from 'react';
import { Link } from 'react-router-dom';

class PostsDetails extends React.PureComponent {

  renderPostDetail = () => {
    const { post } = this.props;
    return (
      <div>
        <span>{post.title}</span>
        <span>{post.author}</span>
        <span>{post.body}</span>
      </div>
    );
  }

  removePost = () => {
    const { post, removePost } = this.props;
    removePost(post.id);
  }

  render() {
    // const { category } = this.props.match.params;
    const { post, category, id } = this.props
    // const { id } = this.props.match.params;
    console.log('DETAILS ID', post.id);
    console.log('DETAILS CATEGORY', post.category);
    console.log('MY URL', window.location);
    return (
      <div>
        {this.renderPostDetail()}
        <Link to={`/${post.category}/post-edit/${post.id}`}>Edit Post</Link>
        <Link to="/">Back</Link>
        {/* <button type="button" onClick={this.removePost()}>Remove Post</button> */}
      </div>
    );
  }
}

export default PostsDetails;
