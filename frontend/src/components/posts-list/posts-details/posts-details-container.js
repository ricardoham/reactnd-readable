import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, deletePost, voteScorePosts } from '../../../actions/action-posts';
import PostsDetails from './posts-details';
import PostNotFound from './post-not-found';

class PostsDetailsContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; /*eslint-disable-line*/
    this.props.actions.fetchPost(id); /*eslint-disable-line*/
  }

  render() {
    const {
      post, voteScore, deletedPost, actions,
    } = this.props;

    if (deletedPost) {
      return <Redirect to="/" />;
    }

    if (!post && !voteScore) {
      return (
        <div>Loading...Details</div>
      );
    }

    if (Object.keys(post).length === 0) {
      return <PostNotFound />;
    }

    return (
      <div>
        <PostsDetails
          singlePost={post}
          removePost={actions.deletePost}
          voteScorePosts={actions.voteScorePosts}
          voteScore={voteScore}
        />
      </div>
    );
  }
}

PostsDetailsContainer.propTypes = {
  post: PropTypes.object,
  voteScore: PropTypes.object,
  deletedPost: PropTypes.bool,
};

PostsDetailsContainer.defaultProps = {
  post: undefined,
  voteScore: undefined,
  deletedPost: undefined,
};

const mapStateToProps = state => ({
  post: state.posts.postData,
  voteScore: state.posts.postVoteData,
  deletedPost: state.posts.deletedPost,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchPost, deletePost, voteScorePosts }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetailsContainer);
