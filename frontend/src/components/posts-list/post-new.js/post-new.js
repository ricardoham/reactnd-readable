import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
                // value={values.title}
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

export default formikValidations({
  mapPropsToValues
})

// export default PostNew;
