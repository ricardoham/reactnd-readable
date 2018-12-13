import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../../actions/action-categories';
import PostsCategories from './posts-categories';

class PostsCategoriesContainer extends Component {
  componentDidMount() {
    this.props.actions.fetchCategories(); /*eslint-disable-line*/
  }

  render() {
    const { categories } = this.props;
    if (!categories) {
      return <div>Loading categories </div>;
    }
    return (
      <PostsCategories categories={categories} />
    );
  }
}

PostsCategoriesContainer.propTypes = {
  categories: PropTypes.array,
};

PostsCategoriesContainer.defaultProps = {
  categories: undefined,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchCategories }, dispatch),
});

const mapStateToProps = state => ({
  categories: state.categories.categoriesData,
  loading: state.categories.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsCategoriesContainer);
