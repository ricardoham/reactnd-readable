import React from 'react';
import PropTypes from 'prop-types';
import { Formik, withFormik } from 'formik';
import * as Yup from 'yup';
import { addPost } from '../../../actions/action-posts';

class PostNew extends React.PureComponent {

  render() {
    const {
      values,
      errors,
      dirty,
      status,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
    } = this.props;

    return (
      <Formik>
        <form onSubmit={handleSubmit}>
          <div className="post-new">
            <label htmlFor="title">
              Title:
              <input
                name="title"
                type="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
            </label>
            <label htmlFor="author">
              Author:
              <input
                name="author"
                type="author"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="body">
              Post:
              <textarea
                name="body"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
          </div>
          <button
            type="button"
            disabled={!dirty || isSubmitting}
          >
            Submit Post!
          </button>
          <button type="button" disabled={isSubmitting}>Cancel</button>
        </form>
      </Formik>
    );
  }
}


export default function enhanceForm() {
  const { submitPost } = this.props;

  return ({
    handleSubmit: (values, { submitPost(values) }) =>

  });
}

// export default enhanceForm({
//   handleSubmit: (values, { this.props.submitPost() })
// })
