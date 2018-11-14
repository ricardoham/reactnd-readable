import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

class PostNew extends React.PureComponent {
  sendPost = (values) => {
    const { addPost } = this.props;
    console.log('FOI');
    console.log('MY valeus', values);
    addPost(values);
  }

  render() {
    return (
      <Formik
        onSubmit={this.sendPost}
        initialValues={{ title: '', author: '', body: '' }}
      >
        {(props) => {
          const { values, handleSubmit, handleChange, handleBlur, isSubmitting } = props;
          return (
            <form onSubmit={handleSubmit}>
              <div className="post-new">
              Title:
                <input
                  id="title"
                  name="title"
                  type="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                Author:
                <input
                  name="author"
                  type="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                />
                Post:
                <textarea
                  name="body"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.body}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
              >
            Submit Post!
              </button>
              <button type="button" disabled={isSubmitting}>Cancel</button>
            </form>
          );
        }}
      </Formik>
    );
  }
}

export default PostNew;
