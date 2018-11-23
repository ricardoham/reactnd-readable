import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllPosts } from '../../actions/action-posts';
import PostsList from './posts-list';

class PostsListContainer extends Component {
  componentDidMount() {
    this.props.actions.fetchAllPosts(); /*eslint-disable-line*/
  }

  render() {
    const { posts } = this.props;
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

PostsListContainer.propTypes = {
  posts: PropTypes.array, /*eslint-disable-line*/
};

PostsListContainer.defaultProps = {
  posts: undefined,
};

const mapStateToProps = state => ({
  posts: state.posts.postsData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchAllPosts }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);
