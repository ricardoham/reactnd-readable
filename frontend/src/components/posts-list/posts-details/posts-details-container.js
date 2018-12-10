import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, deletePost, voteScorePosts } from '../../../actions/action-posts';
import PostsDetails from './posts-details';
// import CommentsListContainer from '../../comments/comments-list-container';
import PostNotFound from './post-not-found';

class PostsDetailsContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; /*eslint-disable-line*/
    this.props.actions.fetchPost(id); /*eslint-disable-line*/
  }

  render() {
    const { post, voteScore, deletedPost } = this.props;
    console.log('===>MY post details container', post);
    console.log('===>MY post voteScore', voteScore);


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
          removePost={this.props.actions.deletePost} /*eslint-disable-line*/
          voteScorePosts={this.props.actions.voteScorePosts}
          voteScore={voteScore}
        />
      </div>
    );
  }
}

PostsDetailsContainer.propTypes = {
  post: PropTypes.object, /*eslint-disable-line*/
};

PostsDetailsContainer.defaultProps = {
  post: undefined,
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
