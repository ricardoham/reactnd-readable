import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPostCategory } from '../../actions/action-categories';
import { fetchAllPosts } from '../../actions/action-posts';
import PostsListContainer from '../posts-list/posts-list-container';

class Dashboard extends Component {
  componentDidMount() {
    // const { category } = this.props.match.params;
    // console.log('Navbar Container', category);

    // if (!category) {
    //   return this.props.actions.fetchAllPosts();
    // }
    // return this.props.actions.fetchPostCategory(category); /*eslint-disable-line*/
    this.fetchData();
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params !== this.props.match.params) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const {category} = this.props.match.params;
    console.log('Category dashboar', category);
    if (category != null) {
      return this.props.actions.fetchPostCategory(category)
    } else {
      return this.props.actions.fetchAllPosts()
    }
  }

  render() {
    const { posts } = this.props;
    // console.log('posts', posts);
    console.log('Post by Categoy', posts);
    if (!posts) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <PostsListContainer />
    );
  }
}

Dashboard.propTypes = {
  posts: PropTypes.array, /*eslint-disable-line*/
};

Dashboard.defaultProps = {
  posts: undefined,
};

const mapStateToProps = state => ({
  posts: state.posts.postsData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchAllPosts, fetchPostCategory }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
