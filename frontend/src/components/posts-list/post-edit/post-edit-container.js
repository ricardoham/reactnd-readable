import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, editPost } from '../../../actions/action-posts';
import PostEdit from './post-edit';

class PostEditContainer extends Component {  
  componentDidMount() {
    console.log('ENTREI EDIT CONTAINER');
    const { id } = this.props.match.params;
    console.log('-ID edit container', id);
    this.props.actions.fetchPost(id); /*eslint-disable-line*/
  }

  render() {
    console.log('ENTREI EDIT CONTAINER');

    const { post } = this.props;
    console.log('--=-=Container Post', post);
    if (!post) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <PostEdit post={post} editPost={this.props.actions.editPost} />
    );
  }
}

const mapStateToProps = state => ({
  post: state.post.postData,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchPost, editPost }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostEditContainer);
