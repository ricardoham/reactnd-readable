import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCommentsPost } from '../../actions/action-comments';

class CommentsContainer extends Component {
  componentDidMount() {
    this.props.actions.fetchCommentsPost()
  }
  render() {
    return (
      
    )
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreatorss({ fetchCommentsPost }, dispatch),
});

const mapStateToProps = state => ({
  categories: state.categories.categoriesData,
  loading: state.categories.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
