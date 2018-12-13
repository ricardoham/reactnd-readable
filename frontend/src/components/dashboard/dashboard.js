import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPostCategory } from '../../actions/action-categories';
import { fetchAllPosts } from '../../actions/action-posts';
import PostsListContainer from '../posts-list/posts-list-container';

class Dashboard extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchAllPosts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params !== this.props.match.params) { /*eslint-disable-line*/
      const { category } = this.props.match.params; /*eslint-disable-line*/

      if (category != null) {
        this.props.actions.fetchPostCategory(category);
      } else {
        this.props.actions.fetchAllPosts();
      }
    }
  }

  render() {
    const { posts } = this.props;
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
  actions: PropTypes.object.isRequired,
  category: PropTypes.string,
  posts: PropTypes.array,
};

Dashboard.defaultProps = {
  posts: undefined,
  category: undefined,
};

const mapStateToProps = state => ({
  posts: state.posts.postsData,
  postCategory: state.posts.isDetails,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchAllPosts, fetchPostCategory }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
