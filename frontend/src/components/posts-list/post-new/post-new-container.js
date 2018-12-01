import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { addPost, fetchPost, editPost } from '../../../actions/action-posts';
import { fetchCategories } from '../../../actions/action-categories';
import PostNew from './post-new';

class PostNewContainer extends React.PureComponent {
  componentDidMount() {
    // const { id } = this.props.match.params;
    this.props.actions.fetchCategories();
    if (!this.props.post) {
      return this.fetchDataPost();
    }
  }

  fetchDataPost = () => {
    const {id} = this.props.match.params;
    console.log('Post ADD id', id);
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

    console.log('asdasdad', this.props.postAdd);
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
