import React from 'react';
import PropTypes from 'prop-types';

class PostsCategories extends React.PureComponent {
  renderCategories = () => {
    const { categories } = this.props;
    return categories.map(item => (
      <li>{item.name}</li>
    ));
  }

  render() {
    return (
      <ul>{this.renderCategories()}</ul>
    );
  }
}

PostsCategories.propTypes = {
  categories: PropTypes.array,
};

PostsCategories.defaultProps = {
  categories: undefined,
};

export default PostsCategories;
