import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllPosts } from '../../actions/action-posts';
import PostsList from './posts-list';

class PostsListContainer extends Component {
  componentDidMount() {
    this.props.actions.fetchAllPosts(); /*eslint-disable-line*/
  }

  render() {
    const { posts, loading } = this.props;
    console.log('posts', posts);
    if (!posts) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <PostsList posts={posts} />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.postsData,
  loading: state.posts.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchAllPosts }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);
