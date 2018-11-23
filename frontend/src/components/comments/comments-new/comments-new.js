import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

class CommentsNew extends React.PureComponent {
  sendComment = (values) => {
    const { comment, addComments, editPost, parentId } = this.props;
    console.log('FOI');
    console.log('MY valeus', values);
    console.log('Parent ID', parentId);
    if (!comment) {
      return addComments(values, parentId);
    }
    return editPost(comment.id, values);
    // console.log('CommentsNew values', values);
    // return addComments(values, parentId);
  }

  render() {
    const { comment } = this.props;

    console.log('TEM comment', comment);
    return (
      <div>
        <Formik
          onSubmit={this.sendComment}
          initialValues={!comment ? { author: '', body: '' } : { author: comment.author, body: comment.body }}
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

export default CommentsNew;
