import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../../../actions/action-posts';
import PostsDetails from './posts-details';

const id = '8xf0y6ziyjabvozdd253nd';
class PostsDetailsContainer extends Component {
  componentDidMount() {
    this.props.actions.fetchPost(id); /*eslint-disable-line*/
  }

  render() {
    const { post } = this.props;
    console.log('===>MY post', post);
    return (
      <PostsDetails />
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
