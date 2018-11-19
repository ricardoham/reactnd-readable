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
    if (!post) {
      return (
        <div>Loading...</div>
      );
    }
    console.log('===>MY post details container', post);
    return (
      <PostsDetails
        post={post}
        removePost={this.props.actions.deletePost}
      />
    );
  }
}

const mapStateToProps = state => ({
  post: state.post.postData,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchPost, deletePost }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetailsContainer);
