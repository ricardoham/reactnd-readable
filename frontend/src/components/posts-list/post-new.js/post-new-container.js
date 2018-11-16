import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from '../../../actions/action-posts';
import { fetchCategories } from '../../../actions/action-categories';
import PostNew from './post-new';

class PostNewContainer extends React.PureComponent {
  componentDidMount() {
    this.props.actions.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    if (!categories) {
      return (
        <div>Loading...</div>
      );
    }

    console.log('asdasdad', this.props.postAdd);
    return (
      <PostNew
        addPost={this.props.actions.addPost} /*eslint-disable-line*/
        categories={categories}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addPost, fetchCategories }, dispatch),
});

const mapStateToProps = state => ({
  success: state.posts.success,
  categories: state.categories.categoriesData,
  postAdd: state.posts.postAddData,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostNewContainer);
