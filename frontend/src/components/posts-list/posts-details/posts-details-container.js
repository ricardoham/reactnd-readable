import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, deletePost, voteScorePosts } from '../../../actions/action-posts';
import PostsDetails from './posts-details';
// import CommentsListContainer from '../../comments/comments-list-container';

class PostsDetailsContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; /*eslint-disable-line*/
    this.props.actions.fetchPost(id); /*eslint-disable-line*/
  }

  render() {
    const { post, voteScore } = this.props;
    // const { id, category } = this.props.match.params; /*eslint-disable-line*/
    console.log('===>MY post details container', post);
    console.log('===>MY post voteScore', voteScore);


    if (!post && !voteScore) {
      return (
        <div>Loading...Details</div>
      );
    }
    console.log('===>MY post  After details container', post);
    console.log('===>MY post After voteScore', voteScore);


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
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchPost, deletePost, voteScorePosts }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetailsContainer);
