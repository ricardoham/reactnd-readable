import React from 'react';
import _ from 'lodash';

class PostsCategories extends React.PureComponent {
  renderCategories = () => {
    const { categories } = this.props;
    console.log('Dentro', categories);

    return _.map(categories, item => (
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
