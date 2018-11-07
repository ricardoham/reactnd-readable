import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

class PostNew extends React.PureComponent {
  handleSubmit = () => {
    const { onSubmit } = this.props;
    onSubmit();
  }

  render() {
    return (
      <Formik>

      {/* {props => {
        values
      }} */}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title:
            <input name="title" type="title" />
          </label>
          <label htmlFor="author">
            Author:
            <input />
          </label>
          <label htmlFor="post">
            Post:
            <textarea />
          </label>
          <button type="button">Submit Post!</button>
          <button type="button">Cancel</button>
        </form>
      </Formik>
    );
  }
}

PostNew.protoType = {
  onSubmit: PropTypes.func.isRequired,
};

export default PostNew;
