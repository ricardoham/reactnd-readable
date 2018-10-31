import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchCategories from '../../actions/action-categories';
import PostsCategories from './posts-categories';

class PostsCategoriesContainer extends Component {
  componentDidMount() {
    this.props.actions.fetchCategories(); /*eslint-disable-line*/
  }

  render() {
    const { categories, loading } = this.props;
    console.log('categories', categories);
    if (loading) {
      return (
        <div>Loading Categories...</div>
      );
    }
    return (
      <PostsCategories categories={categories} />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categoriesData,
  loading: state.categories.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchCategories }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsCategoriesContainer);
