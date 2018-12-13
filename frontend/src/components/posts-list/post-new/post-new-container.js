import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { addPost, fetchPost, editPost } from '../../../actions/action-posts';
import { fetchCategories } from '../../../actions/action-categories';
import PostNew from './post-new';

class PostNewContainer extends React.PureComponent {
  componentDidMount() {
    this.props.actions.fetchCategories();
    if (!this.props.post) {
      return this.fetchDataPost();
    }
    return true;
  }


  fetchDataPost = () => {
    const { id } = this.props.match.params; /*eslint-disable-line*/ 
    if (id != null) {
      this.props.fetchPost(id);
    }
  }

  render() {
    const { categories, post, successPost } = this.props;
    if (!categories) {
      return (
        <div>Loading...NEW</div>
      );
    }

    if (successPost) {
      return <Redirect to="/" />;
    }

    return (
      <PostNew
        addPost={this.props.actions.addPost} /*eslint-disable-line*/
        editPost={this.props.actions.editPost} /*eslint-disable-line*/
        categories={categories}
        post={post}
      />
    );
  }
}

PostNewContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  fetchPost: PropTypes.func,
  post: PropTypes.object,
  categories: PropTypes.array,
  successPost: PropTypes.bool,
};

PostNewContainer.defaultProps = {
  post: undefined,
  categories: undefined,
  successPost: undefined,
  fetchPost: undefined,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addPost, fetchCategories, fetchPost, editPost,
  }, dispatch),
});

const mapStateToProps = state => ({
  success: state.posts.success,
  categories: state.categories.categoriesData,
  postAdd: state.posts.postAddData,
  post: state.posts.postData,
  successPost: state.posts.successPost,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostNewContainer);
