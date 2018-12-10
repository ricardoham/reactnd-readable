import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchAllPosts } from '../../actions/action-posts';
import { fetchPostCategory } from '../../actions/action-categories';
import postSortBy from '../../actions/action-posts-sort';
import PostsList from './posts-list';

class PostsListContainer extends Component {
  // componentDidMount() {
  //   const { category } = this.props.match.params;
  //   console.log('Navbar Container', category);

  //   if (!category) {
  //     return this.props.actions.fetchAllPosts();
  //   }
  //   return this.props.actions.fetchPostCategory(category); /*eslint-disable-line*/
  //   // this.fetchData();
  // }

  render() {
    const { posts } = this.props;
    console.log('posts', posts);
    if (!posts || posts.length === 0) {
      return (

        <div>
Not yet posts
          <Link to="/post/new">
            <button type="button" className="btn">Add new Post</button>
          </Link>
        </div>
      );
    }
    return (
      <PostsList
        posts={posts}
        postSortBy={this.props.actions.postSortBy}
        sortType={this.props.postsSort}
      />
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
  postsSort: state.postsSort.sortEvent,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchPostCategory, fetchAllPosts, postSortBy }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);
