import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../../../actions/action-posts';
import PostsDetails from './posts-details';

class PostsDetailsContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.actions.fetchPost(id); /*eslint-disable-line*/
  }

  render() {
    const { post } = this.props;
    console.log('===>MY post', post);
    return (
      <PostsDetails post={post} />
    );
  }
}

const mapStateToProps = state => ({
  post: state.post.postData,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchPost }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetailsContainer);
