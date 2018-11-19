import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

class PostNew extends React.PureComponent {
  sendPost = (values) => {
    const { addPost, post, editPost } = this.props;
    console.log('FOI');
    console.log('MY valeus', values);
    if (!post) {
      return addPost(values);
    }
    return editPost(post.id, values);
  }

  render() {
    const { categories, post } = this.props;
    return (
      <div>
        <Formik
          onSubmit={this.sendPost}
          initialValues={!post ? { title: '', author: '', body: '' } : { title: post.title, body: post.body }}
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
                    id="author"
                    name="author"
                    type="author"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.author}
                  />
                  Category:
                  <select
                    id="category"
                    name="category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Chose Category</option>
                    {
                      categories.map(category => (
                        <option key={category.name} value={category.name}>
                          {category.name}
                        </option>
                      ))
                    }
                  </select>
                  Post:
                  <textarea
                    id="body"
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
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default PostNew;
