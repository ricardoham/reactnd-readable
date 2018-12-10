import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

class PostNew extends React.PureComponent {
  sendPost = (values) => {
    const { addPost, post, editPost } = this.props;
    if (!post) {
      return addPost(values);
    }
    return editPost(post.id, values);
  }


  render() {
    const { categories, post } = this.props;
    const validationSchema = Yup.object().shape({
      title: Yup.string()
        .required('Title is required to Post'),
      author: Yup.string()
        .required('Author is required to Post'),
      body: Yup.string()
        .required('A message is required to Post'),
      category: Yup.string()
        .required('A category is required'),
    });

    return (
      <div>
        <Formik
          onSubmit={this.sendPost}
          initialValues={!post ? { title: '', author: '', body: '' }
            : { title: post.title, body: post.body, author: post.author }}
          validationSchema={validationSchema}
        >
          {(props) => {
            const {
              values, handleSubmit, handleChange, handleBlur, isSubmitting, errors, handleReset,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className="post-new">
                  <span>Title:</span>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />

                  <div className="form-validation">{errors.title}</div>
                  <span>Author:</span>
                  <input
                    id="author"
                    name="author"
                    type="author"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.author}
                  />
                  <div className="form-validation">{errors.author}</div>
                  <span>Category:</span>
                  <select
                    id="category"
                    name="category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="selectable"
                  >
                    <option hidden>Chose Category</option>
                    {
                      categories.map(category => (
                        <option key={category.name} value={category.name}>
                          {category.name}
                        </option>
                      ))
                    }
                  </select>
                  <div className="form-validation">{errors.category}</div>

                  <span>Post:</span>
                  <textarea
                    id="body"
                    name="body"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.body}
                  />
                  <div className="form-validation">{errors.body}</div>
                </div>
                <button
                  type="submit"
                  disabled={!values.title || !values.author || !values.body}
                  className="btn btn--common"
                >
                  Submit Post!
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  className="btn btn--alert"
                  onClick={handleReset}

                >
                  Cancel
                </button>
              </form>
            );
          }}
        </Formik>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

PostNew.propTypes = {
  post: PropTypes.object, /*eslint-disable-line*/
  categories: PropTypes.array, /*eslint-disable-line*/
  addPost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
};

PostNew.defaultProps = {
  post: undefined,
  categories: undefined,
};

export default PostNew;
