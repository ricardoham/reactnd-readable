import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from '../../../actions/action-posts';
import PostNew from './post-new';

class PostNewContainer extends React.PureComponent {
  render() {
    console.log('asdasdad', this.props.postAdd);
    return (
      <PostNew
        addPost={this.props.actions.addPost} /*eslint-disable-line*/
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addPost }, dispatch),
});

const mapStateToProps = state => ({
  success: state.posts.success,
  postAdd: state.posts.postAddData,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostNewContainer);
