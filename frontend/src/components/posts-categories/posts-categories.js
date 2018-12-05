import React from 'react';

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

export default PostsCategories;
