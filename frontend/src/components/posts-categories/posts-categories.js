import React from 'react';

class PostsCategories extends React.PureComponent {

  renderCategories = () => {
    const { categories } = this.props;
    console.log('Dentro', categories);
    return categories.map(item => (
      <div>
        <span>{item.name}</span>
        <span>{item.path}</span>
      </div>
    ));
  }

  render() {
    return (
      <div>{this.renderCategories()}</div>
    );
  }
}

export default PostsCategories;
