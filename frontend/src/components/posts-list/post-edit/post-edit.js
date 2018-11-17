import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

class PostEdit extends React.PureComponent {

  sendPost = (values) => {
    const { post, editPost } = this.props;
    console.log('FOI');
    console.log('MY valeus', values);
    editPost(post.id, values);
  }

  render() {
    const { post } = this.props;
    console.log('===Edit post', post);
    return (
      <div>
      <Formik
        onSubmit={this.sendPost}
        initialValues={{ title: post.title, body: post.body }}
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

export default PostEdit;
