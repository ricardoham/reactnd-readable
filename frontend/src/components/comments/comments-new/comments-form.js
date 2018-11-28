import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

// .then(() => toggleFormNew());

class CommentsForm extends React.PureComponent {
  sendComment = (values) => {
    const { comment, addComments, editComment, parentId, fetchAllComments } = this.props;
    console.log('FOI');
    console.log('MY valeus', values);
    console.log('Parent ID', parentId);
    if (!comment) {
      return addComments(values, parentId).then(() => fetchAllComments(parentId));
    }
    return editComment(comment.id, values);
  }

  render() {
    const { comment, author, body } = this.props;

    console.log('TEM comment', comment);
    return (
      <div>
        <Formik
          onSubmit={this.sendComment}
          initialValues={!comment ? { author: '', body: '' } : { author, body }}
        >
          {(props) => {
            const {
              values, handleSubmit, handleChange, handleBlur, isSubmitting,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className="post-new">
                  Author:
                  <input
                    id="author"
                    name="author"
                    type="author"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.author}
                  />
                  Comment:
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

export default CommentsForm;
