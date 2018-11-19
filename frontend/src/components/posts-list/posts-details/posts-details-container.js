import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, deletePost } from '../../../actions/action-posts';
import PostsDetails from './posts-details';

class PostsDetailsContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; /*eslint-disable-line*/
    this.props.actions.fetchPost(id); /*eslint-disable-line*/
  }

  render() {
    const { post } = this.props;
    const { id, category } = this.props.match.params; /*eslint-disable-line*/

    if (!post) {
      return (
        <div>Loading...Details</div>
      );
    }
    console.log('===>MY post details container', post);
    console.log('===>MY post ID container', id);
    console.log('===>MY post ID container', category);


    return (
      <PostsDetails
        id={id}
        post={post}
        category={category}
        removePost={this.props.actions.deletePost}
      />
    );
  }
}

const mapStateToProps = state => ({
  post: state.posts.postData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchPost, deletePost }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetailsContainer);
