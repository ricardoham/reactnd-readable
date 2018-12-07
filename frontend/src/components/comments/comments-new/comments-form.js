import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

class CommentsForm extends React.PureComponent {
  sendComment = (values) => {
    const {
      comment,
      addComments,
      editComment,
      parentId,
      fetchAllComments,
      toggleFormEdit,
    } = this.props;
    if (!comment) {
      return addComments(values, parentId).then(() => fetchAllComments(parentId));
    }
    return editComment(comment.id, values).then(() => toggleFormEdit());
  }

  render() {
    const { comment, author, body } = this.props;
    const validationSchema = Yup.object().shape({
      author: Yup.string()
        .required('Author is required to Comment'),
      body: Yup.string()
        .required('A message is required to Comment'),
    });


    return (
      <div>
        <Formik
          onSubmit={this.sendComment}
          initialValues={!comment ? { author: '', body: '' } : { author, body }}
          validationSchema={validationSchema}
        >
          {(props) => {
            const {
              values, errors, handleSubmit, handleChange, handleBlur, isSubmitting,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className="post-new">
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

                  <span>Comment:</span>
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
                  disabled={!values.author || !values.body}
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

export default CommentsForm;
