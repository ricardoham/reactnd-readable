import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost, fetchPost, editPost } from '../../../actions/action-posts';
import { fetchCategories } from '../../../actions/action-categories';
import PostNew from './post-new';

class PostNewContainer extends React.PureComponent {
  componentDidMount() {
    // const { id } = this.props.match.params;
    this.props.actions.fetchCategories();
    if (!this.props.post) {
      return this.fetchData();
    }
  }

  fetchData = () => {
    const {id} = this.props.match.params
    if (id != null) {
      this.props.fetchPost(id);
    }
  }

  render() {
    const { categories, post } = this.props;
    if (!categories) {
      return (
        <div>Loading...NEW</div>
      );
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PostNewContainer);
